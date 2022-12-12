This container hosts up my personal website on port 80.

If you build and run this on your own machine you'll view the same website I have on https://chuck.findlayis.me served up by nginx on port 80 of the docker container.

It is a braindead simple image - not much to it. You can also just pull it from [cfindlayisme/chuck.findlayis.me-docker](https://hub.docker.com/repository/docker/cfindlayisme/chuck.findlayis.me-docker)

I have a Gitlab pipeline that auto-deploys this when pushed to the production branch as an example of my CI/CD experience.