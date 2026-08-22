/**
 * Link de pagamento do produto.
 * Assim que o link do checkout for definido, basta colar a URL aqui
 * e TODOS os botões de compra da página passam a apontar para ela.
 */
export const CHECKOUT_URL = "https://pay.kumbipay.com/462c41d4-cf1b-494b-8c84-b9f89af1768b";

export const hasCheckout = CHECKOUT_URL.trim().length > 0;
