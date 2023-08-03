import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utilis/ChatSliice';
import { generateRandomName, makeRandomMessage } from '../utilis/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {

  const[liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(addMessage({
        name: generateRandomName(),
        text: makeRandomMessage(20),
      }));

    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg w-full overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            chatMessage.map((c, i) => (
              <ChatMessage key={i} name={c.name} text={c.text} />
            ))
          }
        </div>
      </div>


      <form
       className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "barkha",
              text: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        >
        <input className="w-96" type="text" 
        value={liveMessage}
         onChange={(e) => {
          setLiveMessage(e.target.value);
         }}
          />
        <button className="bg-slate-300 p-2 ml-2 flex">Submit</button>
      </form>

    </>
  );
};

export default LiveChat;
