import React, { useEffect, useState } from 'react';
import {Sidebar,Posts, AddPosts} from './../../components';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function Dashboard() {
    const token = useState(cookies.get("Token"));
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <Sidebar Token={token} />
                    <div className="col-md-8 center">
                        <AddPosts />

                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    );
}