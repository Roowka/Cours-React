import { useState } from "react";

function NotificationManager(props) {
  const PUBLIC_KEY =
    BGuZHZDNqa6Z7y6LFK_Q2L2BXci5FDz9deCHXPY49uTbufy96AmU5V_GD7bLIFh9M6bd1Vok0gm5Q08t7vwYWDg;
  const PRIVATE_KEY = C6XxWoUOGDXGuZ - f9bEeLpAJ564ldKfUr2bM4HERihM;
  const [subscribed, setSubscribed] = useState(
    Notification.permission === "granted"
  );

  async function subscribe() {
    const result = await Notification.requestPermission();
    if (result === "granted") {
      const serviceWorker = await navigator.serviceWorker.ready;
      let subscription = await serviceWorker.pushManager.getSubscription();
      if (subscription === null) {
        const subscriptionOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlB64ToUint8Array(PUBLIC_KEY),
        };
        subscription = await serviceWorker.pushManager.subscribe(
          subscriptionOptions
        );
      }
      const response = await fetch("127.0.0.1:3001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscription),
      });
      if (response.ok) {
        new Notification("Merci", "Vous êtes bien abonnés");
      } else {
        alert("Une erreur est survenue");
      }
    }
  }

  async function testNotification() {
    new Notification("test");
  }

  return (
    <>
      <div className="p-3 fixed-bottom end-0">
        {!subscribed ? (
          <button onClick={subscribe} className="btn btn-primary">
            S'abonner aux notifications
          </button>
        ) : (
          <button onClick={testNotification} className="btn btn-primary">
            Envoyer notification
          </button>
        )}
      </div>
    </>
  );
}

export default NotificationManager;
