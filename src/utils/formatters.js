export function hrs(h) {
  return h >= 100 ? Math.round(h) : Math.round(h * 10) / 10;
}

export function gbp(n) {
  if (n >= 1000000) return "£" + (Math.round(n / 100000) / 10) + "m";
  if (n >= 1000) return "£" + Math.round(n / 1000) + "k";
  return "£" + Math.round(n);
}
