
                {
                    serviceCart.map((data, index) => <div>

                          <div className="cart bg-[#0525b70a] p-2 rounded-xl border border-[#0084ff]"
                            key={data.id}
                          >
                        <div className="cart-contain bg-[#11223caf] text-white p-3 rounded-xl">
                              <div className="cart-header">
                           <img src={data.pic} alt="" className="rounded-xl" />
                      </div>
                      <div className="cart-body">
                        <img src="" alt="" className="" />
                        <h2 className="font-[500] mt-3 text-xl">{data?.name}</h2>

                        {showContent ? (
          <div>
            <p>{data?.description}</p>
            <button onClick={toggleTruncate}>Read less</button>
          </div>
        ) : (
          <div>
            <p>{data?.description.slice(0, 130)}</p>
            <button onClick={toggleTruncate}>Read more</button>
          </div>
        )}

                        {/* <small className="mt-2 text-[#d4d4d4]">
                         {readMore ? data?.description.slice(0, 130) : data.description}
                        </small>

                        <button onClick={()=>readMores(index)} className="text-[#0095ff] mt-2">{readMore ? "Read More" : "Read Less"}</button> */}

                        <button className="mt-3 bg-[#1c40bf] w-full p-2 rounded-lg shadow-md duration-200 text-white  hover:bg-[#3454C4]">Get Started with us</button>
                      </div>
                        </div>
                  </div>
                    </div>)
                }# portfolio2.o
