node.js express.js 


создать билд

      docker build .
      docker build -t <NAMES>  .
      docker build -t <NAMES>:<TAG> .
<i>-t</i>  задает имя сборки иначе \<none>

удалить все созданные контейнеры 

      docker container (CONTAINER ID) || (NAMES)
      docker container prune



удалить все созданные снимки, images 

      docker rmi (IMAGE ID) || (REPOSITORY)
      docker rmi prune

rename
      docker tag (IMAGE ID)  <NAMES>




запуск 

      docker run -d -p 3000:3000  (IMAGE ID)
 
<i>docker run --help</i>

<i>-d, --detach</i> "отпускает консоль" Run container in background....
<i>-p, --publish</i>  Publish a container's port(s) to the host
<i>--name</i> Assign a name to the container
<i>--rm</i>    Automatically remove the container when it exits

      docker run -d -p 3000:3000  --rm  <NAME>


push

      docker push (hub.docke.id)/<NAME>:<TAG>