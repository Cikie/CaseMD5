import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAccount} from "../../../services/adminService";

export function ListUser() {
    const dispatch = useDispatch();
    const account = useSelector(({account}) => {
        console.log(account.account)
        return account.account
    });
    useEffect(() => {
        dispatch(getAccount())
    }, [])
    return (
        <>
            <table>
                <tr>
                    <td>STT</td>
                    <td>User</td>
                </tr>
                { account &&
                    account.map((item,index)=>(
                        <tr>
                            <td>{index}</td>
                            <td>{item.userName}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}