import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const IconPlus = memo(ForwardRef)
export default IconPlus