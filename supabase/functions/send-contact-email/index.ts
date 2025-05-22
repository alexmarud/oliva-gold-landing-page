
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message?: string;
  created_at?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Format the email content
    const emailContent = `
      <h2>Новая заявка с сайта Олива Голд</h2>
      <p><strong>Дата:</strong> ${formData.created_at || new Date().toISOString()}</p>
      <p><strong>Компания:</strong> ${formData.company}</p>
      <p><strong>Имя:</strong> ${formData.name}</p>
      <p><strong>Телефон:</strong> ${formData.phone}</p>
      <p><strong>Почта:</strong> ${formData.email}</p>
      ${formData.message ? `<p><strong>Сообщение:</strong> ${formData.message}</p>` : ''}
    `;

    // Send the email using FormSubmit.co service
    const response = await fetch("https://formsubmit.co/ajax/importamare@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: `Заявка с сайта Олива Голд от ${formData.company}`,
        message: emailContent,
        _template: "table",
      }),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
