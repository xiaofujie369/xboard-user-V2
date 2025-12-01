// API地址（线上环境）
window.routerBase = 'https://ss.shy521.com/';

// 全局站点设置
window.settings = {
  title: '可云',
  description: '可云',
  assets_path: '/assets',
  theme: { color: 'default' },
  version: '1.0.0',
  background_url: '',
  logo: '',

  // ========== Turnstile 验证配置 ==========
  captcha: {
    enable: true,                // 是否启用验证码
    type: 'turnstile',           // 可选值：'turnstile' 或 'recaptcha-v3'
    site_key: '0x4AAAAAACD7xuQgCxCWBds1',  // 你的 Cloudflare Turnstile 站点密钥
  },
};
