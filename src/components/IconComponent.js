import React from "react";
import { TickCircleIcon,CrossIcon } from 'evergreen-ui';
let value = 0;
const Icon = ({ value }) => {
    if (value == 0) {
        return (
            
            <CrossIcon color="danger" marginRight={16} />
        )
    }
    else {
        return (
            <TickCircleIcon color="success" marginRight={16} />
        )
    }


}
export default Icon;