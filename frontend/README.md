
## 백엔드

### 모듈 별 사용 기술 및 기능 설명
#### Eureka Server
Spring Cloud Eureka Server를 사용해서 모든 Eureka Discovery Client 서비스를 모니터링 및 관리하는 모듈 입니다.

#### Config Server
Spring Cloud Config를 사용해서 API 서비스에 필요한 공통된 설정을 관리하는 서버 모듈로, 현재 프로젝트에선 JWT 토큰의 암호화 및 만료 기간을 관리합니다. <br>
bootstrap으로 각 API 서비스의 yml 파일보다 먼저 Config Server의 설정 파일을 읽어오며, <br>
변경 작업이 생겼을 시 rabbit mq를 사용해서 환경 설정이 변경 됨을 감지하고 다른 서비스에 적용하는 형태로 사용하고 있습니다.

#### Gateway Server
랜덤 포트로 지정되어 있는 API 서비스들을 하나의 포트로 관리해주기 위해서 사용되는 모듈 입니다. <br>
API를 사용하는 클라이언트 입장에서는 Gateway 모듈의 포트만 알면 모든 서비스를 사용할 수 있습니다.

#### User API
회원에 관련한 모든 서비스를 가지고 있는 모듈입니다.<br>
Spring Security가 같이 있어(분리하는 게 맞는 거 같습니다.) 회원가입, 로그인, 내 정보 관리 등의 기능을 사용할 수 있습니다.

#### Diary API
일기와 관련된 모든 서비스를 가지고 있는 모듈입니다. <br>
일기 작성, 일기 정보 조회 등의 기능을 가지고 있습니다. <br>
일기를 작성하는 회원 정보를 알고 있어야하기 때문에 User 모듈과 통신할 필요가 있었고 이는 OpenFeign을 사용해서 통신했습니다.
>>>>>>> README.md
