import React from 'react'

const MessageSection = () => {
  return (
      <section className="message-content">
          <div className="contaner mx-auto flex-center py-28 relative">
              <div className="w-full h-full">
                  <div className="msg-wrapper">
                      <h1 className='first-message'>Stir Up Your Fearless Past And</h1>

                      <div className="msg-text-scroll">
                          <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                              <h2 className='text-red-brown'>Fuel Up</h2>
                        </div>
                      </div>

                      <h1 className="second-message">
                          Your future with every gulp of perfect protein
                      </h1>
                  </div>

                  <div className="flex-center md:mt-20 mt-10">
                      <div className="max-w-md px-10 flex-center overflow-hidden">
                          <p>
                              Rev Up Your Rebel spirit And Feed The Adventure Of Life With
                              SPYLT, Where You're One Chug Away From Epic Nostalgia And
                              Fearless Fun.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </section>
)
}

export default MessageSection