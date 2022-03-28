import { useState } from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";
import CustomSelect from "./CustomSelect";
import SinglePaySplit from "./Modals/SinglePaySplit";
import SuccessModal from "./Modals/SuccessModal";

const MultiplePay = () => {
    return (
        <div className="border border-blue-700 mt-12 rounded-lg px-2 py-8">
            <label>Recipient</label>
            <div>
                <Button>Add recipient</Button>
                <Button>Import CSV</Button>
            </div>
        </div>
    )
}

export default MultiplePay