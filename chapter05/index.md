### nodejs劣势和解决方案
- 默认不支持多核 但用cluster可解决
- 默认不支持服务器集群，node－http－proxy可以解决
- 使用nginx做负载均衡，静态的由nginx处理，动态的由nodejs处理
- forever或者node－cluster实现灾难恢复

### 框架选择
express  完善 稳定 文档全 社区大 
koa   超前
hapi   复杂，适合复杂大型项目