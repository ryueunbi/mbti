var num = 1;

var q = {
    1: {"step":"Q1", "title":"자주 보는 친한 후배와 밥을 먹고 결제는 내가 했을 때", "type":"EI", "A":"넣어둬! 오늘은 내가 쏜다!", "B":"야 계좌번호는 신한은행 110-.."},
    2: {"step":"Q2", "title":"2021년 나의 신년 계획은?", "type":"JP", "A":"아직까지는 잘 지키는 중!", "B":"시년 계호기은 작심삼일이 국룰"},
    3: {"step":"Q3", "title":"애정하는 브랜드에서 신년 할인을 한다면?", "type":"JP", "A":"필요한 게 있으면 구매! 아니면 굳이..?", "B":"날이면 날마다 오는 기회가 아니니 일단 사둔다."},
    4: {"step":"Q4", "title":"맛있는 식당을 소개할 때", "type":"SN", "A":"그 집에서 가장 맛있는 건 A코스야! 꼭 먹어봐!", "B":"내가 먹어본 식당 중에 제일 맛있어! 꼭 가봐!"},
    5: {"step":"Q5", "title":"외국 영화를 볼 때 등장 인물들의 이름을", "type":"SN", "A":"조연까지 세세하게 잘 외운다", "B":"이름을 외우기 보다는 맥락상 누구인지 파악한다."},
    6: {"step":"Q6", "title":"지갑 사정이 좋지 않을 때 친구의 생일 파티에 초대 받았다.", "type":"TF", "A":"선물을 다음에 만날 때 너가 필요한 거 사줄게!", "B":"소소한 것이라도 친구가 좋아할 만한 선물을 사준다."},
    7: {"step":"Q7", "title":"친구가 집에서 먼 약속 장소에 택시를 타고 왔다. 나의 반응은?", "type":"TF", "A":"헐 멀리서 택시 탔어? 얼마 나왔어?", "B":"무슨 일 있어서 택시 탄거야?"},
    8: {"step":"Q8", "title":"넷플릭스, 왓챠 등 구독 서비스를 안 본지 3개월이 지났다면?", "type":"JP", "A":"바로 구독을 끊어버린다.", "B":"언젠가 볼지도 모르지? 일단 냅둔다."},
    9: {"step":"Q9", "title":"친구와 놀 때 가장 재밌는건?", "type":"EI", "A":"모여서 하는 방탈출, 보드게임 카페!", "B":"힙한 감성 카페에 가서 토크!"},
    10: {"step":"Q10", "title":"쇼핑하다가 내가 자주 입는 스타일의 옷을 발견했다.", "type":"TF", "A":"저런 비슷한 옷이 옷장에 많긴 하지.. 하고 지나친다.", "B":"세상에 같은 옷은 없다. 옷은 다다익선이지!"},
    11: {"step":"Q11", "title":"새로운 컴퓨터를 하나 사고 싶을 때", "type":"EI", "A":"주변에 컴잘알 친구에게 정보를 물어본다.", "B":"정보의 바다 인터넷에서 정보를 구한다."},
    12: {"step":"Q12", "title":"친구들이 코시국 끝나면 여행을 가자고 한다. 나의 행동은?", "type":"SN", "A":"언제, 어디로 가면 좋을지 구체적으로 생각해본다.", "B":"여행가서 하고 싶었던 일들을 줄줄 나열해본다."}
}

var result = {
    // ISTJ
    "ISTJ" : {"animal" : "역사의 유물과 같은 상평통보", "explain" : '"인생은 게임이다!"', "sub-01" : '⦁ 타고난 센스로 분위기메이커를 담당하고 있는 당신!<br>⦁ 언제 어디서든 개그칠 준비 완료! 주변 사람을 웃기는데 진심인 편이에요.<br>⦁ 긍정적인 바이브를 뿜뿜해서 스트레스를 받아도 금세 잊는 편이에요.<br>⦁ 선입견도 없고 관용적이라 주변에 사람들이 끊이지 않고 모이는 중독성까지 갖췄어요.<br>⦁ 이것이 바로 게임머니 특유의 순기능?!', "sub-02" : "⦁ 남한테 관심이 별로 없어서 공감능력이 부족하냐는 소리를 듣곤 해요.<br>⦁ 하던 것만 해서 관심 없는 분야에 대한 이해도가 조금 떨어져요.<br>⦁ 과한 책임감이 부담으로 이어져 스트레스를 받는 경우가 종종 있어요.", "solution" : "⦁ 새로운 것을 반드시 이뤄내야하는 색다른 해가 될 지도!<br>⦁ 새로운 도전이 두려울 수 있지만 분명 의미있는 경험이 될 거예요.<br>⦁ 조금 무섭다면 나와 같은 길을 걷는 사람들과 함께 시작해보는 것도 좋을거에요!", "img":"images/ISTJ.png"},


    // ISFJ
    "ISFJ" : {"animal" : "조카의 코 묻은 세뱃돈", "explain" : "복 많이 받아라 얍!", "sub-01" : "⦁ 기쁨을 전달하는 행복 전도사로 활약 중인 당신!<br>⦁ 누군가에게 꼭 필요한 존재가 되고 싶어서 오늘도 고민 중이에요.<br>⦁ 나에 대한 칭찬과 감사는 인생을 살아가는 이유!<br>⦁ 직접 준비한 이벤트로 상대방이 감동할 때 굉장한 뿌듯함을 느껴요.<br>⦁ 하지만 다른 사람에게 내 존재를 굳이 내세우려고 하지는 않아요.<br>⦁ 통장에 예상한 잔액이 있을 때 행복한, 꼼꼼하고 세심한 면도 있네요.", "sub-02" : "⦁ 하고 싶은 말을 다 하지 못해서 끙끙 앓는 경우가 종종 있어요.<br>⦁ 상대방 말을 귀담아듣다가 어떤 계획을 세우기까지 시간이 오래 걸리는 편이에요.<br>⦁ 안정감을 추구해서 예상치 못한 지출이 생기면 스트레스를 받는 편..!", "solution" : "⦁ 내가 해왔던 노력을 인정받는 한 해가 될거예요.<br>⦁ 하지만 남들을 지나치게 신경쓰다보면 분명 내 마음이 다칠날도..<br>⦁ 이제는 나를 좀 더 챙겨할 시간! 오직 나만을 위한 통장을 만들어 보는 것도 좋은 시작이에요!", "img":"images/ISFJ.png"},
                    

    // INFJ
    "INFJ" : {"animal" : "뜨끈하고 든든한 곗돈", "explain" : '"기다리는 자에게 복이 있나니~"', "sub-01" : "⦁ 처음 친해지는 건 어렵지만 그만큼 깊은 관계를 추구하는 당신!<br>⦁ 내 사람에게는 든든한 편이 되어주는 따뜻한 면이 있어요.<br>⦁ 혼자만의 시간을 가지며 모든 것을 심사숙고하여 결정하는 타입이에요.<br>⦁ 물건을 살 때도 신중하게 생각해서 불필요한 지출은 거의 없어요.<br>⦁ 목표를 세우면 오랜 시간이 걸리더라도 열정을 쏟아서 완벽하게 끝내려고 해요.", "sub-02" : "⦁ 내 영역이 확실해서 나의 가치관을 흔드는 것들에 민감해요.<br>⦁ 이러한 점이 친구들에게는 고집스러워 보일 수도 있어요.<br>⦁ 친한 친구가 나를 옳지 못한 길로 유혹해도 잘 거절하지 못해요.<br>⦁ 돈이 모이기도 전에 금방 사라지는 건 그러한 감정적 성향 때문…", "solution" : "⦁ 새해에 필요한 것이 무엇인지 이미 다 파악해 두셨네요.<br>⦁ 그대로 이루기만 한다면 걱정 1도 없는 2021년 확정!<br>⦁ 하지만 주변사람들만 너무 챙기다 보면 내 지갑에도 문제가..<br>⦁ 둘다 놓치지 않기 위해 2021년 새로운 금융상품을 찾아보는건 어떨까요!", "img":"images/INFJ.png"},


    // INTJ
    "INTJ" : {"animal" : "서랍 속 먼지 쌓인 비상금", "explain" : '"이 돈으로 계획을 세우는 수 밖에"', "sub-01" : "⦁ 모든 것을 계획대로 움직이는 당신!<br>⦁ 미래를 위해 항상 플랜 B가 머리속에 가득해요!<br>⦁ 검소하고 꼼꼼하긴 하지만 중요시하는 것에는 기꺼이 투자해요.<br>⦁ 내가 특이한 걸 알지만 그건 나만 알고 싶은 비밀이에요.<br>⦁ 나만의 세계가 존재해서 한꺼번에 많은 사람을 사귀지는 않아요.<br>⦁ 말이 잘 통하는 몇몇의 친구들과는 세상 둘도 없는 절친 바이브를 보여줘요.", "sub-02" : "⦁ 혼자 있는 것을 좋아해서 누군가와 친해지는 데 긴 시간이 걸려요.<br>⦁ 다른 사람과 부딪치기 싫어서 종종 자신만의 공간에서 먼지가 쌓일 때까지 나오지 않아요.<br>⦁ 완벽주의를 추구하다가 큰 목표를 잃어버리기도 해요.<br>⦁ 세웠던 계획이 무너질 때마다 많은 스트레스에 개복치가 되는…<br>⦁ 스트레스 해소를 위해 충동적으로 행동하는 경향이 있어요.", "solution" : "⦁ 열심히 살아온 만큼 올해에는 생각대로 모든 일이 이뤄질 거예요!<br>⦁ 그러니 계획을 다 지키지 못하는 것에 너무 신경 쓰지 않아도 돼요.<br>⦁ 그럼에도 걱정된다면 나만의 플랜 B를 만들어주는건 어떨까요?", "img":"images/INTJ.png"},


    // ISTP
    "ISTP" : {"animal" : "걸릴 걱정 안 하는 위조지폐", "explain" : '"걱정을 해서 무얼하랴~"', "sub-01" : '⦁ 주변 상황에 스트레스를 잘 받지 않아서 걱정 따위 없는 당신!<br>⦁ 톡톡 튀는 창의력과 즉흥성으로 어떤 위기 상황에서도 임기응변이 뛰어나요.<br>⦁ 나름 관종이라 관심 받는 건 대환영! 하지만 시끄럽게 난리치는 건 싫어요.<br>⦁ 복잡한 것은 딱 질색! 마이웨이가 인생의 모토입니다.<br>⦁ 때문에 돈을 쓸 때도 계획 따위는 사치에 불과하죠.', "sub-02" : "⦁ 남들에게 공감하기보다는 나만의 논리가 머리를 지배하기도 해요.<br>⦁ 해야 할 일을 미루다 발등이 타들어 가면 그때야 시작하는 경향이 있어요.<br>⦁ 구속당하는 걸 싫어해서 될 대로 되라!하는 쿨한 모습이 멋지긴 하지만 돈을 흥청망청 쓰기도 하는 나쁜 습관이…", "solution" : "⦁ 특유의 긍정적인 성격으로 모든 일이 술술 풀리는 2021년이 될 거예요!<br>⦁ 하지만 발등에 불떨어지고 시작하는 습관은 고치면 좋아요! 일도.. 돈 관리도...!<br>⦁ 혼자서는 막막하다면 나와 함께 도전해주는 상품으로 시작해보면 어떨까요!", "img":"images/ISTP.png"},


    // ISFP
    "ISFP" : {"animal" : "갬성 낭낭 동전지갑", "explain" : '"걱정을 해서 무얼하랴~"', "sub-01" : '⦁ 다른 사람의 생각을 존중하며 분위기를 편안하게 만들어요.<br>⦁ 반대로 타인에게 인정받을 때 미친 듯한 파워 자존감을 보여줘요.<br>⦁ 미래보다는 현재의 삶을 중시해요.<br>⦁ 현생에 집중해서 최고의 만족을 얻는 것이 인생 모토!<br>⦁ 풍부한 감수성으로 특유의 창의력을 발현해요.<br>⦁ 뭔가 다른데? 싶으면 동전지갑의 낭낭한 갬성으로 만들어낸 소행!"', "sub-02" : "⦁ 남 눈치를 많이 보느라 시원하게 결정을 내리지 못해요.<br>⦁ 그래서 경쟁적인 분위기 속에서는 강점이 많이 죽는 경우가…<br>⦁ 지금 이 순간을 즐기느라 장기 계획에서 약한 모습을 보여요.<br>⦁ 미래 계획을 피하는 성향이 나중에 재정적 어려움을 가져올 수도!", "solution" : "⦁ 하고 싶은 것들을 상상하며 가슴 설레어 하는 모습이 그려져요.<br>⦁ 조금 더 낭낭한 새해를 위해서는 색다른 목표에 도전해야 하는 법!<br>⦁ 혼자서 목표를 세우기 어렵다면 시작을 도와줄 여러 상품을 살펴보는 건 어떨까요?", "img" : "images/ISFP.png"},


    // INFP
    "INFP" : {"animal" : "티끌없이 새하얀 백지수표", "explain" : '"깨끗하게 맑게 FLEX!"', "sub-01" : "⦁ 남에게 상처를 주기도, 내가 상처를 받기도 싫어하는 순백의 평화주의자!<br>⦁ 내가 다른 사람을 인정하는 만큼, 나 역시 존중받고 싶어요.<br>⦁ 시간이 오래 걸리기는 해도 가치 있다고 판단한 일에 모든 것을 쏟는 화끈한 매력이 있어요.<br>⦁ 충분한 이유가 있다면 바로 카드를 긁어버리는 추진력까지!<br>⦁ 완벽하게 해낼 것이 아니라면 아예 시작을 하지 않는 경향도 있어요." , "sub-02" : "⦁ 내 기준이 확고하고 고집스런 면이 있어요.<br>⦁ 특히 개인적인 가치관에 있어서는 철옹성이 따로 없는…<br>⦁ 굳이 사지 않아도 될 물건에 오만가지 의미를 부여하는 가치 창조자!<br>⦁ 내가 사고 싶으면 없는 이유를 만들어서라도 가져야 해요.", "solution" : "⦁ 나의 생각을 줏대 있게 밀고 나가면 무언가 하나는 이루는 한 해가 될 거예요!<br>⦁ 완벽한 2021년을 시작하기 위해 저축으로 더 큰 가치를 꿈꿔보는 건 어떨까요?", "img" : "images/INFP.png"},


    // INTP
    "INTP" : {"animal" : "반딱반딱 한정판 기념주화", "explain" : '"남들과는 다르게~ 색 다르게~"', "sub-01" : "⦁ 평범하지 않은 나만의 유니크한 관심사가 있는 당신!<br>⦁ 아무나 가질 수 없는 한정판 기념주화처럼 특별한 존재감 뿜뿜!<br>⦁ 꽂힌 물건에 끊임없이 투자하는 덕후스러운 면이 존재해요.<br>⦁ 하지만 마냥 특별한 것보다는 실용성을 추구해서 쓸모없는 물건은 많지 않아요.<br>⦁ 그리고 이 모든 사실을 알고 있는 사람은 손가락에 꼽는다는 사실!" , "sub-02" : "⦁ 엄청난 상상력과 그렇지 못한 행동력…<br>⦁ 계획을 세워도 하루 이상 가는 경우가 드물어요.<br>⦁ 관심 분야에 깊게 빠져들게 되면 과몰입+과소비로 이어지는 경우가 많아요.<br>⦁ 반대로 관심 분야가 아니라면 해야 할 의지를 잃어버리기도…", "solution" : "⦁ 내가 좋아하는 걸 행복하게 즐길 수 있는 한 해가 될 거예요.<br>⦁ 하지만 과몰입하며 텅장이 되지 않도록 주의가 필요해요.<br>⦁ 관심사를 건강하게 즐길 수 있도록 새로운 재테크를 시작하는 것도 좋을 것 같아요!", "img" : "images/INFP.png"},


    // ESTP
    "ESTP" : {"animal" : "모든 것이 즐거운 게임머니", "explain" : '"인생은 게임이다!"', "sub-01" : "타고난 센스로 분위기메이커를 담당하고 있는 당신!<br>⦁ 언제 어디서든 개그칠 준비 완료! 주변 사람을 웃기는데 진심인 편이에요.<br>⦁ 긍정적인 바이브를 뿜뿜해서 스트레스를 받아도 금세 잊는 편이에요.<br>⦁ 선입견도 없고 관용적이라 주변에 사람들이 끊이지 않고 모이는 중독성까지 갖췄어요.<br>⦁ 이것이 바로 게임머니 특유의 순기능?!", "sub-02" : "⦁ 호기심과 관심사가 너무 많아서 피하고 싶은 문제에 대해서는 생각을 덜하는 편이에요.<br>⦁ 꼭 해야 할 일도 생각하기를 가끔은 피하기도…<br>⦁ 그래서 월말에 돈을 거의 없어질 때쯤 재정난을 겪으면 아예 포기해버리고 신용카드에 의존할 확률이..!!", "solution" : "⦁ 새해에는 타고난 센스로 위기상황을 잘 넘기며 한층 더 성장하는 한 해가 될 거예요.<br>⦁ 하지만 돈은 없고 사고 싶은 것은 많아서 머리 아픈 날이 존재할 가능성이 있어요!<br>⦁ 통장 잔액을 보며 미소 짓는 날을 기다리며, 지금 바로 새로운 도전해보는 건 어떨까요!", "img":"images/ESTP.png"},


    // ESFP
    "ESFP" : {"animal" : "묻고 따지지도 않는 신용카드", "explain" : '"앞만 보는 것이 미덕!"', "sub-01" : "⦁ 호불호가 누구보다 확실한 사람!<br>⦁ 내가 하고싶은 일에는 추진력과 행동력이 강한 편이에요.<br>⦁ 현금이 없으면 신용으로 긁어버리는 묻지마 투자를 종종 하네요.<br>⦁ 친구들 사이에서 서프라이즈~! 이벤트 파티를 즐겨요<br>⦁ 내 사람이라고 느껴지면 아낌없이 퍼주기도 해요<br>⦁ 남은 할부 기간이 끝나지 않는 마법은 이러한 성향 때문..", "sub-02" : "⦁ 지루한 것을 참지 못하는 타입이라, 큰 틀의 계획에 집중하지 못해요.<br>⦁ 사람을 만나 노는 것을 너무 좋아해서 씀씀이가 큰 모습이 있어요.<br>⦁ 속전속결!을 외치다 보니 중요한 일을 급하게 선택하는 모습도 있죠.", "solution" : "⦁ 그동안 쌓아온 인간관계가 좋은 일만 만들어주는 한 해가 그려져요.<br>⦁ 하지만 연말엔 가벼운 지갑을 보며 한숨을 지을수도...<br>⦁ 새해에는 오직 나에게만 쓰는 통장 하나를 마련하는 것도 꼭 필요한 도전이겠네요!", "img":"images/ESFP.png"},


    // ENFP
    "ENFP" : {"animal" : "한방 떡상을 노리는 비트코인", "explain" : '"남들과 다른 길이 내 길!"', "sub-01" : "⦁ 매사 의욕 1등, 오지랖 1등, 열정 1등! 이곳저곳 관심이 많아요.<br>⦁ 친구들과 종종 싸우기도 하지만 화해도 열정적으로 하는 당신!<br>⦁ 주변에 두루두루 많은 사람이 있지만, 은근히 관습적이고 보수적인 성향이..?<br>⦁ 크게 벌렸지만 하지 않았던 일의 리스트가 머릿 속에 가득해요.<br>⦁ 가끔 하나에 꽂혀서 집에 비슷한 물건이 오조오억 개인 경우가?!", "sub-02" : "⦁ 남들이 하지 말라고 해도 내가 하고 싶으면 귀를 막아요.<br>⦁ 관심 가는 건 너무 많은데, 지속력은 그닥..?<br>⦁ 저축도 생각날 때만 찔끔찔끔 하네요.", "solution" : "⦁ 이곳저곳에 호기심을 가지면서 새로운 일을 많이 시작할거에요.<br>⦁ 새로운 시작도 중요하지만 존버의 마인드를 기르는 것도 중요해요!<br>⦁ 나만의 길을 가기 위해 새로운 도전을 시작해봐요!", "img":"images/ENFP.png"},


    // ENTP
    "ENTP" : {"animal" : "내가 제일 소중한 드래곤 머니", "explain" : '"작은 것이 가장 소중해..!"', "sub-01" : '⦁  특유의 추진력과 합리적인 소비로 작은 용돈이 커다란 드래곤 머니로?<br>⦁ 현대판 ’티끌 모아 태산’ ! 지출을 꼼꼼하게 확인해서 돈을 모으는 재주가 있어요.<br>⦁ 노력 대비 결과가 상당히 좋은 편이에요.<br>⦁ 남들과 똑같이 벼락치기를 해도 혼자만 살아남는 진정한 용사..!<br>⦁ 너무 직설적이라고요? 그저 겉과 속이 같은 투명한 사람일뿐!<br>⦁ 눈치가 없는 게 아니라 눈치를 살필 의지 자체가 없어요.', "sub-02" : "⦁ 중간이 없어서 세세한 많은 일을 놓치는 경우가 있어요.<br>⦁ 이때 우선순위가 아닌 일들에 소홀할 가능성이 커요.<br>⦁ 자기애가 강한만큼 자기합리화가 빈번해요.<br>⦁ 과소비를 잘 하진 않지만 흥미 있는 것엔 기꺼이 결제버튼을 눌러버리고 자기합리화하는 경향이…", "solution" : "⦁ 한방에 로또 당첨~은 올해도 어렵지만 나만의 꼼꼼함으로 든든한 2021이 될 거예요.<br>⦁ 하지만 가끔씩 몰려오는 과소비에 대한 유혹을 이겨낼 필요가 있어요.<br>⦁ 나에 대한 관대함을 잡아줄 저축 상품에 가입해서 걱정 없는 한 해에 도전하는 것도 좋은 방법이에요!", "img" : "images/ENTP.png"},


    // ESTJ
    "ESTJ" : {"animal" : "소문난 국민의 일꾼 나랏돈", "explain" : '"계획대로면 다 잘 돌아갈 거야~"', "sub-01" : '⦁ 일을 야무지게 추진해서 일잘러로 소문난 나랏돈!<br>⦁ 맡았던 일이 잘 풀리지 않은 날엔 그것만 생각나서 하루 종일 불편해요.<br>⦁ 간혹 내키지 않는 중요한 역할을 맡게 돼도 막상 하면 잘해내요.<br>⦁ 쓸데없이 시간을 낭비하기 보단 그 시간에 뭔가를 해야 마음이 편해요.<br>⦁ 무언가를 살 때는 잔고와 필요성을 모두 고려해서 신중하게 결정하는 편이에요.<br>⦁ 누군가 나랏돈의 계획을 바꾼다면 명확한 이유와 논리는 필수!', "sub-02" : "⦁ 기대치에 못 미치는 사람을 이해하지 못하는 경우가 있어요.<br>⦁ 자기 자신에 대한 기준도 엄격해서 종종 혹사하는…<br>⦁ 물건 하나를 사도 꼼꼼하게 따지느라 시간이 오래 걸리기도 해요.<br>⦁ 옆에서 보면 답답해서 대신 카드를 긁어주고 싶을 정도…", "solution" : "⦁ 열심히 달렸던 지난 날들에 대해 보상 받는 한 해가 될 거예요.<br>⦁ 하지만 너무 높은 기준은 스트레스가 될 수 있어요.<br>⦁ 주변을 둘러보며 여유를 가지는 법을 아는 것도 도전이 될 수 있어요.<br>⦁ 나랏돈만의 도전을 도와줄 여러 혜택을 살펴보는 것도 좋을 것 같네요!", "img" : "images/ESTJ.png"},


    // ESFJ
    "ESFJ" : {"animal" : "팔랑팔랑 춤 추는 돈다발", "explain" : "신이나 신이나", "sub-01" : "⦁ 항상 긍정적인 기운을 전달하며 친구들의 활력소가 되어주는 돈다발!<br>⦁ 말솜씨가 좋은 타고난 재주꾼이어서 리액션 혜자로 유명해요.<br>⦁ 철저하고 현실적이지만, 남들에게는 싫은 소리 없이 대부분 맞춰주는 편!<br>⦁ 팔랑팔랑 마냥 가벼울 것만 같지만, 생각보다 훨씬 더 깊~은 관계를 추구하는 사골육수 같은 면모도 가지고 있어요.<br>⦁ 항상 계획이 있는 편이라 머릿 속에서 통장 잔액이 수시로 업데이트되는 편이에요.", "sub-02" : "⦁ 사람을 너무 좋아하다 보니 남의 말에 잘 휩쓸리기도 해요.<br>⦁ 가끔 계획이 어그러지면 죄책감을 느끼고는 해요.<br>⦁ 생활 습관에 나쁜 버릇이 들면 바꾸거나 고치기 어려워해요.<br>⦁ 돈을 마구 쓰지는 않지만 가끔 과시하고 싶은 감정 때문에 낭비하는 경우가 있어요.", "solution" : "⦁ 좋은 사람들만 가득 만나며 매일매일이 기대되는 한 해가 될 거예요.<br>⦁ 올해에는 내가 진짜로 하고 싶은 것을 파악하고 실천하는 것이 2021년 돈다발의 가장 큰 도전!<br>⦁ 그날을 위해 나를 위한 통장을 하나 만드는 것도 좋은 시작이예요.", "img" : "images/ESFJ.png"},


    // ENFJ
    "ENFJ" : {"animal" : "할머니의 포근한 쌈짓돈", "explain" : "필요한 거 있제? 이걸로 혀~", "sub-01" : "⦁ 할머니의 품 속처럼 정을 아주 많이 쌓은 세상 포근한 쌈짓돈!<br>⦁ 늘 누군가에게 진-한 감동을 주기 위해 항시 대기중이에요!<br>⦁ 친구들을 편안하게 해주는 능력이 있어 인간 시몬스로 활동 중이에요.<br>⦁ 쇼핑을 할 때도 내가 사야하는 것보다 친구에게 필요한 물건에 먼저 눈길이 가요.<br>⦁ 돈 안들이고 재밌게 놀 수 있는 재주가 있어서 큰 지출은 없는 편이네요.", "sub-02" : "⦁ 다른 사람을 신경 쓰고 잘해주는 만큼 상처도 많이 받아요.<br>⦁ 남들과 부딪치기 싫어해서 나의 의견을 말하지 못하는 경우가 있어요.<br>⦁ 주변 사람들을 챙기다 보니 나를 위한 투자가 남들보다 적어요.<br>⦁ ‘돈은 나중에도 벌 수 있지!’라는 마인드라 지갑이 얇은 편…", "solution" : "⦁ 쌈짓돈의 넉넉한 인심으로 더 많은 사람들과 행복해하는 모습이 그려져요.<br>⦁ 하지만 그렇게 만난 소중한 사람들과 쭈욱 함께하기 위해선 조금 더 욕심을 가질 필요가 있어요!<br>⦁ 올해에는 조금 더 욕심있게 새로운 도전을 해보는 건 어떨까요?", "img" : "images/ENFJ.png"},


    // ENTJ
    "ENTJ" : {"animal" : "0.1%의 슈퍼리치 블랙카드", "explain" : "이게 바로 진짜 FLEX!", "sub-01" : "⦁ 남들과 다른 완벽함을 자랑하는 0.1 %의 슈퍼리치 블랙카드<br>⦁ 답답한 건 NEVER! 마음에 안 드는 일은 직접 나서서 해결해버려요.<br>⦁ 남들이 듣기 싫은 소리도 교묘~ 하게 돌려서 말도 잘하는 센스쟁이!<br>⦁ 새로운 사람과의 만남에선 사회생활 백점 영업사원이 따로 없어요.<br>⦁ 일이 나고, 내가 일이다. 완벽한 유노열정!<br>⦁ 일한 만큼 벌고, 번 만큼 쓸 줄 알기에 파산 걱정은 없어요.<br>⦁ 나 자신을 너무 잘 알아서 테스형도 배우고 싶을 정도?", "sub-02" : "⦁ 내가 짱!이다 보니 남의 말은 잘 신경 쓰지 않아요.<br>⦁ 가까운 사람 이외에는 잘 챙기지 않아서 차갑다고 오해받는 일이 종종 있어요.<br>⦁ 열정 슈퍼리치답게 지출도 슈퍼플렉스! 해버리는 경향이 있어요.<br>⦁ 통장이 비어 보이는 건 카드를 신나게 긁어버린 직후일 가능성이..?", "solution" : "⦁ 완벽하게 짜둔 계획을 차근차근 이뤄가며 현실 슈퍼리치가 될 거예요!<br>⦁ 현생에서도 FLEX 할 수 있는 방법은 은행과 조금 더 친해지는 것!<br>⦁ 슈퍼리치가 세운 새해 계획을 좀 더 쉽게 이루게 해 줄 다양한 혜택을 찾아보는건 어떨까요?", "img" : "images/ENTJ.png"}
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
        alert("당신의 MBTI는 "+mbti+" 입니다.");
        $("#img").attr("src", result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#sub-01").html(result[mbti]["sub-01"]);
        $("#sub-02").html(result[mbti]["sub-02"]);
        $("#solution").html(result[mbti]["solution"]);
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