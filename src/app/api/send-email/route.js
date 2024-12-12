import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json(); // Parse the request body
        const { name, email, phone, organization, source, message } = body;

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.webmail.com', // Replace with your SMTP server
            port: 587, // Replace with the port for your SMTP server
            secure: false, // Use `true` if using port 465
            auth: {
                user: 'haridass.murali@cube-identity.com',
                pass: 'Hari@2492',
            },
        });

        // Define the email content
        const mailOptions = {
            from: '"Contact Form" <haridass.murali@cube-identity.com>', // Sender address
            to: 'harisraj92@gmail.com', // Recipient email address
            subject: 'New Contact Form Submission',
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>How did you hear about us:</strong> ${source}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return a success response
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), {
            status: 500,
        });
    }
}
