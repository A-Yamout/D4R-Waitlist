// 404 page (duh)
export default function FourZeroFour() {
    return (
      <>
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:space-x-6">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Sorry we couldn't find this page.
            </p>
            <p className="mb-8">
              That means I messed something up or you went to the wrong address, btw if you wanna help develop this website you can <a className="text-[#fd4c4c] font-bold opacity-100 hover:opacity-80" href="mailto:a-yamout@adam4stuco.com">reach out to me</a> (Yes ik this isn't v-centered but idk how to fix it.)
            </p>
          </div>
        </div>
    </div>
      </>
    )
  }