import React from 'react'

export default function Modal({id,header,body,footer,onClose}) {
  return (
    <div id={id || 'modal'} className='m-10 flex flex-col items-center justify-between bg-gray-600 fixed z-10  top-0  p-14 rounded-md w-[80%] h-[50%] overflow-auto text-yellow-500 text-3xl'>
        {/* close btn */}
        <div onClick={onClose} className='cursor-pointer'>&times;</div>
        {/* header */}
        <div>
            {
                header || <div>This is defuault Header</div>
            }
        </div>

        {/* Body */}
        <div>
            {
                body || <div>This is default Body</div>
            }
        </div>

        {/* Footer */}
        <div>
            {
                footer || <div>This is default Footer</div>
            }
        </div>
    </div>
  )
}
