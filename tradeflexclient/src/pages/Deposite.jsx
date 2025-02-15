import React from 'react'
import toast from 'react-hot-toast'
import MainNavBar from '../components/MainNavBar'
import { useState, useEffect } from 'react';
import { convertNanotonsToTon } from "../utils/convertNanotonsToTon";
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';


const Deposite = () => {
    const [amount, setAmount] = useState('');
    const [tonConnectUI] = useTonConnectUI();

    const handleDeposit = async () => {
        const newAmount = convertNanotonsToTon(Number(amount));
        if (amount >= 1) {
            await tonConnectUI.sendTransaction({
                validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
                messages: [
                    {
                        address: "UQDmVwpFwAQIFJO8T-KHWfZYqGYpmlzuhLM7iwV4jROQ1Ysf",
                        amount: newAmount.toString(),
                    }
                ]
            });
        } else if (amount < 1) {
            console.log(amount)
            console.log(convertNanotonsToTon(Number(amount)))
            toast.error("1 TON is the MIN deposite amount!");
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
        // toast.success("Wallet Connect Coming Soon!");
    }

    return (
        <>
            <MainNavBar />
            <div style={{ marginTop: "80px" }} className="container-scroller">
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel m-0 w-100">
                        <div className="content-wrapper">
                            <div className="row">
                            <div className="d-flex w-100 bg-secondary rounded justify-content-center align-items-center mb-3">
                                        <div className="custom-ton-button p-2">
                                            <TonConnectButton />
                                        </div>
                                    </div>
                                <div className="p-4 max-w-md mx-auto text-center">
                                    <div>
                                        <h2 className="text-xl font-semibold">Enter Amount to Deposit</h2>
                                        <p className="card-description"><span className="text-warning">Please make sure you connect your wallet before making deposite</span></p>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text bg-secondary">$TON</span>
                                            <input
                                                type="number"
                                                className="form-control bg-secondary text-light"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                aria-label="Amount (to the nearest dollar)" />
                                            <span className="input-group-text bg-secondary">.00</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleDeposit}
                                            className="btn btn-primary btn-lg">Send Transaction</button>
                                    </div>
                                </div>
                                <div style={{ borderRadius: "0px" }} className="col-xl-6 col-sm-6">
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
