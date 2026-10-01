/**
 * Turn any YouTube URL (watch, youtu.be, or Shorts) into its /embed/ form.
 * Returns null when the URL isn't a recognisable YouTube link, so callers can
 * skip rendering the player.
 */
export function toYouTubeEmbedUrl(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  let id: string | null = null;

  if (host === "youtu.be") {
    id = parsed.pathname.slice(1);
  } else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    if (parsed.pathname === "/watch") {
      id = parsed.searchParams.get("v");
    } else {
      const match = parsed.pathname.match(/^\/(?:shorts|embed|v)\/([^/]+)/);
      id = match ? match[1] : null;
    }
  }

  if (!id || !/^[\w-]{11}$/.test(id)) return null;

  return `https://www.youtube-nocookie.com/embed/${id}`;
}

/**
 * True for a YouTube Shorts URL, which is filmed vertically and needs a 9:16
 * frame rather than the usual 16:9.
 */
export function isYouTubeShortsUrl(url: string): boolean {
  try {
    return /^\/shorts\//.test(new URL(url).pathname);
  } catch {
    return false;
  }
}
