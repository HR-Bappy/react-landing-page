import { useRef } from "react";
import useCountUp from "./counter";

const  Counter = ({end,prefix=''}:any) =>{
    const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(ref, end);
    return(
        <span ref={ref}>{prefix+count}</span>
    )
}
export default Counter