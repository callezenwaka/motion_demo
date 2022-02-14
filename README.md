# motion-demo

## For production environment

## Project setup
```
git clone https://github.com/callezenwaka/motion_demo.git
```

## Deployment on GKE
Step 1 - Change directory to k8s folder
```
cd k8s
```

Step 2 - Create namespace
```
kubectl apply -f motion-namespace
```
## For Nginx Ingress
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

## For GCE Ingress, skip to step 8
Step 7 - Creating certificates and keys
[click here](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-multi-ssl#creating_certificates_and_keys)

Step 8 - Apply manifests
```
kubectl apply -f motion-api.yaml -f motion-doc.yaml -f motion-pay.yaml -f motion-web.yaml -f motion-ingress-prod.yaml
```