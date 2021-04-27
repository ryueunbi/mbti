var num = 1;

                var q = {
                    1: {"step":"step1", "title":"자주 보는 친한 후배와 밥을 먹고 결제는 내가 했을 때", "type":"EI", "A":"넣어둬! 오늘은 내가 쏜다!", "B":"야 계좌번호는 신한은행 110-.."},
                    2: {"step":"step2", "title":"2021년 나의 신년 계획은?", "type":"JP", "A":"아직까지는 잘 지키는 중!", "B":"시년 계호기은 작심삼일이 국룰"},
                    3: {"step":"step3", "title":"애정하는 브랜드에서 신년 할인을 한다면?", "type":"JP", "A":"필요한 게 있으면 구매! 아니면 굳이..?", "B":"날이면 날마다 오는 기회가 아니니 일단 사둔다."},
                    4: {"step":"step4", "title":"맛있는 식당을 소개할 때", "type":"SN", "A":"그 집에서 가장 맛있는 건 A코스야! 꼭 먹어봐!", "B":"내가 먹어본 식당 중에 제일 맛있어! 꼭 가봐!"},
                    5: {"step":"step5", "title":"외국 영화를 볼 때 등장 인물들의 이름을", "type":"SN", "A":"조연까지 세세하게 잘 외운다", "B":"이름을 외우기 보다는 맥락상 누구인지 파악한다."},
                    6: {"step":"step6", "title":"지갑 사정이 좋지 않을 때 친구의 생일 파티에 초대 받았다.", "type":"TF", "A":"선물을 다음에 만날 때 너가 필요한 거 사줄게!", "B":"소소한 것이라도 친구가 좋아할 만한 선물을 사준다."},
                    7: {"step":"step7", "title":"친구가 집에서 먼 약속 장소에 택시를 타고 왔다. 나의 반응은?", "type":"TF", "A":"헐 멀리서 택시 탔어? 얼마 나왔어?", "B":"무슨 일 있어서 택시 탄거야?"},
                    8: {"step":"step8", "title":"넷플릭스, 왓챠 등 구독 서비스를 안 본지 3개월이 지났다면?", "type":"JP", "A":"바로 구독을 끊어버린다.", "B":"언젠가 볼지도 모르지? 일단 냅둔다."},
                    9: {"step":"step9", "title":"친구와 놀 떄 가장 재밌는건?", "type":"EI", "A":"모여서 하는 방탈출, 보드게임 카페!", "B":"힙한 감성 카페에 가서 토크!"},
                    10: {"step":"step10", "title":"쇼핑하다가 내가 자주 입는 스타일의 옷을 발견했다.", "type":"TF", "A":"저런 비슷한 옷이 옷장에 많긴 하지.. 하고 지나친다.", "B":"세상에 같은 옷은 없다. 옷은 다다익선이지!"},
                    11: {"step":"step11", "title":"새로운 컴퓨터를 하나 사고 싶을 때", "type":"EI", "A":"주변에 컴잘알 친구에게 정보를 물어본다.", "B":"정보의 바다 인터넷에서 정보를 구한다."},
                    12: {"step":"step12", "title":"친구들이 코시국 끝나면 여행을 가자고 한다. 나의 행동은?", "type":"SN", "A":"언제, 어디로 가면 좋을지 구체적으로 생각해본다.", "B":"여행가서 하고 싶었던 일들을 줄줄 나열해본다."}
                }
                var result = {
                    "ISTJ" : {"animal" : "역사의 유물과 같은 상평통보", "explain" : "1", "img":"images/01.jpg"},
                    "ISFJ" : {"animal" : "나", "explain" : "2", "img":"images/02.jpeg"},
                    "INTJ" : {"animal" : "반딱반딱 한정판 기념주화", "explain" : "3", "img":"images/03.jpeg"},
                    "INTJ" : {"animal" : "라", "explain" : "4", "img":"images/01.jpg"},
                    "ISTP" : {"animal" : "마", "explain" : "5", "img":"images/01.jpg"},
                    "ISFP" : {"animal" : "바", "explain" : "6", "img":"images/01.jpg"},
                    "INFP" : {"animal" : "티끌없이 새하얀 백지수표", "explain" : "7", "img":"images/01.jpg"},
                    "ESTP" : {"animal" : "아", "explain" : "8", "img":"images/01.jpg"},
                    "ESFP" : {"animal" : "자", "explain" : "9", "img":"images/01.jpg"},
                    "ENFP" : {"animal" : "한방 떡상을 노리는 비트코인", "explain" : "10", "img":"images/01.jpg"},
                    "ENTP" : {"animal" : "카", "explain" : "11", "img":"images/01.jpg"},
                    "ESTJ" : {"animal" : "소문난 국민의 일꾼 나랏돈", "explain" : "12", "img":"images/01.jpg"},
                    "ESFJ" : {"animal" : "팔랑팔랑 춤 추는 돈다발", "explain" : "13", "img":"images/01.jpg"},
                    "ENFJ" : {"animal" : "하", "explain" : "14", "img":"images/01.jpg"},
                    "ENTJ" : {"animal" : "0.1% 슈퍼리치 블랙카드", "explain" : "15", "img":"images/ENTJ.png"}
                }
                function start(){
                    $(".start").hide();
                    $(".question").show();
                    next();
                }


                $("#A").click(function(){
                  var type= $("#type").val();
                  var preValue = $("#"+type).val();
                  $("#"+type).val(parseInt(preValue)+1);    
                  next();
                });

                $("#B").click(function(){
                    next();
                });

                function next(){
                    if(num==13){
                        $(".question").hide();
                        $(".result").show();
                        var mbti = "";
                        ($("#EI").val() < 2 ) ? mbti+="I" : mbti+="E";
                        ($("#SN").val() < 2 ) ? mbti+="N" : mbti+="S";
                        ($("#TF").val() < 2 ) ? mbti+="F" : mbti+="T";
                        ($("#JP").val() < 2 ) ? mbti+="P" : mbti+="J";
                        alert(mbti);
                        $("#img").attr("src", result[mbti]["img"]);
                        $("#animal").html(result[mbti]["animal"]);
                        $("#explain").html(result[mbti]["explain"]);

                    } else{
                    $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
                    $("#step").html(q[num]["step"]);
                    $("#title").html(q[num]["title"]);
                    $("#type").val(q[num]["type"]);
                    $("#A").html(q[num]["A"]);
                    $("#B").html(q[num]["B"]);
                    num++;
                    }
                }