import { ZoomMtg } from "@zoomus/websdk";

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const getMeetingSignature = async (meetingNumber, role) => {
  // Replace 'https://your-nodejs-server-url' with the actual URL of your Node.js server on Replit
  const response = await fetch("https://your-nodejs-server-url/signature", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ meetingNumber, role }),
  });

  if (!response.ok) {
    throw new Error("Error fetching meeting signature");
  }

  const { signature } = await response.json();
  return signature;
};

const joinMeeting = async (meetingNumber, userName, apiKey, meetingPassword, role = 0) => {
  try {
    const signature = await getMeetingSignature(meetingNumber, role);

    ZoomMtg.init({
      leaveUrl: "https://discord.gg/fY6zSGXj",
      isSupportAV: true,
      success: () => {
        ZoomMtg.join({
          meetingNumber: meetingNumber,
          userName: userName,
          signature: signature,
          apiKey: apiKey,
          passWord: meetingPassword,
          success: () => {
            console.log("Join meeting success");
          },
          error: (error) => {
            console.log("Error joining meeting", error);
          },
        });
      },
      error: (error) => {
        console.log("Error initializing Zoom SDK", error);
      },
    });
  } catch (error) {
    console.log("Error fetching meeting signature", error);
  }
};

export { joinMeeting };