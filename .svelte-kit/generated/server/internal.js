
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\n\t\t<link rel=\"manifest\" href=\"/site.webmanifest\">\n\t\t<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#5bbad5\">\n\t\t<meta name=\"msapplication-TileColor\" content=\"#da532c\">\n\t\t<meta name=\"theme-color\" content=\"#ffffff\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<base href=\"/\" />\n\t\t<meta name=\"theme-color\" content=\"#000000\" />\n\t\t\n\n\t\t<!--  Essential META Tags -->\n\t\t<meta name=\"description\" content=\"Meraz'24 is TechnoCultural Fest of IIT Bhilai. It is the biggest techno-cultural fest of central India.\" />\n\n\t\t<meta name=\"keywords\" content=\"Meraz 2k24, Meraz, Meraz'24, Meraz24, 2k24, IITBh, Bhilai, IIT Bhilai, Fest, TechnoCultural, Technology, Cultural, Durg, Central India\">\n\n\t\t<meta property=\"og:title\" content=\"Meraz'24'\" />\n\t\t<meta property=\"og:description\" content=\"Meraz'24 is TechnoCultural Fest of IIT Bhilai. It is the biggest techno-cultural fest of central India.\" />\n\t\t<meta property=\"og:image\" content=\"http://meraz2k24.in/favicon.png\" />\n\t\t<meta property=\"og:url\" content=\"https://meraz2k24.in\" />\n\t\t<meta name=\"twitter:card\" content=\"Meraz'24 Fest of IIT Bhilai\" />\n\n\t\t<!--  Non-Essential, But Recommended -->\n\t\t<meta property=\"og:site_name\" content=\"Meraz '24\" />\n\t\t<meta name=\"twitter:image:alt\" content=\"Meraz'24 Fest\" />\n\n\t\t<meta name=\"og:type\" content=\"Meraz'24 Fest\" />\n\t\t<meta name=\"fb:app_id\" content=\"Meraz'24 Fest\" />\n\t\t<script data-goatcounter=\"https://meraz2k24.goatcounter.com/count\" async src=\"//gc.zgo.at/count.js\"></script>\n\t\t\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t\t<script type=\"application/ld+json\">\n\t\t\t{\n\t\t\t  \"@context\": \"http://schema.org\",\n\t\t\t  \"@type\": \"Event\",\n\t\t\t  \"name\": \"Meraz'24 Fest\",\n\t\t\t  \"startDate\": \"2024-03-15\",\n\t\t\t  \"endDate\": \"2024-03-17\",\n\t\t\t  \"url\": \"https://meraz2k24.in\",\n\t\t\t  \"description\": \"Meraz'24 - Techno Cultural Fest of IIT Bhilai\",\n\t\t\t  \"image\": \"http://meraz2k24.in/favicon.png\",\n\t\t\t  \"location\": {\n\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\"name\": \"IIT Bhilai\",\n\t\t\t\t\"address\": {\n\t\t\t\t  \"@type\": \"PostalAddress\",\n\t\t\t\t  \"streetAddress\": \"IIT Bhilai Campus\",\n\t\t\t\t  \"addressLocality\": \"Kutelabhata, Bhilai\",\n\t\t\t\t  \"addressRegion\": \"Chhattisgarh\",\n\t\t\t\t  \"postalCode\": \"491001\",\n\t\t\t\t  \"addressCountry\": \"India\"\n\t\t\t\t}\n\t\t\t  },\n\t\t\t  \"organizer\": {\n\t\t\t\t\"@type\": \"Organization\",\n\t\t\t\t\"name\": \"IIT Bhilai\"\n\t\t\t  }\n\t\t\t}\n\t\t\t</script>\n\t</body>\n</html>\n\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1ph9c60"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
