// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".datepicker.svelte-1lorc63.svelte-1lorc63{display:inline-block;margin:0 auto;text-align:center;overflow:visible}.calendar-button.svelte-1lorc63.svelte-1lorc63{padding:10px 20px;border:1px solid var(--button-border-color);display:block;text-align:center;width:300px;text-decoration:none;cursor:pointer;background:var(--button-background-color);color:var(--button-text-color);border-radius:7px;box-shadow:0px 0px 3px rgba(0, 0, 0, 0.1)}.svelte-1lorc63.svelte-1lorc63,.svelte-1lorc63.svelte-1lorc63:before,.svelte-1lorc63.svelte-1lorc63:after{box-sizing:inherit}.calendar.svelte-1lorc63.svelte-1lorc63{box-sizing:border-box;position:relative;overflow:hidden;user-select:none;width:100vw;padding:10px;padding-top:0}@media(min-width: 480px){.calendar.svelte-1lorc63.svelte-1lorc63{height:auto;width:340px;max-width:100%}}.legend.svelte-1lorc63.svelte-1lorc63{color:#4a4a4a;padding:10px 0;margin-bottom:5px}.legend.svelte-1lorc63 span.svelte-1lorc63{width:14.285714%;display:inline-block;text-align:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}