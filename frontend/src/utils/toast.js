class ToastManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
    document.body.appendChild(this.container);
  }

  show(message, type = 'default', duration = 3000) {
    const toast = document.createElement('div');
    
    const bgColors = {
      success: 'bg-[#111827] border-[#22C55E]',
      error: 'bg-[#111827] border-[#EF4444]',
      default: 'bg-[#111827] border-[#1F2937]'
    };

    const icons = {
      success: '<svg class="w-4 h-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
      error: '<svg class="w-4 h-4 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
      default: ''
    };

    toast.className = `toast ${bgColors[type]} border px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[280px]`;
    
    if (icons[type]) {
      toast.innerHTML = `
        ${icons[type]}
        <span class="text-sm text-[#E5E7EB]">${message}</span>
      `;
    } else {
      toast.innerHTML = `<span class="text-sm text-[#E5E7EB]">${message}</span>`;
    }

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 200);
    }, duration);

    return toast;
  }

  success(message, duration) {
    return this.show(message, 'success', duration);
  }

  error(message, duration) {
    return this.show(message, 'error', duration);
  }

  info(message, duration) {
    return this.show(message, 'default', duration);
  }
}

export const toast = new ToastManager();
