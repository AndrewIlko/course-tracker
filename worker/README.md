# 👷 `worker-template` Hello World

A template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

Install the worker CLI

- npm i -g @cloudflare/wrangler
  Login to CloudFlare Workers
- wrangler login
  Generate worker
- wrangler generate WORKER_NAME
  Copy CloudFlare account id
- wrangler whoami
  and paste into the settings file wrangler.toml => account_id.
  Change "type" from "javascript" to "webpack".
  Publish your worker
- wrangler publish
  -DONE.
