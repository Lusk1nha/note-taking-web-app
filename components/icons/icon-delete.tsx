"use client";

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
    viewBox="0 0 24 25"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const IconDelete = memo(ForwardRef)
export default IconDelete
