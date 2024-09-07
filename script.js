function contactWhatsApp() {
    const phoneNumber = "5534991052980"; // Coloque aqui o número do WhatsApp com o código do país e DDD
    const message = "Olá, gostaria de mais informações sobre os serviços de psicologia.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}