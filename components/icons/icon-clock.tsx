"use client";

import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const IconClock = memo(ForwardRef)
export default IconClock
