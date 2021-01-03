This image automatically builds into Google Cloud Services for me to deploy to my backend as I please on each commit.

If you build and run this on your own machine you'll view the same website I have on https://chuck.findlayis.me served up by nginx on port 80 of the docker container. My website sits behind a load balancer for HTTPS access, so no HTTPS configuration is in nginx on this container.

I chose this way of serving a personal website to allow me to experiment with a very simple container pipeline and scaling/global load balancing.