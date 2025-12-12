// API 地址（指向 XBoard 后端）
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
    enable: true,                    // 开启验证码
    type: 'turnstile',               // 使用 Cloudflare Turnstile
    site_key: '0x4AAAAAACD79ChAaarA3mbd', // ✅ 这里只能写站点密钥（public site key）
  },
};
