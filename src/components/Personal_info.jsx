import { useState } from "react";
const Personal_info = () => {
    const [PlaceOfBirth, setPlaceOfBirth] = useState('');
    return (
        <div>
            <h2>Hello, My name is Tran Trung</h2>
            <input type='text' placeholder="Enter the place of birth" onChange = {(e) => setPlaceOfBirth(e.target.value)} />
            <p>My place of birth is: {PlaceOfBirth}</p>
        </div>
    )
}
export default Personal_info;