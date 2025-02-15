import React from 'react'
import toast from 'react-hot-toast'
import MainNavBar from '../components/MainNavBar'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { convertNanotonsToTon } from "../utils/convertNanotonsToTon";
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';


const Deposite = () => {
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();
    
    const [tonConnectUI] = useTonConnectUI();

    const handleDeposit = async () => {
        if (amount > 0) {

            await tonConnectUI.sendTransaction({
                validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
                messages: [
                    {
                        address: "0QD-SuoCHsCL2pIZfE8IAKsjc0aDpDUQAoo-ALHl2mje04A-",
                        amount: '5000000',
                    }
                ]
            });
            // console.log(`Depositing ${amount} TON...`);
            // setTimeout(() => {
            //     console.log("Success Deposit!");
            //     navigate('#');
            // }, 1000);
        }
    };

    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toast.success("Copied successfully!");
        } catch (err) {
            toast.error("Failed to copy!");
        }
    };

    const walletConnect = async () => {
        toast.success("Wallet Connect Coming Soon!");
    }

    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="p-4 max-w-md mx-auto text-center">
                                    <div>
                                        <h2 className="text-xl font-semibold">Enter Amount to Deposit</h2>
                                        <input
                                            type="number"
                                            className="bg-transparent p-3 text-light border-0"
                                            placeholder="Amount in TON"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                        <button
                                            className="btn btn-primary m-2 p-3"
                                            onClick={handleDeposit}
                                        >
                                            Deposit
                                        </button>
                                    </div>
                                </div>
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 p-2 col-sm-6">
                                    <button onClick={walletConnect} className='btn btn-secondary w-100'>
                                        <div style={{ marginLeft: "20%" }} className="custom-ton-button">
                                            <TonConnectButton />
                                        </div>
                                    </button>
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h5 onClick={() => handleCopy("bc1qd8x8mw8qvz5dy0gyknwsdptxpddc6dcf886ht7")}>bc1qd8x8mw8qvz5dy0gyknwsd...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <h4 className="card-title">Deposit Using Bitcoin | USDT(TRC20)</h4>
                                            <p className="card-description">Bitcoin | USDT Deposit Method</p><hr />
                                            <form className="forms-sample">
                                                <p className="card-description"><span className="text-warning">Please make sure you upload your payment proof for quick payment verification On confirmation,</span> <span className="text-primary">our system will automatically Fund your account and notify you via email address.</span></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-sm-6 grid-margin mt-5">
                                    <div style={{ border: "none", borderRadius: "9px" }} className="card card-gradient">
                                        <div className="card-body card-gradient">
                                            <h5 onClick={() => handleCopy("TEEdfYXuH8j7AUgVbBgok8vSqXsEWvzub6")}>TEEdfYXuH8j7AUgVbBgok8vSqXs...<i style={{ cursor: "pointer" }} className="fas fa-copy text-warning m-1"></i></h5>
                                            <h4 className="card-title">Deposit Using USDT | USDT(TRC20)</h4>
                                            <p className="card-description">USD | USDT Deposit Method</p><hr />
                                            <p className="card-description">Request other available Deposit Method</p>
                                            <p className="card-description"><span className="text-success">Once requested, you will receive the payment details via our support mail....Once payment</span> is made using this method you are to send your payment proof to our support mail support@hintsprimefx.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Deposite;
