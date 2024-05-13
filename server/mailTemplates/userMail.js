exports.userMail = (name,email,message)=> {
  return `<!DOCTYPE html> 
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Contact Form Confirmation</title>
      <style>
          body {
              background-color: #ffffff;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #333333;
              margin: 0;
              padding: 0;
          }
  
  
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
          }
  
          .logo {
            width: 150px;
            height:150px;
            aspect-ratio:square;
              margin-bottom: 20px;
              border-radius: 50%;
              object-fit:cover;
          }
  
          .message {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 20px;
          }
  
          .body {
              font-size: 16px;
              margin-bottom: 20px;
          }
  
          .cta {
              display: inline-block;
              padding: 10px 20px;
              background-color: #FFD60A;
              color: #000000;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
          }
  
          .support {
              font-size: 14px;
              color: #999999;
              margin-top: 20px;
          }
  
          .highlight {
              font-weight: bold;
          }
      </style>
  
  </head>
  
  <body>
      <div class="container">
          <a href="https://studynotion-edtech-project.vercel.app"><img 
                  class="logo"
                  src="https://res.cloudinary.com/dyplxj2ma/image/upload/v1715505985/Ashish/IMG_20230703_115750_1_-Photoroom.png-Photoroom_pyiicr.png" 
                  alt="My Logo"></a>
          <div class="message">Contact Confirmation</div>
          <div class="body">
              <p>Hello Mr. ${name},</p>
              <p>I am Ashish Shah </p>
              <p>Thank you for contacting me. I have received your message and will respond to you very soon.
              </p>
              <p>Here are the details you provided:</p>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>
          </div>
          <div class="support">If we can discuss something else,  please feel free to reach out to me at <a href="#">ashishshah036@gmail.com</a></div>
      </div>
  </body>
  
  </html>`
}