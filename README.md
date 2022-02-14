# motion-demo

## For development environment

### Project setup
```
git clone https://github.com/callezenwaka/motion_demo.git
```

### Point domains (motion.com; doc.motion.com; pay.motion.com) to localhost or 127.0.0.1 (macOS & linux)
```
sudo nano /etc/hosts
127.0.0.1       motion.com
127.0.0.1       pay.motion.com
127.0.0.1       doc.motion.com
```

### Change directory to k8s folder
```
cd k8s
```

### Create motion namespace
```
kubectl apply -f motion-namespace
```

### Apply manifest files
```
kubectl apply -f motion-api.yaml -f motion-doc.yaml -f motion-pay.yaml -f motion-web.yaml -f motion-ingress-dev.yaml
```

### Execute to confirm pods are in running state
```
kubectl get all -n motion
```

### Execute to confirm that nginx ingress is in running state (EXTERNAL-IP => localhost)
```
kubectl get all -n ingress-nginx
```

Test various domains on browser (motion.com; doc.motion.com; pay.motion.com)