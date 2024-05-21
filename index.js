const Notification = (props) => {
  //  Write your code here.
  const { text, url, className } = props;
  return (
    <div className={className}>
      <img className="img" src={url} />
      <p className="notify-content">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="notification-label-1"
      text="Information Message"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="notification-label-2"
      text="Success Message"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="notification-label-3"
      text="Warning Message"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="notification-label-4"
      text="Error Message"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
