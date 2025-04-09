/*Vertical Sliding*/
.slidingVertical{
    display: inline;
    text-indent: 8px;
}
.slidingVertical span{
    animation: topToBottom 12.5s linear infinite 0s;
    -ms-animation: topToBottom 12.5s linear infinite 0s;
    -webkit-animation: topToBottom 12.5s linear infinite 0s;
    color: #D1202E;
    opacity: 0;
    overflow: hidden;
    position: absolute;
}
.slidingVertical span:nth-child(2){
    animation-delay: 2.5s;
    -ms-animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
    animation-delay: 5s;
    -ms-animation-delay: 5s;
    -webkit-animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
    animation-delay: 7.5s;
    -ms-animation-delay: 7.5s;
    -webkit-animation-delay: 7.5s;
}
.slidingVertical span:nth-child(5){
    animation-delay: 10s;
    -ms-animation-delay: 10s;
    -webkit-animation-delay: 10s;
}

/*topToBottom Animation*/
@-moz-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -moz-transform: translateY(-50px); }
    10% { opacity: 1; -moz-transform: translateY(0px); }
    25% { opacity: 1; -moz-transform: translateY(0px); }
    30% { opacity: 0; -moz-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -webkit-transform: translateY(-50px); }
    10% { opacity: 1; -webkit-transform: translateY(0px); }
    25% { opacity: 1; -webkit-transform: translateY(0px); }
    30% { opacity: 0; -webkit-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
    0% { opacity: 0; }
    5% { opacity: 0; -ms-transform: translateY(-50px); }
    10% { opacity: 1; -ms-transform: translateY(0px); }
    25% { opacity: 1; -ms-transform: translateY(0px); }
    30% { opacity: 0; -ms-transform: translateY(50px); }
    80% { opacity: 0; }
    100% { opacity: 0; }
}