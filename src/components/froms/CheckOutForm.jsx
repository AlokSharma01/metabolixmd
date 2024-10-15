import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { toast } from 'react-toastify';
import { postMethod } from '@/services/API/ApiMethod';
import { useRouter } from 'next/router';

const CheckOutForm = ({onNext}) => {
    const wrapperRef = useRef(null);
    const [address, setAddress] = useState('');
    const router = useRouter()
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        const addressComponents = results[0].address_components;

        setAddress(value);
        setCoordinates(latLng);

        addressComponents.forEach(component => {
            const types = component.types;
            if (types.includes("country")) {
                setValue("country", component.long_name);
            }
            if (types.includes("administrative_area_level_1")) {
                setValue("state", component.long_name);
            }
            if (types.includes("locality")) {
                setValue("city", component.long_name);
            }
            if (types.includes("postal_code")) {
                setValue("postalCode", component.long_name);
            }
            if (types.includes("route")) {
                setValue("street", component.long_name);
            }
        });

        setValue('address', value);
    };

    const onSubmit = async (data) => {

        const deliveryAddress = {
            ...data,
            position: {
                type: 'Point',
                coordinates: [coordinates.lng, coordinates.lat]
            }
        };

        const payload = {
            "orderItems": [{
                "product": "663a7dcf91ba0dbbc2179226",
                "quantity": 2

            }],
            deliveryAddress
        };

        try {
            setLoading(true);
            let res = await postMethod("/order", payload);
            setLoading(false);
            onNext({},"success2")
            toast.success(res.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="w-full p-5 md:p-0 md:max-w-fit mx-auto ">
            <div className="w-full md:w-[500px]">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Address<b className="text-red-500">*</b></label>
                        {/* <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                            
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div className="relative">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Enter your address',
                                            className: 'border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full',
                                            name: 'address'
                                        })}
                                    />
                                    <div className={`bg-white z-10 rounded-lg ${suggestions.length > 0 && "border-2 border-zinc-300"} absolute`}>
                                        {loading ? <h6 className="f-400">...loading</h6> : null}
                                        {suggestions.map((suggestion, index) => (
                                            <div
                                                {...getSuggestionItemProps(suggestion)}
                                                key={index}
                                                className="flex d-align-center p-1 pl-5 pr-5"
                                            >
                                                <h6 className="cursor-pointer m-1 h6 f-400">
                                                    {suggestion.description}
                                                </h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete> */}
                        <textarea
                            {...register('address', { required: true })}
                            placeholder="Enter your address"
                            className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                        />
                        {errors.address && <p className="text-red-500 text-xs">Address is required</p>}
                    </div>

                    <div>
                        <label>Street<b className="text-red-500">*</b></label>
                        <input
                            placeholder="Street"
                            {...register('street', { required: true })}
                            className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                        />
                        {errors.street && <p className="text-red-500 text-xs">Street is required</p>}
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label>City<b className="text-red-500">*</b></label>
                            <input
                                placeholder="City"
                                {...register('city', { required: true })}
                                className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                            />
                            {errors.city && <p className="text-red-500 text-xs">City is required</p>}
                        </div>
                        <div>
                            <label>State<b className="text-red-500">*</b></label>
                            <input
                                placeholder="State"
                                {...register('state', { required: true })}
                                className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                            />
                            {errors.state && <p className="text-red-500 text-xs">State is required</p>}
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label>Country<b className="text-red-500">*</b></label>
                            <input
                                placeholder="India"
                                {...register('country', { required: true })}
                                className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                            />
                            {errors.country && <p className="text-red-500 text-xs">Country is required</p>}
                        </div>
                        <div>
                            <label>Postal code<b className="text-red-500">*</b></label>
                            <input
                                placeholder="462038"
                                {...register('postalCode', { required: true, pattern: /^[0-9]{6}$/ })}
                                className="border outline-none p-1 pl-3 pr-3 border-zinc-400 rounded-md w-full"
                            />
                            {errors.postalCode && <p className="text-red-500 text-xs">Postal code must be 6 digits</p>}
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className={`mt-6 w-full py-3 text-white font-semibold rounded-full ${loading ? "bg-gray-400" : "bg-primary hover:bg-primary"}`}
                    >
                        {loading ? "Loading..." : "Checkout"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckOutForm;
