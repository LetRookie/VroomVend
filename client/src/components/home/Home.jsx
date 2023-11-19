import LastAdded from "../last-added/LastAdded";
import Footer from "../footer/Footer";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <div className="parallax">
                <p>Pick the car which suits you best</p>
            </div>
            <LastAdded />
        </Fragment>

    )
}