
export const SkewedLogo = () => {
  return (
    <div
      className='p-2 text-gray-900 transform -skew-x-12 bg-default-50'
      style={{ transition: "font-weight 0.1s ease" }}
    >
      <h1 className="text-6xl italic font-bold transform skew-x-12">
      {/* <h1 className="italic font-bold transform skew-x-12 text-7xl"> */}
        BOTTINI
      </h1>
      <div
        className='px-1 bg-primary'
        style={{ transition: "font-weight 0.1s ease" }}
      >
        <h3 className="text-large">Controladores de plagas</h3>
        {/* <h3 className="text-xl">Controladores de plagas</h3> */}
      </div>
    </div>
  )
}