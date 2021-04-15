import React from "react";
import { TickCircleIcon,CrossIcon } from 'evergreen-ui';
const Icon = ({ value: val }) => {
    if (val == 0) {
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