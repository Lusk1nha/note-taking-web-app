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
      fillRule="evenodd"
      d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const IconSearch = memo(ForwardRef)
export default IconSearch