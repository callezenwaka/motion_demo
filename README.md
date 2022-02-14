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

# For production environment

## Deployment on GKE
Step 1 - Create cluster (Used console for cost reasons)
```
gcloud container clusters create
```

Step 2a - Initialize cluster on cloud shell or terminal
```
gcloud container clusters get-credentials cluster-name
```

Step 2b - Create namespace
```
kubectl apply -f motion-namespace
```
## For Nginx Ingress, (skip to step 7 for GCE Ingress)
Step 3 - Initialize cluster cluster-admin permissions on the cluster
```
kubectl create clusterrolebinding cluster-admin-binding \
  --clusterrole cluster-admin \
  --user $(gcloud config get-value account)
```

Step 4 - Install nginx ingress controller with yaml manifest
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
```

Step 5 - Confirm cluster supports of services of type LoadBalancer (outputs ip address)
```
kubectl get service ingress-nginx-controller --namespace=ingress-nginx
```

Step 6 - Creating certificates and keys
[click here](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-multi-ssl#creating_certificates_and_keys)

Step 7 - Create and set up a DNS record pointing at the ip address
```
gcloud compute addresses create motion-ip --global
```
## For GCE Ingress, skip to step 8
Step 7 - Creating certificates and keys
[click here](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-multi-ssl#creating_certificates_and_keys)

Step 8 - Apply manifests
```
kubectl apply -f motion-api.yaml -f motion-doc.yaml -f motion-pay.yaml -f motion-web.yaml -f motion-ingress-prod.yaml
```