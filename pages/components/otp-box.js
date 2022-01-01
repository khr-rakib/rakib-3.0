import { useState } from "react";
import Layout from "../../components/Layout";
import Gist from "react-gist";

export default function OtopBox() {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <Layout title="Otp Box">
            <div className="w-full md:w-6/12 mx-auto shadow text-center space-y-2 p-4">
                <p>Enter the OTP sent to you to verify your identity</p>
                <div className="flex items-center justify-center space-x-2">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="border shadow w-10 h-10 text-center rounded focus:border-0"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                </div>

                <p>OTP Entered - {otp.join("")}</p>

                <p className="space-x-2">
                    <button
                        className="bg-gray-200 shadow px-3 text-black rounded hover:bg-gray-300"
                        onClick={e => setOtp([...otp.map(v => "")])}
                    >
                        Clear
                    </button>
                    <button
                        className="bg-green-200 shadow px-3 text-black rounded hover:bg-green-300"
                        onClick={e =>
                            alert("Entered OTP is " + otp.join(""))
                        }
                    >
                        Verify OTP
                    </button>
                </p>
            </div>

            <h2 className="text-center underline decoration-wavy decoration-blue-400 text-xl">Source Code Below</h2>
            <div className="mt-8 space-y-4">
                {/* <h3>You have to create a component just like this.</h3> */}
                <Gist id="9b68779bd423879f1cce485283e49a4b" />
            </div>
        </Layout>
    )
}