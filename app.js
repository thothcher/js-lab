// ============================================================
// JS FLOW LAB — vanilla JavaScript data-flow teaching lab
// Sibling of Angular Flow Lab: same canvas engine, JS curriculum,
// plus a live data trace, generated code and a real API client.
// ============================================================

// ============================================================
// ICONS  (small set, mapped onto block types by ICON_FOR)
// ============================================================
const I = {
    array:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"/><line x1="9" y1="12" x2="15" y2="12"/></svg>',
    cloud:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    key:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3"/></svg>',
    lock:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    braces:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    upload:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    edit:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    trash:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    loop:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    filter:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    map:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="10" y2="7"/><line x1="4" y1="17" x2="10" y2="17"/><polyline points="14 4 20 12 14 20"/></svg>',
    sort:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="12" y2="6"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>',
    sum:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 4 6 4 12 12 6 20 18 20"/></svg>',
    search:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    spread:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
    template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    box:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>',
    save:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    disk:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>',
    target:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    plus:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    layers:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    screen:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    mouse:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l12 9-5.5 1.5L18 19l-3 1.5-2.5-5.5L9 18z"/></svg>',
    form:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
    toggle:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="22" height="12" rx="6"/><circle cx="16" cy="12" r="3"/></svg>',
    module:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    importIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
    shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    zap:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    refresh:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
    stop:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>',
    code:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    fn:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21c2 0 3-1 3-4V7c0-3 1-4 3-4"/><line x1="5" y1="11" x2="14" y2="11"/></svg>',
    branch:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="3" r="3"/><path d="M6 21V8"/><path d="M6 8c0 4 6 4 6 8"/><path d="M18 8v13"/><circle cx="18" cy="5" r="3"/></svg>',
    dive:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6"/><path d="M12 9l3 3-3 3"/></svg>',
    close:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warning:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    info:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    x:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
};

// Block type -> icon
const ICON_FOR = {
    dataArray: 'array', apiEndpoint: 'cloud', localStore: 'disk', userInput: 'search',
    fetchCall: 'download', apiKey: 'key', jsonParse: 'braces',
    httpGet: 'download', httpPost: 'plus', httpPut: 'edit', httpDelete: 'trash',
    tryCatch: 'shield', abortCtl: 'stop',
    asyncFn: 'fn', awaitOp: 'clock', promiseThen: 'branch', setTimeoutBlk: 'clock',
    debounceBlk: 'refresh', eventLoop: 'loop',
    filterOp: 'filter', mapOp: 'map', sortOp: 'sort', reduceOp: 'sum', findOp: 'search',
    destructure: 'box', spreadOp: 'spread', templateLit: 'template',
    stateObj: 'layers', closureBlk: 'lock', saveLocal: 'save',
    querySel: 'target', createEl: 'plus', appendChildBlk: 'layers', renderDom: 'screen',
    eventListener: 'mouse', delegation: 'branch', formSubmit: 'form', classToggle: 'toggle',
    exportBlk: 'module', importBlk: 'importIn',
    consoleLog: 'terminal', browser: 'screen',
    // sub-blocks
    'sub.param': 'box', 'sub.return': 'importIn', 'sub.ifCheck': 'branch', 'sub.loop': 'loop',
    'sub.callback': 'fn', 'sub.arrow': 'code', 'sub.tryBlock': 'shield', 'sub.catchBlock': 'warning',
    'sub.headers': 'key', 'sub.bodyJson': 'braces', 'sub.method': 'upload', 'sub.statusCheck': 'check',
    'sub.throwErr': 'warning', 'sub.keyRead': 'download', 'sub.keyWrite': 'save',
    'sub.stateGet': 'layers', 'sub.stateSet': 'edit', 'sub.domCreate': 'plus', 'sub.domText': 'template',
    'sub.classAdd': 'toggle', 'sub.preventDefault': 'stop', 'sub.formData': 'form'
};
const iconFor = (type) => I[ICON_FOR[type]] || I.code;

// ============================================================
// UI TRANSLATIONS  (en, ka)
// ============================================================
const T = {
    brand:        ['JS Flow Lab', 'JS Flow Lab'],
    academy:      ['IT Step Academy', 'IT Step აკადემია'],
    levels:       ['Levels', 'დონეები'],
    reset:        ['Reset', 'გადატვირთვა'],
    checkAnswer:  ['Check Answer', 'პასუხის შემოწმება'],
    runFlow:      ['Run Flow', 'ნაკადის გაშვება'],
    mission:      ['Mission:', 'მისია:'],
    showHint:     ['Show hint', 'მინიშნება'],
    hint:         ['Hint', 'მინიშნება'],
    library:      ['Block Library', 'ბლოკების ბიბლიოთეკა'],
    inspector:    ['Inspector', 'ინსპექტორი'],
    howWorks:     ['How it works', 'როგორ მუშაობს'],
    selectBlock:  ['Select a block', 'აირჩიე ბლოკი'],
    nothingSel:   ['Nothing selected', 'არცერთი არ არის არჩეული'],
    clickAnyBlock:['Click any block on the canvas to see what it does, the real JavaScript behind it, and the mistake people make with it.', 'დააწკაპუნე ნებისმიერ ბლოკზე, რომ ნახო რას აკეთებს, რა JavaScript კოდი დგას მის უკან და რა შეცდომას უშვებენ ხოლმე.'],
    whatDoes:     ['What it does', 'რას აკეთებს'],
    fileSrc:      ['Where it lives', 'სად წერია'],
    codeEx:       ['Code example', 'კოდის მაგალითი'],
    commonMistake:['Common mistake', 'ხშირი შეცდომა'],
    dataShape:    ['Data in / data out', 'რა შემოდის / რა გამოდის'],
    emptyExplain: ['Drag blocks from the left, connect their ports, then press', 'გადმოიტანე ბლოკები მარცხნიდან, შეაერთე პორტები და დააჭირე'],
    canvasCleared:['Canvas cleared. Drag blocks from the library to start over.', 'არე გასუფთავდა. გადმოიტანე ბლოკები ხელახლა.'],
    runFlowB:     ['Run Flow', 'გაშვება'],
    toWatch:      ['to watch real data travel through your JavaScript.', 'რათა ნახო, როგორ მოძრაობს ნამდვილი მონაცემი შენს JavaScript-ში.'],

    // Toast titles
    emptyFlow:    ['Empty flow', 'ცარიელი ნაკადი'],
    emptyFlowMsg: ['Drag blocks from the left and connect them first.', 'ჯერ გადმოიტანე და შეაერთე ბლოკები.'],
    notLinear:    ['This level wants one chain', 'ამ დონეს ერთი ჯაჭვი სჭირდება'],
    notLinearMsg: ['Branches are allowed on the canvas, but this level expects one straight chain. Remove the extra connection — or open Tasks for branching, real-world flows.', 'კანვასზე განშტოება დასაშვებია, მაგრამ ეს დონე ერთ სწორ ჯაჭვს ელის. წაშალე ზედმეტი კავშირი — ან გახსენი დავალებები განშტოებიანი, რეალური ნაკადებისთვის.'],
    unconnected:  ['Unconnected blocks', 'შეუერთებელი ბლოკები'],
    unconnectedMsg:['All blocks on the canvas must be linked into a single chain.', 'ყველა ბლოკი უნდა იყოს დაკავშირებული ერთ ჯაჭვში.'],
    correct:      ['Correct flow', 'სწორი ნაკადია'],
    correctMsg:   ['Great job — that is exactly how the data moves in plain JavaScript.', 'შესანიშნავია — ზუსტად ასე მოძრაობს მონაცემი სუფთა JavaScript-ში.'],
    notQuite:     ['Not quite right', 'არ არის ზუსტი'],
    nothingRun:   ['Nothing to run', 'არაფერია გასაშვები'],
    nothingRunMsg:['Connect at least two blocks into a flow first.', 'ჯერ შეაერთე მინიმუმ ორი ბლოკი.'],
    wrongDir:     ['Wrong direction', 'არასწორი მიმართულება'],
    wrongDirMsg:  ['Connect an output (right side) to an input (left side).', 'შეაერთე გამოსასვლელი (მარჯვენა) მხარე შემავალთან (მარცხენა).'],
    answerOk:     ['<strong>Answer accepted.</strong> Press Run Flow to watch the data change at every step.', '<strong>პასუხი მიღებულია.</strong> დააჭირე გაშვებას და ნახე, როგორ იცვლება მონაცემი თითო ბიჯზე.'],
    flowComplete: ['<strong>Flow complete.</strong>', '<strong>ნაკადი დასრულდა.</strong>'],
    browserRendered:['<strong>Browser</strong> painted the DOM you built.', '<strong>ბრაუზერმა</strong> დახატა შენ მიერ აწყობილი DOM.'],

    // Library group names
    grpSource:    ['Data Sources', 'მონაცემთა წყარო'],
    grpNetwork:   ['Fetch & HTTP', 'Fetch და HTTP'],
    grpAsync:     ['Async & Timing', 'ასინქრონულობა'],
    grpTransform: ['Array & Transform', 'მასივი და გარდაქმნა'],
    grpState:     ['State & Storage', 'მდგომარეობა და საცავი'],
    grpDom:       ['DOM & Events', 'DOM და ივენთები'],
    grpModule:    ['Modules', 'მოდულები'],
    grpOutput:    ['Output', 'შედეგი'],

    // Preview
    ourProducts:  ['Our Products', 'ჩვენი პროდუქცია'],
    items:        ['items', 'ერთეული'],
    inStock:      ['In stock', 'მარაგშია'],
    outOfStock:   ['Out of stock', 'არ არის მარაგში'],
    renderedBy:   ['rendered by your JavaScript flow.', 'დახატულია შენი JavaScript ნაკადით.'],

    // Step prefix
    step:         ['Step', 'ბიჯი'],

    // Check answer helpers
    position:     ['Position', 'პოზიცია'],
    expectedWord: ['expected', 'მოსალოდნელია'],
    butFound:     ['but found', 'მაგრამ ნაპოვნია'],
    almostMissing:['Almost there — you are missing a block at position', 'თითქმის — ბლოკი აკლია პოზიციაზე'],
    extraAfter:   ['You have an extra block after position', 'გაქვს ზედმეტი ბლოკი პოზიციის შემდეგ'],

    // Outcome banners
    bannerList:   ['List rendered from the array.', 'სია დახატულია მასივიდან.'],
    bannerInStock:['Only in-stock items rendered.', 'მხოლოდ მარაგში არსებული ერთეულები გამოჩნდა.'],
    bannerMapped: ['Every item was reshaped by .map().', 'თითო ერთეული გარდაიქმნა .map()-ით.'],
    bannerSorted: ['Sorted by price, cheapest first.', 'დალაგებულია ფასით — იაფიდან ძვირისკენ.'],
    bannerTotal:  ['Totals calculated with .reduce().', 'ჯამი დათვლილია .reduce()-ით.'],
    bannerFetched:['Data fetched over the network.', 'მონაცემი ჩამოტვირთულია ქსელიდან.'],
    bannerAwaited:['await unwrapped the promise before rendering.', 'await-მა გახსნა Promise დახატვამდე.'],
    bannerCaught: ['Errors are caught — the page never breaks.', 'შეცდომა დაჭერილია — გვერდი აღარ ფუჭდება.'],
    bannerKeyed:  ['Request signed with your API key.', 'მოთხოვნა გაგზავნილია შენი API გასაღებით.'],
    bannerClicked:['Click handler updated the state and re-rendered.', 'დაწკაპუნებამ შეცვალა state და გვერდი გადაიხატა.'],
    bannerPosted: ['Form data sent with POST.', 'ფორმის მონაცემი გაგზავნილია POST-ით.'],
    bannerUpdated:['Item updated with PUT.', 'ერთეული განახლდა PUT-ით.'],
    bannerDeleted:['Item removed with DELETE.', 'ერთეული წაიშალა DELETE-ით.'],
    bannerSaved:  ['State saved to localStorage.', 'State შენახულია localStorage-ში.'],
    bannerLoaded: ['State restored from localStorage.', 'State აღდგენილია localStorage-იდან.'],
    bannerSearch: ['Search results for "lap".', 'საძიებო შედეგი "lap"-ისთვის.'],
    bannerDelegated:['One listener handles every row.', 'ერთი listener ემსახურება ყველა სტრიქონს.'],
    bannerChained:['Same result, written as a .then() chain.', 'იგივე შედეგი, დაწერილი .then() ჯაჭვით.'],
    bannerLoop:   ['Sync first, microtasks next, timers last.', 'ჯერ სინქრონული, მერე microtask, ბოლოს ტაიმერი.'],
    bannerModule: ['Imported from another file.', 'იმპორტირებულია სხვა ფაილიდან.'],
    bannerAborted:['The stale request was aborted.', 'ძველი მოთხოვნა გაუქმდა.'],
    bannerCrud:   ['Create and delete share one request pipeline.', 'შექმნა და წაშლა ერთსა და იმავე მილსადენს იყენებს.'],

    // Dive / sub-canvas
    dblToFlip:    ['Double-click to flip back', 'ორმაგი დაწკაპუნება უკან დასაბრუნებლად'],
    diveInto:     ['Dive into', 'შესვლა'],
    topCrumb:     ['Top', 'მთავარი'],
    dveTooltip:   ['Open block internals', 'ბლოკის შინაარსის გახსნა'],
    subLibraryTitle: ['Internals', 'შინაარსი'],
    subMissingMsg:['Dive into the {block} block and complete its internals.', 'შედი {block} ბლოკში და დაასრულე მისი შინაარსი.'],

    // Examples
    examplesTitle:['Reference Schemas', 'მზა სქემები'],
    loadEditable: ['Load to canvas (edit)', 'ჩატვირთვა (რედაქტირება)'],
    readonlyHint: ['Read-only preview — load it to edit.', 'მხოლოდ საჩვენებლად — ჩატვირთე რომ შეცვალო.'],

    // Canvas tools
    snapOn:       ['Snap to grid: on', 'ბადეზე მიწებება: ჩართულია'],
    snapOff:      ['Snap to grid: off', 'ბადეზე მიწებება: გამორთულია'],
    tidied:       ['Layout tidied', 'განლაგება დალაგდა'],
    collapseLibrary: ['Collapse to icons', 'ხატულებად შეკეცვა'],
    expandLibrary:   ['Expand the library', 'ბიბლიოთეკის გაშლა'],
    hideInspector:   ['Hide the inspector', 'ინსპექტორის დამალვა'],
    showInspector:   ['Show the inspector', 'ინსპექტორის ჩვენება'],
    hidePanel:       ['Hide the bottom panel', 'ქვედა პანელის დამალვა'],
    showPanel:       ['Show the bottom panel', 'ქვედა პანელის ჩვენება'],
    dragResize:      ['Drag to resize', 'გადაათრიე ზომის შესაცვლელად'],
    searchBlocks: ['Search blocks...', 'ბლოკის ძებნა...'],
    noBlocks:     ['No blocks match that search.', 'ასეთი ბლოკი ვერ მოიძებნა.'],

    // Panel tabs
    tabTrace:     ['Trace', 'ნაბიჯები'],
    tabData:      ['Data', 'მონაცემი'],
    tabCode:      ['Code', 'კოდი'],
    dataEmpty:    ['Run the flow to see the real value after every block.', 'გაუშვი ნაკადი და ნახე ნამდვილი მნიშვნელობა თითო ბლოკის შემდეგ.'],
    codeEmpty:    ['Connect some blocks — the JavaScript they describe appears here.', 'შეაერთე ბლოკები — აქ გამოჩნდება მათი შესაბამისი JavaScript.'],
    copy:         ['Copy', 'კოპირება'],
    copied:       ['Copied to clipboard', 'დაკოპირდა'],
    startValue:   ['start value', 'საწყისი მნიშვნელობა'],
    unchanged:    ['unchanged', 'უცვლელი'],

    // API settings
    apiTitle:     ['API settings', 'API პარამეტრები'],
    apiUrlLabel:  ['Endpoint URL', 'Endpoint-ის URL'],
    apiUrlHint:   ['Leave empty to use the built-in mock products. A real URL is fetched for real when the flow runs.', 'ცარიელის შემთხვევაში გამოიყენება ჩაშენებული ნიმუში. ნამდვილი URL-იდან მონაცემი ნამდვილად ჩამოიტვირთება გაშვებისას.'],
    apiKeyLabel:  ['API key', 'API გასაღები'],
    apiKeyHint:   ['Stored only in this browser (localStorage). Never commit real keys to a public repo.', 'ინახება მხოლოდ ამ ბრაუზერში (localStorage). ნამდვილი გასაღები არასოდეს ატვირთო საჯარო რეპოზიტორიაში.'],
    apiSchemeLabel:['How to send the key', 'როგორ გაიგზავნოს გასაღები'],
    apiHeaderLabel:['Header name', 'ჰედერის სახელი'],
    apiParamLabel:['Query parameter name', 'query პარამეტრის სახელი'],
    apiSchemeNone:['Do not send a key', 'გასაღები არ გაიგზავნოს'],
    apiSchemeBearer:['Authorization: Bearer <key>', 'Authorization: Bearer <key>'],
    apiSchemeHeader:['Custom header', 'საკუთარი ჰედერი'],
    apiSchemeQuery:['Query parameter (?key=...)', 'query პარამეტრი (?key=...)'],
    apiPathLabel: ['Array path inside the response', 'მასივის გზა პასუხში'],
    apiPathHint:  ['Some APIs wrap the list, e.g. { "products": [...] }. Write products to dig in, or leave empty.', 'ზოგი API სიას ფარავს, მაგ. { "products": [...] }. ჩაწერე products, ან დატოვე ცარიელი.'],
    apiTest:      ['Test request', 'მოთხოვნის ტესტი'],
    apiTesting:   ['Sending...', 'იგზავნება...'],
    apiOk:        ['OK — received', 'წარმატება — მიღებულია'],
    apiFail:      ['Request failed', 'მოთხოვნა ჩავარდა'],
    apiSaved:     ['API settings saved', 'API პარამეტრები შენახულია'],
    apiShow:      ['Show', 'ჩვენება'],
    apiHide:      ['Hide', 'დამალვა'],
    apiClear:     ['Clear', 'გასუფთავება'],
    apiRequestPreview:['Request preview', 'მოთხოვნის გადახედვა'],
    apiSharedNote:['This one API config is shared by every API and fetch block on the canvas.', 'ეს ერთი კონფიგურაცია საერთოა კანვასის ყველა API და fetch ბლოკისთვის.'],
    apiCorsNote:  ['If a real API returns a CORS error, the flow falls back to mock data and says so in the trace.', 'თუ ნამდვილი API CORS შეცდომას დააბრუნებს, ნაკადი გადავა ნიმუშზე და ამას ნაბიჯებში დაწერს.'],
    livePreview:  ['Live data fetched from your endpoint', 'ცოცხალი მონაცემი შენი endpoint-იდან'],
    fetchFailed:  ['Fetch failed — falling back to mock data', 'მოთხოვნა ვერ შესრულდა — გამოყენებულია ნიმუში'],
    consoleTitle: ['Console', 'კონსოლი'],
    consoleHint:  ['console.log output from this flow', 'ამ ნაკადის console.log გამონატანი'],
    consoleEmpty: ['Nothing logged yet.', 'ჯერ არაფერია დალოგილი.'],

    // Connections
    wouldLoop:    ['That would make a loop', 'ეს ციკლს შექმნიდა'],
    wouldLoopMsg: ['Data has to flow forward — a block cannot feed one of the blocks it came from.', 'მონაცემი წინ უნდა მიედინებოდეს — ბლოკი ვერ მისცემს მონაცემს იმ ბლოკს, საიდანაც თვითონ მიიღო.'],
    removeLink:   ['Remove connection', 'კავშირის წაშლა'],

    // Reference schemas gallery
    realWorld:    ['Real-world scenarios', 'რეალური სცენარები'],
    realWorldSub: ['The flows behind products people use every day. Open one read-only, or practise it as a task.', 'ნაკადები ყოველდღიური პროდუქტების უკან. გახსენი სანახავად ან ივარჯიშე დავალების სახით.'],
    realProjects: ['From real products', 'რეალური პროდუქტებიდან'],
    realProjectsSub: ['The same blocks inside apps everyone has used: YouTube, Spotify, Netflix, Google, Bolt, Airbnb, GitHub, Instagram, Wolt and Duolingo.', 'იგივე ბლოკები აპებში, რომლებსაც ყველა იყენებს: YouTube, Spotify, Netflix, Google, Bolt, Airbnb, GitHub, Instagram, Wolt და Duolingo.'],
    conceptSchemas:['Concept schemas', 'კონცეფციების სქემები'],
    practiceTask: ['Practise as a task', 'ივარჯიშე დავალებად'],

    // Real-world tasks
    tasks:        ['Tasks', 'დავალებები'],
    tasksTitle:   ['Real-world tasks', 'რეალური დავალებები'],
    tasksSub:     ['Each task is a job from a real product. Read the brief, then design the flow yourself — the checklist ticks as you build.', 'თითო დავალება რეალური პროდუქტის ამოცანაა. წაიკითხე აღწერა და ნაკადი თავად დააპროექტე — სია აწყობისას თავისით მოინიშნება.'],
    startTask:    ['Start task', 'დაწყება'],
    viewSolution: ['Solution', 'ამოხსნა'],
    completedBadge:['Done', 'შესრულდა'],
    blocksCount:  ['blocks', 'ბლოკი'],
    reqsCount:    ['checks', 'შემოწმება'],
    taskEyebrow:  ['Real-world task', 'რეალური დავალება'],
    taskLabel:    ['Task', 'დავალება'],
    taskProgress: ['requirements met', 'მოთხოვნა შესრულებულია'],
    taskBlocks:   ['Blocks you will need — click to add', 'საჭირო ბლოკები — დააწკაპუნე დასამატებლად'],
    addToCanvas:  ['Add to canvas', 'კანვასზე დამატება'],
    showBlocks:   ['Show blocks', 'ბლოკები'],
    hideBlocks:   ['Hide blocks', 'ბლოკების დამალვა'],
    showSolution: ['Show solution', 'ამოხსნა'],
    hideSolution: ['Hide solution', 'ამოხსნის დამალვა'],
    solutionLabel:['Reference solution', 'ნიმუშის ამოხსნა'],
    checkTask:    ['Check task', 'შემოწმება'],
    exitTask:     ['Leave task (keeps your canvas)', 'დავალებიდან გასვლა (კანვასი რჩება)'],
    collapse:     ['Collapse', 'ჩაკეცვა'],
    expand:       ['Expand', 'გაშლა'],
    taskDone:     ['Task complete!', 'დავალება შესრულებულია!'],
    taskDoneMsg:  ['Every requirement is met. Press Run Flow to watch the real data move through your design.', 'ყველა მოთხოვნა შესრულებულია. დააჭირე გაშვებას და ნახე, როგორ მოძრაობს ნამდვილი მონაცემი შენს სქემაში.'],
    taskMissing:  ['Not finished yet', 'ჯერ არ დასრულებულა'],
    taskNext:     ['Next requirement:', 'შემდეგი მოთხოვნა:'],
    taskTip:      ['Read the brief, then build the flow. One port can hold several connections — drag from it again to branch.', 'წაიკითხე აღწერა და ააწყე ნაკადი. ერთ პორტს რამდენიმე კავშირი შეიძლება ჰქონდეს — განშტოებისთვის ისევ გამოათრიე იმავე პორტიდან.'],
    reqConnected: ['Every block is connected to the flow', 'ყველა ბლოკი ნაკადთანაა დაკავშირებული']
};

let lang = 'en';
function tx(field) {
    if (Array.isArray(field)) return field[lang === 'ka' ? 1 : 0];
    return field == null ? '' : field;
}
function tt(key) {
    return T[key] ? tx(T[key]) : key;
}

// ============================================================
// BLOCK DEFINITIONS
// Every block is one real JavaScript idea: what it does, where it
// lives, the code behind it, and the mistake people make with it.
// ============================================================
const NODE_DEFS = {

    // ---------- Data sources ----------
    dataArray: {
        label: ['Array of data', 'მონაცემთა მასივი'],
        category: ['Source', 'წყარო'],
        color: '',
        short: ['Hard-coded array in your file', 'მასივი პირდაპირ ფაილში'],
        long: ['The simplest data source: an array of objects written straight into your JavaScript file. No network, no waiting — the value already exists the moment the script runs. Start every new idea here, then swap it for a real API later.',
               'ყველაზე მარტივი წყარო: ობიექტების მასივი ჩაწერილი პირდაპირ JavaScript ფაილში. ქსელი არ არის, ლოდინი არ არის — მნიშვნელობა უკვე არსებობს სკრიპტის გაშვებისთანავე. ახალი იდეა ჯერ აქედან დაიწყე, მერე შეცვალე ნამდვილი API-ით.'],
        file: 'data.js · app.js',
        code: '<span class="k">const</span> products = [\n  { id: <span class="n">1</span>, name: <span class="s">\'Laptop\'</span>, price: <span class="n">1200</span>, inStock: <span class="k">true</span> },\n  { id: <span class="n">2</span>, name: <span class="s">\'USB Mouse\'</span>, price: <span class="n">25</span>, inStock: <span class="k">false</span> }\n];',
        mistake: ['Editing this array at runtime and expecting it to survive a refresh. Nothing is saved unless you write it to localStorage or a server.',
                  'მასივის შეცვლა გაშვების დროს და იმის მოლოდინი, რომ განახლების შემდეგაც დარჩება. არაფერი ინახება, სანამ localStorage-ში ან სერვერზე არ ჩაწერ.'],
        io: ['nothing in → Array of objects out', 'შემოსავალი არ აქვს → გამოდის ობიექტების მასივი']
    },
    apiEndpoint: {
        label: ['API endpoint', 'API მისამართი'],
        category: ['Source', 'წყარო'],
        color: '',
        short: ['The URL your data comes from', 'URL, საიდანაც მოდის მონაცემი'],
        long: ['A URL that answers with JSON. It is just a string until fetch() actually calls it. Open the inspector on this block to set a real URL and an API key — the flow will then make a real request when you press Run Flow.',
               'URL, რომელიც JSON-ს პასუხობს. სანამ fetch() არ გამოიძახებს, ეს უბრალო სტრიქონია. ამ ბლოკის ინსპექტორში ჩაწერე ნამდვილი URL და API გასაღები — გაშვებისას ნაკადი ნამდვილ მოთხოვნას გააგზავნის.'],
        file: 'config.js · .env',
        code: '<span class="k">const</span> API = <span class="s">\'https://api.example.com/products\'</span>;\n<span class="c">// A URL is data too — nothing happens until fetch() runs.</span>',
        mistake: ['Hard-coding a secret key next to the URL and pushing it to GitHub. Keys belong in environment variables or behind your own backend.',
                  'საიდუმლო გასაღების პირდაპირ ჩაწერა URL-ის გვერდით და GitHub-ზე ატვირთვა. გასაღები environment ცვლადში ან შენივე backend-ის მიღმა უნდა იყოს.'],
        io: ['nothing in → URL string out', 'შემოსავალი არ აქვს → გამოდის URL სტრიქონი']
    },
    localStore: {
        label: ['localStorage', 'localStorage'],
        category: ['Source', 'წყარო'],
        color: '',
        short: ['Data saved in this browser', 'ბრაუზერში შენახული მონაცემი'],
        long: ['localStorage keeps strings in the browser, and they survive a refresh and a restart. It only stores text — objects and arrays must be turned into JSON on the way in and parsed on the way out.',
               'localStorage ბრაუზერში ინახავს სტრიქონებს და ისინი გვერდის განახლების შემდეგაც რჩება. ინახავს მხოლოდ ტექსტს — ობიექტი და მასივი შესვლისას JSON-ად უნდა აქციო, გამოსვლისას კი დააპარსო.'],
        file: 'browser storage',
        code: '<span class="k">const</span> raw = localStorage.<span class="k">getItem</span>(<span class="s">\'products\'</span>);\n<span class="c">// raw is a STRING (or null on the first visit)</span>',
        mistake: ['Forgetting it can be null on the very first visit, then calling .map() on null and crashing the page.',
                  'იმის დავიწყება, რომ პირველ ვიზიტზე null-ია — მერე .map() null-ზე და გვერდი ფუჭდება.'],
        io: ['key in → JSON string out', 'შედის key → გამოდის JSON სტრიქონი']
    },
    userInput: {
        label: ['Input value', 'ინფუთის მნიშვნელობა'],
        category: ['Source', 'წყარო'],
        color: '',
        short: ['What the user typed', 'რაც მომხმარებელმა აკრიფა'],
        long: ['Reading input.value gives you what the user typed — always a string, even in a number field. Trim it and validate it before it goes anywhere near your data.',
               'input.value გაძლევს იმას, რაც მომხმარებელმა აკრიფა — ყოველთვის სტრიქონი, რიცხვის ველშიც კი. გაასუფთავე და შეამოწმე, სანამ მონაცემებთან მიუშვებ.'],
        file: 'index.html + app.js',
        code: '<span class="k">const</span> q = document.<span class="k">querySelector</span>(<span class="s">\'#search\'</span>).value.<span class="k">trim</span>();\n<span class="c">// "lap" — always a string</span>',
        mistake: ['Treating a number input as a number. "10" + 5 is "105", not 15 — convert with Number() first.',
                  'რიცხვის ველის რიცხვად მიჩნევა. "10" + 5 იძლევა "105"-ს და არა 15-ს — ჯერ Number()-ით გადაიყვანე.'],
        io: ['keystrokes in → string out', 'შედის აკრეფა → გამოდის სტრიქონი']
    },

    // ---------- Fetch & HTTP ----------
    fetchCall: {
        label: ['fetch()', 'fetch()'],
        category: ['Network', 'ქსელი'],
        color: 'c-info',
        short: ['Send the HTTP request', 'აგზავნის HTTP მოთხოვნას'],
        long: ['fetch() sends the request and immediately returns a Promise — a receipt saying an answer will arrive. The Promise resolves to a Response object, which is the envelope, not the data. You still have to open it with .json().',
               'fetch() აგზავნის მოთხოვნას და მაშინვე აბრუნებს Promise-ს — ქვითარს იმის შესახებ, რომ პასუხი მოვა. Promise იხსნება Response ობიექტად, რომელიც კონვერტია და არა თავად მონაცემი. მას .json()-ით უნდა გახსნა.'],
        file: 'app.js · api.js',
        code: '<span class="k">const</span> res = <span class="k">await</span> <span class="k">fetch</span>(API, {\n  headers: { <span class="s">\'Accept\'</span>: <span class="s">\'application/json\'</span> }\n});\n<span class="c">// res is a Response, not your data yet</span>',
        mistake: ['Expecting fetch to throw on a 404 or 500. It only rejects on network failure — check res.ok yourself.',
                  'იმის მოლოდინი, რომ fetch 404-ზე ან 500-ზე ჩავარდება. ის მხოლოდ ქსელის შეცდომაზე ვარდება — res.ok თვითონ უნდა შეამოწმო.'],
        io: ['URL + options in → Promise of Response out', 'შედის URL + პარამეტრები → გამოდის Promise of Response']
    },
    apiKey: {
        label: ['API key / headers', 'API გასაღები / ჰედერები'],
        category: ['Network', 'ქსელი'],
        color: 'c-warning',
        short: ['Prove who is calling', 'ადასტურებს ვინ ურეკავს'],
        long: ['Most real APIs refuse anonymous calls. You attach a key — usually as an Authorization: Bearer header, sometimes as a custom header like x-api-key, sometimes as a query parameter. Set yours in this block inspector; every fetch block on the canvas then uses it.',
               'რეალური API-ების უმეტესობა ანონიმურ მოთხოვნას არ იღებს. თან უნდა გააყოლო გასაღები — ჩვეულებრივ Authorization: Bearer ჰედერით, ზოგჯერ x-api-key ჰედერით, ზოგჯერ query პარამეტრით. ჩაწერე ამ ბლოკის ინსპექტორში და კანვასის ყველა fetch ბლოკი გამოიყენებს.'],
        file: 'api.js · .env',
        code: '<span class="k">const</span> headers = {\n  <span class="s">\'Authorization\'</span>: <span class="s">`Bearer ${API_KEY}`</span>,\n  <span class="s">\'Content-Type\'</span>: <span class="s">\'application/json\'</span>\n};',
        mistake: ['Shipping a secret key in front-end code. Anything in the browser is public — use a key that is safe to expose, or proxy the call through your own server.',
                  'საიდუმლო გასაღების ფრონტენდში გაშვება. ბრაუზერში ყველაფერი საჯაროა — გამოიყენე ისეთი გასაღები, რომლის გამოჩენაც უსაფრთხოა, ან გაატარე შენივე სერვერზე.'],
        io: ['key in → headers object out', 'შედის გასაღები → გამოდის headers ობიექტი']
    },
    jsonParse: {
        label: ['res.json()', 'res.json()'],
        category: ['Network', 'ქსელი'],
        color: 'c-info',
        short: ['Turn the response into real data', 'პასუხს აქცევს ნამდვილ მონაცემად'],
        long: ['The body arrives as text. res.json() reads that text and parses it into real JavaScript arrays and objects — and it is asynchronous too, so it also needs await. JSON.parse() does the same job for a plain string.',
               'პასუხის სხეული ტექსტად მოდის. res.json() კითხულობს ამ ტექსტს და აქცევს ნამდვილ JavaScript მასივებად და ობიექტებად — ესეც ასინქრონულია, ამიტომ მასაც await სჭირდება. JSON.parse() იმავეს აკეთებს ჩვეულებრივი სტრიქონისთვის.'],
        file: 'app.js',
        code: '<span class="k">const</span> data = <span class="k">await</span> res.<span class="k">json</span>();\n<span class="c">// now it is a real array you can .filter() and .map()</span>',
        mistake: ['Forgetting await and then logging a Promise instead of your data — the classic pending Promise in the console.',
                  'await-ის დავიწყება და მონაცემის ნაცვლად Promise-ის დალოგვა — ის ცნობილი pending Promise კონსოლში.'],
        io: ['Response in → Array / Object out', 'შედის Response → გამოდის მასივი / ობიექტი']
    },
    httpGet: {
        label: ['GET', 'GET'],
        category: ['HTTP method', 'HTTP მეთოდი'],
        color: 'c-success',
        short: ['Read data, change nothing', 'კითხულობს, არაფერს ცვლის'],
        long: ['GET is the default method: ask the server for something and change nothing. It has no body — everything you want to say goes in the URL as a path or a query string.',
               'GET ნაგულისხმევი მეთოდია: სთხოვე სერვერს რაღაც და არაფერი შეცვალო. მას body არ აქვს — ყველაფერი URL-ში იწერება, მისამართად ან query სტრიქონად.'],
        file: 'HTTP verb',
        code: '<span class="k">await</span> <span class="k">fetch</span>(<span class="s">`${API}/products?page=1`</span>);\n<span class="c">// method GET is the default</span>',
        mistake: ['Trying to send a body with GET. Put the values in the query string instead.',
                  'GET-ით body-ის გაგზავნის მცდელობა. მნიშვნელობები query სტრიქონში ჩაწერე.'],
        io: ['URL in → request options out', 'შედის URL → გამოდის მოთხოვნის პარამეტრები']
    },
    httpPost: {
        label: ['POST', 'POST'],
        category: ['HTTP method', 'HTTP მეთოდი'],
        color: 'c-info',
        short: ['Create something new', 'ქმნის ახალს'],
        long: ['POST sends a body to the server to create a new record. The body has to be a string, so you wrap your object in JSON.stringify() and tell the server what it is with a Content-Type header.',
               'POST სერვერს უგზავნის body-ს ახალი ჩანაწერის შესაქმნელად. body სტრიქონი უნდა იყოს, ამიტომ ობიექტს JSON.stringify()-ში ახვევ და Content-Type ჰედერით ეუბნები სერვერს რა არის.'],
        file: 'HTTP verb',
        code: '<span class="k">await</span> <span class="k">fetch</span>(API, {\n  method: <span class="s">\'POST\'</span>,\n  headers: { <span class="s">\'Content-Type\'</span>: <span class="s">\'application/json\'</span> },\n  body: <span class="k">JSON</span>.<span class="k">stringify</span>(newProduct)\n});',
        mistake: ['Passing the object straight as body. Without JSON.stringify() the server receives the text [object Object].',
                  'ობიექტის პირდაპირ body-ად გადაცემა. JSON.stringify()-ის გარეშე სერვერამდე მიდის ტექსტი [object Object].'],
        io: ['object in → request options out', 'შედის ობიექტი → გამოდის მოთხოვნის პარამეტრები']
    },
    httpPut: {
        label: ['PUT / PATCH', 'PUT / PATCH'],
        category: ['HTTP method', 'HTTP მეთოდი'],
        color: 'c-warning',
        short: ['Update what exists', 'ცვლის არსებულს'],
        long: ['PUT replaces a record with the full object you send; PATCH changes only the fields you include. Either way the id goes in the URL so the server knows which record you mean.',
               'PUT ჩაანაცვლებს ჩანაწერს იმ სრული ობიექტით, რომელსაც აგზავნი; PATCH ცვლის მხოლოდ იმ ველებს, რომლებსაც მიუთითებ. ორივე შემთხვევაში id URL-ში იწერება, რომ სერვერმა იცოდეს რომელ ჩანაწერზეა საუბარი.'],
        file: 'HTTP verb',
        code: '<span class="k">await</span> <span class="k">fetch</span>(<span class="s">`${API}/${id}`</span>, {\n  method: <span class="s">\'PUT\'</span>,\n  headers: { <span class="s">\'Content-Type\'</span>: <span class="s">\'application/json\'</span> },\n  body: <span class="k">JSON</span>.<span class="k">stringify</span>(updated)\n});',
        mistake: ['Sending a partial object with PUT — the missing fields can be wiped. Use PATCH for partial edits.',
                  'PUT-ით ნაწილობრივი ობიექტის გაგზავნა — დაკლებული ველები შეიძლება წაიშალოს. ნაწილობრივი ცვლილებისთვის PATCH გამოიყენე.'],
        io: ['object + id in → request options out', 'შედის ობიექტი + id → გამოდის მოთხოვნის პარამეტრები']
    },
    httpDelete: {
        label: ['DELETE', 'DELETE'],
        category: ['HTTP method', 'HTTP მეთოდი'],
        color: 'c-error',
        short: ['Remove a record', 'შლის ჩანაწერს'],
        long: ['DELETE asks the server to remove one record. Usually the id in the URL is all it needs. Update your local array afterwards, or refetch, so the screen matches the server.',
               'DELETE სთხოვს სერვერს ერთი ჩანაწერის წაშლას. ჩვეულებრივ საკმარისია URL-ში id. მერე განაახლე ლოკალური მასივი ან ხელახლა ჩამოტვირთე, რომ ეკრანი სერვერს დაემთხვეს.'],
        file: 'HTTP verb',
        code: '<span class="k">await</span> <span class="k">fetch</span>(<span class="s">`${API}/${id}`</span>, { method: <span class="s">\'DELETE\'</span> });\n<span class="c">// then drop it locally too:</span>\nitems = items.<span class="k">filter</span>(p => p.id !== id);',
        mistake: ['Removing the row from the screen before the server confirms. If the request fails the user sees a lie.',
                  'სტრიქონის ეკრანიდან მოხსნა სერვერის დადასტურებამდე. თუ მოთხოვნა ჩავარდა, მომხმარებელი ტყუილს ხედავს.'],
        io: ['id in → request options out', 'შედის id → გამოდის მოთხოვნის პარამეტრები']
    },
    tryCatch: {
        label: ['try / catch', 'try / catch'],
        category: ['Network', 'ქსელი'],
        color: 'c-warning',
        short: ['Handle the failure path', 'ამუშავებს წარუმატებლობას'],
        long: ['Networks fail, servers return 500, keys expire. try/catch keeps one broken request from breaking the whole page: catch the error, show a message, and let the user retry. Check res.ok inside, because a 404 is not an exception.',
               'ქსელი ვარდება, სერვერი აბრუნებს 500-ს, გასაღები ვადაგასულია. try/catch არ აძლევს ერთ გატეხილ მოთხოვნას მთელი გვერდის გატეხვის საშუალებას: დაიჭირე შეცდომა, აჩვენე შეტყობინება და მიეცი ხელახლა ცდის საშუალება. შიგნით res.ok-იც შეამოწმე, რადგან 404 გამონაკლისი არ არის.'],
        file: 'app.js',
        code: '<span class="k">try</span> {\n  <span class="k">const</span> res = <span class="k">await</span> <span class="k">fetch</span>(API);\n  <span class="k">if</span> (!res.ok) <span class="k">throw new</span> <span class="k">Error</span>(<span class="s">`HTTP ${res.status}`</span>);\n  <span class="k">return await</span> res.<span class="k">json</span>();\n} <span class="k">catch</span> (err) {\n  showError(err.message);\n}',
        mistake: ['Swallowing the error with an empty catch block. Silent failures are the hardest bugs to find.',
                  'შეცდომის ჩაყლაპვა ცარიელი catch-ით. მდუმარე შეცდომა ყველაზე ძნელი საპოვნელია.'],
        io: ['risky value in → value or handled error out', 'შედის სარისკო მნიშვნელობა → გამოდის მნიშვნელობა ან დამუშავებული შეცდომა']
    },
    abortCtl: {
        label: ['AbortController', 'AbortController'],
        category: ['Network', 'ქსელი'],
        color: 'c-error',
        short: ['Cancel a request in flight', 'აუქმებს გაშვებულ მოთხოვნას'],
        long: ['When the user types again, the previous search is already useless. AbortController gives you a signal you can pass to fetch and later cancel, so an old slow answer can never overwrite a newer one.',
               'როცა მომხმარებელი ხელახლა კრეფს, წინა ძებნა უკვე ზედმეტია. AbortController გაძლევს signal-ს, რომელსაც fetch-ს გადასცემ და მერე აუქმებ — ასე ძველი, ნელი პასუხი ვეღარასოდეს გადააფარებს ახალს.'],
        file: 'app.js',
        code: '<span class="k">let</span> ctrl;\n<span class="k">function</span> <span class="f">search</span>(q) {\n  ctrl?.<span class="k">abort</span>();\n  ctrl = <span class="k">new</span> <span class="k">AbortController</span>();\n  <span class="k">return</span> <span class="k">fetch</span>(url, { signal: ctrl.signal });\n}',
        mistake: ['Not catching the AbortError afterwards — a cancel looks like a crash in the console if you ignore it.',
                  'AbortError-ის დაუჭერლობა — გაუქმება კონსოლში ავარიად გამოიყურება, თუ არ დაამუშავე.'],
        io: ['request in → cancellable request out', 'შედის მოთხოვნა → გამოდის გაუქმებადი მოთხოვნა']
    },

    // ---------- Async & timing ----------
    asyncFn: {
        label: ['async function', 'async ფუნქცია'],
        category: ['Async', 'ასინქრონული'],
        color: '',
        short: ['A function allowed to wait', 'ფუნქცია, რომელსაც ლოდინი შეუძლია'],
        long: ['Marking a function async does two things: it lets you use await inside, and it makes the function itself return a Promise. That is why calling it without await gives you a Promise instead of the value.',
               'ფუნქციის async-ად მონიშვნა ორ რამეს აკეთებს: შიგნით await-ის გამოყენების უფლებას გაძლევს და თავად ფუნქციას Promise-ის დაბრუნებას აიძულებს. სწორედ ამიტომ, await-ის გარეშე გამოძახებისას მნიშვნელობის ნაცვლად Promise მიიღება.'],
        file: 'app.js',
        code: '<span class="k">async function</span> <span class="f">loadProducts</span>() {\n  <span class="k">const</span> res = <span class="k">await</span> <span class="k">fetch</span>(API);\n  <span class="k">return await</span> res.<span class="k">json</span>();\n}\n<span class="c">// loadProducts() returns a Promise</span>',
        mistake: ['Writing await at the top level of a classic script. Outside a module you need an async function around it.',
                  'await-ის ჩაწერა ჩვეულებრივი სკრიპტის ზედა დონეზე. მოდულის გარეთ მას async ფუნქცია სჭირდება.'],
        io: ['body in → Promise out', 'შედის სხეული → გამოდის Promise']
    },
    awaitOp: {
        label: ['await', 'await'],
        category: ['Async', 'ასინქრონული'],
        color: '',
        short: ['Unwrap the promise', 'ხსნის Promise-ს'],
        long: ['await pauses this function until the Promise settles, then hands you the plain value inside. The rest of the page keeps running — nothing is frozen, only this function is parked.',
               'await აჩერებს ამ ფუნქციას, სანამ Promise არ დასრულდება, და შემდეგ გაძლევს შიგნით არსებულ სუფთა მნიშვნელობას. გვერდის დანარჩენი ნაწილი მუშაობას აგრძელებს — არაფერი იყინება, მხოლოდ ეს ფუნქცია ჩერდება.'],
        file: 'app.js',
        code: '<span class="k">const</span> data = <span class="k">await</span> <span class="f">loadProducts</span>();\n<span class="c">// data is the array, not a Promise</span>',
        mistake: ['Awaiting inside a loop when the calls are independent. Promise.all() runs them at the same time and is far faster.',
                  'ციკლში await-ის გამოყენება, როცა გამოძახებები დამოუკიდებელია. Promise.all() ერთდროულად უშვებს და გაცილებით სწრაფია.'],
        io: ['Promise in → resolved value out', 'შედის Promise → გამოდის მზა მნიშვნელობა']
    },
    promiseThen: {
        label: ['.then() chain', '.then() ჯაჭვი'],
        category: ['Async', 'ასინქრონული'],
        color: '',
        short: ['The older way to wait', 'ლოდინის ძველი გზა'],
        long: ['Before async/await, every result was picked up in a callback: .then() for success, .catch() for failure. It is the exact same Promise underneath — worth reading, because most tutorials and older code still use it.',
               'async/await-მდე ყოველი შედეგი callback-ში მოდიოდა: .then() წარმატებისთვის, .catch() შეცდომისთვის. ქვეშ ზუსტად იგივე Promise-ია — წასაკითხად ღირს, რადგან ბევრი გაკვეთილი და ძველი კოდი დღესაც ასე წერს.'],
        file: 'app.js',
        code: '<span class="k">fetch</span>(API)\n  .<span class="k">then</span>(res => res.<span class="k">json</span>())\n  .<span class="k">then</span>(data => render(data))\n  .<span class="k">catch</span>(err => showError(err));',
        mistake: ['Forgetting to return inside a .then() — the next .then() then receives undefined.',
                  '.then()-ში return-ის დავიწყება — შემდეგი .then() undefined-ს იღებს.'],
        io: ['Promise in → value out (in a callback)', 'შედის Promise → გამოდის მნიშვნელობა (callback-ში)']
    },
    setTimeoutBlk: {
        label: ['setTimeout', 'setTimeout'],
        category: ['Async', 'ასინქრონული'],
        color: '',
        short: ['Run this later', 'გაუშვებს მოგვიანებით'],
        long: ['setTimeout hands a function to the browser with a note: run it after at least N milliseconds. At least — not exactly. It waits for the call stack to empty first, which is why a 0ms timeout still runs after your current code.',
               'setTimeout ფუნქციას ბრაუზერს გადასცემს შენიშვნით: გაუშვი მინიმუმ N მილიწამის შემდეგ. მინიმუმ — და არა ზუსტად. ჯერ ელოდება, სანამ სტეკი გასუფთავდება, სწორედ ამიტომ 0მწმ-იანი ტაიმერიც კი მიმდინარე კოდის შემდეგ სრულდება.'],
        file: 'app.js',
        code: '<span class="k">setTimeout</span>(() => {\n  <span class="k">console</span>.<span class="k">log</span>(<span class="s">\'later\'</span>);\n}, <span class="n">300</span>);\n<span class="k">console</span>.<span class="k">log</span>(<span class="s">\'now\'</span>); <span class="c">// prints first</span>',
        mistake: ['Calling the function instead of passing it: setTimeout(run(), 300) fires immediately. Pass run, not run().',
                  'ფუნქციის გამოძახება გადაცემის ნაცვლად: setTimeout(run(), 300) მაშინვე ეშვება. გადაეცი run და არა run().'],
        io: ['function in → same function, later', 'შედის ფუნქცია → იგივე ფუნქცია, მოგვიანებით']
    },
    debounceBlk: {
        label: ['Debounce', 'Debounce'],
        category: ['Async', 'ასინქრონული'],
        color: 'c-info',
        short: ['Wait for the typing to stop', 'ელოდება აკრეფის დასრულებას'],
        long: ['Every keystroke firing a request would mean eight requests for the word keyboard. Debounce restarts a small timer on each keystroke and only calls once the user pauses — one request instead of eight.',
               'თუ ყოველი ღილაკი მოთხოვნას გააგზავნის, სიტყვა keyboard რვა მოთხოვნას ნიშნავს. Debounce ყოველ დარტყმაზე თავიდან უშვებს პატარა ტაიმერს და მხოლოდ პაუზისას ეძახის — რვის ნაცვლად ერთი მოთხოვნა.'],
        file: 'utils.js',
        code: '<span class="k">function</span> <span class="f">debounce</span>(fn, ms = <span class="n">300</span>) {\n  <span class="k">let</span> t;\n  <span class="k">return</span> (...args) => {\n    <span class="k">clearTimeout</span>(t);\n    t = <span class="k">setTimeout</span>(() => fn(...args), ms);\n  };\n}',
        mistake: ['Creating the debounced function inside the event handler. A new timer every time means nothing is ever debounced.',
                  'debounce-ის შექმნა თავად handler-ის შიგნით. ყოველ ჯერზე ახალი ტაიმერი ნიშნავს, რომ არაფერი დებაუნსდება.'],
        io: ['many calls in → one call out', 'შედის ბევრი გამოძახება → გამოდის ერთი']
    },
    eventLoop: {
        label: ['Event loop', 'ივენთ ლუპი'],
        category: ['Async', 'ასინქრონული'],
        color: 'c-warning',
        short: ['Who runs first, and why', 'ვინ როდის სრულდება'],
        long: ['JavaScript runs one thing at a time. First all synchronous code, then every microtask (promise callbacks), then one macrotask (a timer). That order explains almost every moment of wondering why a log came out backwards.',
               'JavaScript ერთდროულად ერთ საქმეს აკეთებს. ჯერ ყველა სინქრონული კოდი, მერე ყველა microtask (promise-ის callback-ები), მერე ერთი macrotask (ტაიმერი). სწორედ ეს რიგი ხსნის თითქმის ყველა შემთხვევას, როცა ლოგი უკუღმა გამოვიდა.'],
        file: 'the runtime itself',
        code: '<span class="k">console</span>.<span class="k">log</span>(<span class="s">\'1 sync\'</span>);\n<span class="k">setTimeout</span>(() => <span class="k">console</span>.<span class="k">log</span>(<span class="s">\'3 timer\'</span>), <span class="n">0</span>);\n<span class="k">Promise</span>.<span class="k">resolve</span>().<span class="k">then</span>(() => <span class="k">console</span>.<span class="k">log</span>(<span class="s">\'2 micro\'</span>));\n<span class="c">// 1 sync → 2 micro → 3 timer</span>',
        mistake: ['Believing setTimeout(fn, 0) runs immediately. It runs after all current code and all promise callbacks.',
                  'იმის დაჯერება, რომ setTimeout(fn, 0) მაშინვე სრულდება. ის ყველა მიმდინარე კოდისა და promise-ის callback-ის შემდეგ სრულდება.'],
        io: ['tasks in → ordered execution out', 'შედის დავალებები → გამოდის შესრულების რიგი']
    },

    // ---------- Array & transform ----------
    filterOp: {
        label: ['.filter()', '.filter()'],
        category: ['Transform', 'გარდაქმნა'],
        color: 'c-info',
        short: ['Keep only what matches', 'ტოვებს მხოლოდ შესაბამისს'],
        long: ['.filter() walks the array and keeps every item for which your test returns true. It never touches the original array — you always get a new, usually shorter one back.',
               '.filter() გადის მასივზე და ტოვებს ყველა იმ ერთეულს, რომლისთვისაც შენი შემოწმება true-ს აბრუნებს. ორიგინალ მასივს არ ეხება — ყოველთვის ახალ, ჩვეულებრივ უფრო მოკლე მასივს გაძლევს.'],
        file: 'app.js',
        code: '<span class="k">const</span> available = products.<span class="k">filter</span>(p => p.inStock);\n<span class="c">// 5 items in → 3 items out</span>',
        mistake: ['Forgetting that filter returns a new array. products.filter(...) alone changes nothing — assign the result.',
                  'იმის დავიწყება, რომ filter ახალ მასივს აბრუნებს. მარტო products.filter(...) არაფერს ცვლის — შედეგი მიაკუთვნე ცვლადს.'],
        io: ['Array in → shorter Array out', 'შედის მასივი → გამოდის უფრო მოკლე მასივი']
    },
    mapOp: {
        label: ['.map()', '.map()'],
        category: ['Transform', 'გარდაქმნა'],
        color: 'c-info',
        short: ['Reshape every item', 'გარდაქმნის თითო ერთეულს'],
        long: ['.map() returns a new array of exactly the same length, where each item has been through your function. It is how raw API objects become the shape your UI actually wants — and how items become HTML strings.',
               '.map() აბრუნებს ზუსტად იმავე სიგრძის ახალ მასივს, სადაც თითო ერთეული შენს ფუნქციაშია გატარებული. სწორედ ასე იქცევა API-ის ნედლი ობიექტი იმ ფორმად, რაც შენს ინტერფეისს სჭირდება — და ასევე ასე იქცევა ერთეული HTML სტრიქონად.'],
        file: 'app.js',
        code: '<span class="k">const</span> rows = products.<span class="k">map</span>(p => ({\n  id: p.id,\n  title: p.name.<span class="k">toUpperCase</span>(),\n  price: <span class="s">`$${p.price}`</span>\n}));',
        mistake: ['Using .map() when you are not building a new array. If you only want to do something for each item, use .forEach().',
                  '.map()-ის გამოყენება მაშინ, როცა ახალ მასივს არ აწყობ. თუ უბრალოდ თითოეულზე რაღაცის გაკეთება გინდა, გამოიყენე .forEach().'],
        io: ['Array in → same-length Array out', 'შედის მასივი → გამოდის იმავე სიგრძის მასივი']
    },
    sortOp: {
        label: ['.sort()', '.sort()'],
        category: ['Transform', 'გარდაქმნა'],
        color: 'c-warning',
        short: ['Put items in order', 'ალაგებს რიგზე'],
        long: ['.sort() orders the array using your compare function: return a negative number to put a first, positive to put b first. Note that it changes the array in place, so copy it first with a spread if the original matters.',
               '.sort() ალაგებს მასივს შენი შესადარებელი ფუნქციით: დააბრუნე უარყოფითი რიცხვი, თუ a უნდა იყოს წინ, დადებითი — თუ b. გაითვალისწინე, რომ თავად მასივს ცვლის, ამიტომ ჯერ დააკოპირე spread-ით, თუ ორიგინალი გჭირდება.'],
        file: 'app.js',
        code: '<span class="k">const</span> cheapest = [...products].<span class="k">sort</span>(\n  (a, b) => a.price - b.price\n);',
        mistake: ['Calling .sort() with no compare function on numbers. It sorts them as text, so 100 comes before 25.',
                  'რიცხვებზე .sort()-ის გამოძახება შესადარებელი ფუნქციის გარეშე. ის ტექსტად ალაგებს, ამიტომ 100 ხვდება 25-ის წინ.'],
        io: ['Array in → reordered Array out', 'შედის მასივი → გამოდის გადალაგებული მასივი']
    },
    reduceOp: {
        label: ['.reduce()', '.reduce()'],
        category: ['Transform', 'გარდაქმნა'],
        color: 'c-info',
        short: ['Many values into one', 'ბევრიდან ერთი'],
        long: ['.reduce() folds an array down to a single value: a total, an average, a grouped object. You carry an accumulator from item to item and return the new accumulator each time.',
               '.reduce() მასივს ერთ მნიშვნელობამდე კრებს: ჯამი, საშუალო, დაჯგუფებული ობიექტი. აკუმულატორს ერთეულიდან ერთეულში გადაატარებ და ყოველ ჯერზე ახალ აკუმულატორს აბრუნებ.'],
        file: 'app.js',
        code: '<span class="k">const</span> total = products.<span class="k">reduce</span>(\n  (sum, p) => sum + p.price,\n  <span class="n">0</span>\n);',
        mistake: ['Leaving out the starting value. On an empty array reduce then throws instead of giving you 0.',
                  'საწყისი მნიშვნელობის გამოტოვება. ცარიელ მასივზე reduce მაშინ შეცდომას აგდებს, 0-ის ნაცვლად.'],
        io: ['Array in → one value out', 'შედის მასივი → გამოდის ერთი მნიშვნელობა']
    },
    findOp: {
        label: ['.find()', '.find()'],
        category: ['Transform', 'გარდაქმნა'],
        color: '',
        short: ['Get the first match', 'პოულობს პირველ დამთხვევას'],
        long: ['.find() returns the first item that matches, not an array — perfect for looking one record up by id. If nothing matches you get undefined, so check before using it.',
               '.find() აბრუნებს პირველ დამთხვევას და არა მასივს — იდეალურია ერთი ჩანაწერის id-ით მოსაძებნად. თუ ვერაფერს იპოვის, undefined-ს იღებ, ამიტომ გამოყენებამდე შეამოწმე.'],
        file: 'app.js',
        code: '<span class="k">const</span> item = products.<span class="k">find</span>(p => p.id === id);\n<span class="k">if</span> (!item) <span class="k">return</span> showNotFound();',
        mistake: ['Using .find() when you want every match. That is .filter() — find stops at the first hit.',
                  '.find()-ის გამოყენება მაშინ, როცა ყველა დამთხვევა გინდა. ამისთვის .filter()-ია — find პირველზე ჩერდება.'],
        io: ['Array in → one object (or undefined) out', 'შედის მასივი → გამოდის ერთი ობიექტი (ან undefined)']
    },
    destructure: {
        label: ['Destructuring', 'დესტრუქტურიზაცია'],
        category: ['Transform', 'გარდაქმნა'],
        color: '',
        short: ['Pull fields out by name', 'იღებს ველებს სახელით'],
        long: ['Destructuring unpacks the fields you need into their own variables in one line. It works on objects, arrays and function parameters, and you can give a default for anything that might be missing.',
               'დესტრუქტურიზაცია ერთ სტრიქონში გამოაქვს საჭირო ველები ცალკე ცვლადებად. მუშაობს ობიექტზე, მასივზე და ფუნქციის პარამეტრზეც, და შეგიძლია ნაგულისხმევი მნიშვნელობა მისცე იმას, რაც შეიძლება არ იყოს.'],
        file: 'app.js',
        code: '<span class="k">const</span> { name, price = <span class="n">0</span> } = product;\n<span class="k">const</span> [first, ...rest] = products;',
        mistake: ['Destructuring from something that might be undefined. Guard it first, or the page throws on load.',
                  'დესტრუქტურიზაცია იმისგან, რაც შეიძლება undefined იყოს. ჯერ დაიცავი, თორემ გვერდი ჩატვირთვისას გაიჭედება.'],
        io: ['object in → named values out', 'შედის ობიექტი → გამოდის დასახელებული მნიშვნელობები']
    },
    spreadOp: {
        label: ['Spread / copy', 'Spread / კოპირება'],
        category: ['Transform', 'გარდაქმნა'],
        color: '',
        short: ['Copy instead of mutate', 'ცვლილების ნაცვლად კოპირება'],
        long: ['The three dots copy an array or object into a new one, so you can add an item or change a field without touching the original. This is the habit every framework will expect from you later.',
               'სამი წერტილი მასივს ან ობიექტს ახალში აკოპირებს, რომ ერთეული დაამატო ან ველი შეცვალო ორიგინალის შეხების გარეშე. სწორედ ეს ჩვევა მოგთხოვს მოგვიანებით ნებისმიერი ფრეიმვორკი.'],
        file: 'app.js',
        code: '<span class="k">const</span> next = [...products, newProduct];\n<span class="k">const</span> patched = { ...product, price: <span class="n">99</span> };',
        mistake: ['Assuming the copy is deep. Nested objects are still shared — change one and both see it.',
                  'იმის ვარაუდი, რომ კოპირება ღრმაა. ჩადგმული ობიექტები კვლავ საერთოა — ერთს შეცვლი და ორივე შეიცვლება.'],
        io: ['Array in → new Array (+1 item) out', 'შედის მასივი → გამოდის ახალი მასივი (+1 ერთეული)']
    },
    templateLit: {
        label: ['Template string', 'შაბლონური სტრიქონი'],
        category: ['Transform', 'გარდაქმნა'],
        color: 'c-success',
        short: ['Build the HTML text', 'აწყობს HTML ტექსტს'],
        long: ['Backticks let you write multi-line text with values dropped in through ${...}. Combined with .map() and .join(), that is how an array of data becomes one string of HTML ready for the DOM.',
               'ბექთიქები საშუალებას გაძლევს დაწერო მრავალსტრიქონიანი ტექსტი და შიგნით ${...}-ით ჩასვა მნიშვნელობები. .map()-სა და .join()-თან ერთად სწორედ ასე იქცევა მონაცემთა მასივი ერთ HTML სტრიქონად, DOM-ისთვის მზად.'],
        file: 'app.js',
        code: '<span class="k">const</span> html = products.<span class="k">map</span>(p => <span class="s">`\n  &lt;li class="row"&gt;\n    &lt;b&gt;${p.name}&lt;/b&gt; — $${p.price}\n  &lt;/li&gt;`</span>).<span class="k">join</span>(<span class="s">\'\'</span>);',
        mistake: ['Forgetting .join(""). Without it the array is stringified with commas between every row.',
                  '.join("")-ის დავიწყება. მის გარეშე მასივი მძიმეებით გადაიქცევა სტრიქონად და მძიმეები ეკრანზე გამოჩნდება.'],
        io: ['Array in → HTML string out', 'შედის მასივი → გამოდის HTML სტრიქონი']
    },

    // ---------- State & storage ----------
    stateObj: {
        label: ['State object', 'State ობიექტი'],
        category: ['State', 'მდგომარეობა'],
        color: '',
        short: ['One place that holds the truth', 'ერთი ადგილი, სადაც სიმართლეა'],
        long: ['Keep everything the screen depends on in one object: the items, whether you are loading, the last error, the current filter. Change the state, then re-render from it. Never let the DOM be the place your data lives.',
               'ყველაფერი, რაზეც ეკრანია დამოკიდებული, ერთ ობიექტში შეინახე: ერთეულები, იტვირთება თუ არა, ბოლო შეცდომა, მიმდინარე ფილტრი. შეცვალე state და მერე მისგან გადახატე. არასოდეს დაუშვა, რომ შენი მონაცემი DOM-ში ცხოვრობდეს.'],
        file: 'state.js',
        code: '<span class="k">const</span> state = {\n  items: [],\n  loading: <span class="k">false</span>,\n  error: <span class="k">null</span>\n};',
        mistake: ['Reading values back out of the DOM (innerText) instead of from state. The DOM is the output, not the source.',
                  'მნიშვნელობების DOM-იდან (innerText) წაკითხვა state-ის ნაცვლად. DOM შედეგია და არა წყარო.'],
        io: ['data in → state object out', 'შედის მონაცემი → გამოდის state ობიექტი']
    },
    closureBlk: {
        label: ['Closure / module', 'ჩაკეტვა (closure)'],
        category: ['State', 'მდგომარეობა'],
        color: '',
        short: ['Private variables that survive', 'პრივატული ცვლადები, რომლებიც რჩება'],
        long: ['A function returned from another function still remembers the variables around it. That is a closure — the basis of private counters, caches, debounce timers, and every module pattern written before ES modules existed.',
               'ფუნქცია, რომელიც სხვა ფუნქციამ დააბრუნა, კვლავ ახსოვს გარშემო არსებული ცვლადები. ეს არის closure — პრივატული მრიცხველების, ქეშის, debounce-ის ტაიმერებისა და ყველა იმ მოდულის საფუძველი, რაც ES მოდულებამდე იწერებოდა.'],
        file: 'utils.js',
        code: '<span class="k">function</span> <span class="f">createCounter</span>() {\n  <span class="k">let</span> n = <span class="n">0</span>;           <span class="c">// private</span>\n  <span class="k">return</span> () => ++n;\n}\n<span class="k">const</span> next = <span class="f">createCounter</span>();',
        mistake: ['Capturing a loop variable declared with var. Use let, or every closure sees the final value.',
                  'var-ით გამოცხადებული ციკლის ცვლადის დაჭერა. გამოიყენე let, თორემ ყველა closure საბოლოო მნიშვნელობას დაინახავს.'],
        io: ['value in → function that remembers it', 'შედის მნიშვნელობა → გამოდის ფუნქცია, რომელსაც ის ახსოვს']
    },
    saveLocal: {
        label: ['Save to storage', 'შენახვა საცავში'],
        category: ['State', 'მდგომარეობა'],
        color: 'c-success',
        short: ['Persist across refreshes', 'რჩება განახლების შემდეგაც'],
        long: ['localStorage.setItem() writes a string under a key. Objects and arrays must be stringified first. Save after every state change and your app remembers where the user left off.',
               'localStorage.setItem() წერს სტრიქონს გასაღების ქვეშ. ობიექტი და მასივი ჯერ სტრიქონად უნდა აქციო. შეინახე ყოველი ცვლილების შემდეგ და აპლიკაციას ემახსოვრება, სად შეჩერდა მომხმარებელი.'],
        file: 'storage.js',
        code: 'localStorage.<span class="k">setItem</span>(\n  <span class="s">\'products\'</span>,\n  <span class="k">JSON</span>.<span class="k">stringify</span>(state.items)\n);',
        mistake: ['Storing tokens or personal data there. Any script on the page can read localStorage.',
                  'ტოკენების ან პირადი მონაცემის იქ შენახვა. გვერდზე არსებულ ნებისმიერ სკრიპტს შეუძლია localStorage-ის წაკითხვა.'],
        io: ['object in → JSON string saved', 'შედის ობიექტი → ინახება JSON სტრიქონი']
    },

    // ---------- DOM & events ----------
    querySel: {
        label: ['querySelector', 'querySelector'],
        category: ['DOM', 'DOM'],
        color: '',
        short: ['Find the element', 'პოულობს ელემენტს'],
        long: ['document.querySelector() takes any CSS selector and gives you the first matching element, or null. querySelectorAll() gives you all of them. This is your handle on the page — grab it once and keep it in a variable.',
               'document.querySelector() იღებს ნებისმიერ CSS სელექტორს და გაძლევს პირველ დამთხვევას ან null-ს. querySelectorAll() ყველას გაძლევს. ეს არის შენი სახელური გვერდზე — აიღე ერთხელ და ცვლადში შეინახე.'],
        file: 'app.js',
        code: '<span class="k">const</span> list = document.<span class="k">querySelector</span>(<span class="s">\'#list\'</span>);\n<span class="k">const</span> rows = document.<span class="k">querySelectorAll</span>(<span class="s">\'.row\'</span>);',
        mistake: ['Running the script before the element exists. Put the script at the end of body, or use defer.',
                  'სკრიპტის გაშვება ელემენტის არსებობამდე. დადე სკრიპტი body-ს ბოლოში, ან გამოიყენე defer.'],
        io: ['selector in → element out', 'შედის სელექტორი → გამოდის ელემენტი']
    },
    createEl: {
        label: ['createElement', 'createElement'],
        category: ['DOM', 'DOM'],
        color: '',
        short: ['Build a node in memory', 'ქმნის კვანძს მეხსიერებაში'],
        long: ['createElement() makes a real element object that is not on the page yet. Set its textContent and classes, then append it. Safer than innerHTML because text stays text and can never turn into markup.',
               'createElement() ქმნის ნამდვილ ელემენტს, რომელიც ჯერ გვერდზე არ არის. მიეცი textContent და კლასები, მერე დაამატე. innerHTML-ზე უსაფრთხოა, რადგან ტექსტი ტექსტად რჩება და ვერასოდეს იქცევა მარკაპად.'],
        file: 'app.js',
        code: '<span class="k">const</span> li = document.<span class="k">createElement</span>(<span class="s">\'li\'</span>);\nli.textContent = product.name;\nli.classList.<span class="k">add</span>(<span class="s">\'row\'</span>);',
        mistake: ['Creating the element and never appending it. Nothing appears until it is attached to the document.',
                  'ელემენტის შექმნა და დაუმატებლობა. სანამ დოკუმენტს არ მიაბამ, არაფერი გამოჩნდება.'],
        io: ['tag name in → detached element out', 'შედის ტეგის სახელი → გამოდის მიუბმელი ელემენტი']
    },
    appendChildBlk: {
        label: ['append / fragment', 'append / ფრაგმენტი'],
        category: ['DOM', 'DOM'],
        color: '',
        short: ['Attach nodes to the page', 'ამატებს კვანძებს გვერდზე'],
        long: ['append() puts your nodes into the document — that is the moment they become visible. When you add many rows, build them into a DocumentFragment first and append once, so the browser lays out the page a single time.',
               'append() ათავსებს კვანძებს დოკუმენტში — სწორედ მაშინ ხდებიან ხილული. როცა ბევრ სტრიქონს ამატებ, ჯერ DocumentFragment-ში აწყვე და ერთხელ დაამატე, რომ ბრაუზერმა გვერდი ერთხელ გადათვალოს.'],
        file: 'app.js',
        code: '<span class="k">const</span> frag = document.<span class="k">createDocumentFragment</span>();\nitems.<span class="k">forEach</span>(p => frag.<span class="k">append</span>(<span class="f">row</span>(p)));\nlist.<span class="k">append</span>(frag); <span class="c">// one repaint</span>',
        mistake: ['Appending inside a loop straight to the document. Each append can force a fresh layout.',
                  'ციკლში პირდაპირ დოკუმენტში დამატება. ყოველი append-ი შეიძლება ახალ გადათვლას იწვევდეს.'],
        io: ['elements in → attached DOM out', 'შედის ელემენტები → გამოდის მიბმული DOM']
    },
    renderDom: {
        label: ['Render to DOM', 'DOM-ში ჩაწერა'],
        category: ['DOM', 'DOM'],
        color: 'c-success',
        short: ['Put the HTML on the page', 'ათავსებს HTML-ს გვერდზე'],
        long: ['Assigning innerHTML replaces everything inside the container with your string in one step. It is the fastest way to see results — just never build it from text a user typed without escaping it first.',
               'innerHTML-ის მინიჭება კონტეინერის მთელ შიგთავსს ერთ ბიჯში ცვლის შენი სტრიქონით. შედეგის სანახავად ყველაზე სწრაფი გზაა — უბრალოდ არასოდეს ააწყო ის მომხმარებლის აკრეფილი ტექსტისგან ეკრანირების გარეშე.'],
        file: 'app.js',
        code: 'document.<span class="k">querySelector</span>(<span class="s">\'#list\'</span>).innerHTML = html;\n<span class="c">// one assignment, whole list on screen</span>',
        mistake: ['Injecting user text with innerHTML. That is how XSS gets in — use textContent for anything a person typed.',
                  'მომხმარებლის ტექსტის innerHTML-ით ჩასმა. სწორედ ასე შემოდის XSS — ადამიანის აკრეფილისთვის textContent გამოიყენე.'],
        io: ['HTML string in → live DOM out', 'შედის HTML სტრიქონი → გამოდის ცოცხალი DOM']
    },
    eventListener: {
        label: ['addEventListener', 'addEventListener'],
        category: ['Events', 'ივენთები'],
        color: 'c-warning',
        short: ['React to what the user does', 'რეაგირებს მომხმარებელზე'],
        long: ['addEventListener attaches a function that the browser calls when something happens: click, input, submit, keydown. The event object it passes tells you what happened and to which element.',
               'addEventListener აბამს ფუნქციას, რომელსაც ბრაუზერი გამოიძახებს, როცა რაღაც მოხდება: click, input, submit, keydown. გადმოცემული event ობიექტი გეუბნება რა მოხდა და რომელ ელემენტზე.'],
        file: 'app.js',
        code: 'btn.<span class="k">addEventListener</span>(<span class="s">\'click\'</span>, (e) => {\n  state.count++;\n  <span class="f">render</span>();\n});',
        mistake: ['Re-attaching the same listener after every render. They stack up and one click fires the handler five times.',
                  'ერთი და იმავე listener-ის ხელახლა მიბმა ყოველი გადახატვის შემდეგ. ისინი გროვდება და ერთი დაწკაპუნება handler-ს ხუთჯერ უშვებს.'],
        io: ['user action in → event object out', 'შედის მომხმარებლის ქმედება → გამოდის event ობიექტი']
    },
    delegation: {
        label: ['Event delegation', 'ივენთის დელეგირება'],
        category: ['Events', 'ივენთები'],
        color: 'c-warning',
        short: ['One listener for every row', 'ერთი listener ყველა სტრიქონზე'],
        long: ['Instead of a listener per row, put one on the container and read event.target. It keeps working for rows added later, and it is a single function instead of five hundred.',
               'თითო სტრიქონზე listener-ის ნაცვლად, დაამატე ერთი კონტეინერზე და წაიკითხე event.target. ის მუშაობს მოგვიანებით დამატებულ სტრიქონებზეც და ხუთასის ნაცვლად ერთი ფუნქციაა.'],
        file: 'app.js',
        code: 'list.<span class="k">addEventListener</span>(<span class="s">\'click\'</span>, (e) => {\n  <span class="k">const</span> row = e.target.<span class="k">closest</span>(<span class="s">\'[data-id]\'</span>);\n  <span class="k">if</span> (!row) <span class="k">return</span>;\n  <span class="f">remove</span>(<span class="k">Number</span>(row.dataset.id));\n});',
        mistake: ['Reading e.target directly when the click landed on an icon inside the row. Use closest() to walk up.',
                  'e.target-ის პირდაპირ წაკითხვა, როცა დაწკაპუნება სტრიქონში მოთავსებულ ხატულაზე მოხვდა. გამოიყენე closest(), რომ ზემოთ ახვიდე.'],
        io: ['click on container in → target row out', 'შედის დაწკაპუნება კონტეინერზე → გამოდის შესაბამისი სტრიქონი']
    },
    formSubmit: {
        label: ['Form submit', 'ფორმის გაგზავნა'],
        category: ['Events', 'ივენთები'],
        color: 'c-warning',
        short: ['Collect and validate the form', 'აგროვებს და ამოწმებს ფორმას'],
        long: ['Listen for submit on the form, not click on the button — that way Enter works too. Call preventDefault() to stop the page reloading, then read the values with FormData and validate before sending.',
               'დაუსმინე submit-ს ფორმაზე და არა click-ს ღილაკზე — ასე Enter-იც იმუშავებს. გამოიძახე preventDefault(), რომ გვერდი არ გადაიტვირთოს, მერე წაიკითხე მნიშვნელობები FormData-თი და გაგზავნამდე შეამოწმე.'],
        file: 'app.js',
        code: 'form.<span class="k">addEventListener</span>(<span class="s">\'submit\'</span>, (e) => {\n  e.<span class="k">preventDefault</span>();\n  <span class="k">const</span> data = <span class="k">Object</span>.<span class="k">fromEntries</span>(<span class="k">new</span> <span class="k">FormData</span>(form));\n  <span class="f">save</span>(data);\n});',
        mistake: ['Forgetting preventDefault(). The browser reloads the page and your JavaScript never gets to run.',
                  'preventDefault()-ის დავიწყება. ბრაუზერი გვერდს გადატვირთავს და შენი JavaScript საერთოდ ვერ შესრულდება.'],
        io: ['submit event in → form values object out', 'შედის submit → გამოდის ფორმის მნიშვნელობების ობიექტი']
    },
    classToggle: {
        label: ['classList toggle', 'classList toggle'],
        category: ['DOM', 'DOM'],
        color: '',
        short: ['Change how it looks', 'ცვლის იერსახეს'],
        long: ['Do not write inline styles from JavaScript. Toggle a class and let CSS decide what that class means — that keeps the look in the stylesheet and the logic in the script.',
               'ნუ დაწერ inline სტილებს JavaScript-იდან. გადართე კლასი და CSS-ს მიანდე გადაწყვეტა, რას ნიშნავს ეს კლასი — ასე იერსახე სტილების ფაილში რჩება, ლოგიკა კი სკრიპტში.'],
        file: 'app.js + style.css',
        code: 'row.classList.<span class="k">toggle</span>(<span class="s">\'is-active\'</span>, isActive);\nbtn.classList.<span class="k">add</span>(<span class="s">\'is-loading\'</span>);',
        mistake: ['Overwriting className and wiping the classes that were already there. Use classList.add / remove.',
                  'className-ის გადაწერა და უკვე არსებული კლასების წაშლა. გამოიყენე classList.add / remove.'],
        io: ['element + flag in → styled element out', 'შედის ელემენტი + ალამი → გამოდის დასტილული ელემენტი']
    },

    // ---------- Modules ----------
    exportBlk: {
        label: ['export', 'export'],
        category: ['Modules', 'მოდულები'],
        color: '',
        short: ['Share it with other files', 'აზიარებს სხვა ფაილებთან'],
        long: ['Each file is its own scope. Nothing leaves it unless you export it — which is exactly what keeps a big project from turning into one pile of global variables.',
               'თითო ფაილს თავისი სფერო აქვს. იქიდან არაფერი გამოდის, სანამ არ დააექსპორტებ — სწორედ ეს იცავს დიდ პროექტს გლობალური ცვლადების გროვად ქცევისგან.'],
        file: 'api.js',
        code: '<span class="k">export const</span> API = <span class="s">\'/api/products\'</span>;\n<span class="k">export async function</span> <span class="f">getAll</span>() { ... }\n<span class="k">export default</span> ProductStore;',
        mistake: ['Mixing default and named exports carelessly, then importing with the wrong syntax and getting undefined.',
                  'default და named ექსპორტების უწესრიგო შერევა, მერე არასწორი სინტაქსით იმპორტი და undefined.'],
        io: ['value in → exported binding out', 'შედის მნიშვნელობა → გამოდის ექსპორტირებული სახელი']
    },
    importBlk: {
        label: ['import', 'import'],
        category: ['Modules', 'მოდულები'],
        color: '',
        short: ['Use code from another file', 'იყენებს კოდს სხვა ფაილიდან'],
        long: ['import pulls a named export in by name and a default export under any name you like. Remember the script tag needs type="module", and modules only load over http, not from a file:// path.',
               'import შემოაქვს named ექსპორტი სახელით, default ექსპორტი კი ნებისმიერი სახელით. გახსოვდეს, script-ს სჭირდება type="module", და მოდულები მხოლოდ http-ზე იტვირთება, არა file:// მისამართიდან.'],
        file: 'app.js',
        code: '<span class="k">import</span> { getAll, API } <span class="k">from</span> <span class="s">\'./api.js\'</span>;\n<span class="k">import</span> Store <span class="k">from</span> <span class="s">\'./store.js\'</span>;',
        mistake: ['Leaving off the .js extension in the browser. Bundlers forgive it; plain browsers do not.',
                  'ბრაუზერში .js გაფართოების გამოტოვება. ბანდლერი გაპატიებს, სუფთა ბრაუზერი — არა.'],
        io: ['module path in → exported value out', 'შედის მოდულის გზა → გამოდის ექსპორტირებული მნიშვნელობა']
    },

    // ---------- Output ----------
    consoleLog: {
        label: ['console.log', 'console.log'],
        category: ['Output', 'შედეგი'],
        color: '',
        short: ['Look at the value', 'დაათვალიერე მნიშვნელობა'],
        long: ['The fastest debugger you have. Log the value, not a guess about it — and log a label with it so you know which log is which. console.table() is excellent for arrays of objects.',
               'ყველაზე სწრაფი დამხმარე, რაც გაქვს. დალოგე თავად მნიშვნელობა და არა ვარაუდი მასზე — და თან წარწერაც გააყოლე, რომ იცოდე რომელი ლოგია. console.table() მშვენივრად გამოდგება ობიექტების მასივისთვის.'],
        file: 'anywhere',
        code: '<span class="k">console</span>.<span class="k">log</span>(<span class="s">\'products:\'</span>, products);\n<span class="k">console</span>.<span class="k">table</span>(products);',
        mistake: ['Logging an object and reading it much later. The console shows a live reference — it may already have changed.',
                  'ობიექტის დალოგვა და გვიან წაკითხვა. კონსოლი ცოცხალ მიმართვას აჩვენებს — ის შეიძლება უკვე შეცვლილი იყოს.'],
        io: ['any value in → same value out', 'შედის ნებისმიერი მნიშვნელობა → იგივე გამოდის']
    },
    browser: {
        label: ['Browser screen', 'ბრაუზერის ეკრანი'],
        category: ['Output', 'შედეგი'],
        color: 'c-success',
        short: ['What the user finally sees', 'რასაც მომხმარებელი ხედავს'],
        long: ['The end of the journey: the browser paints the DOM you built. Everything before this block existed only in memory — this is the first moment a person can actually see your data.',
               'მოგზაურობის დასასრული: ბრაუზერი ხატავს შენს აწყობილ DOM-ს. ამ ბლოკამდე ყველაფერი მხოლოდ მეხსიერებაში არსებობდა — ეს არის პირველი წამი, როცა ადამიანი ნამდვილად ხედავს შენს მონაცემს.'],
        file: 'Chrome · Firefox · Safari',
        code: '<span class="c">&lt;!-- painted DOM --&gt;</span>\n&lt;li class=<span class="s">"row"</span>&gt;\n  &lt;b&gt;Laptop&lt;/b&gt; — $1200\n&lt;/li&gt;',
        mistake: ['Blaming the browser for a blank page. Open the console first — it is almost always one thrown error above.',
                  'ცარიელ გვერდში ბრაუზერის დადანაშაულება. ჯერ კონსოლი გახსენი — თითქმის ყოველთვის ერთი შეცდომაა ზემოთ.'],
        io: ['DOM in → pixels out', 'შედის DOM → გამოდის პიქსელები']
    },

    // ---------- Sub-blocks (inside a block) ----------
    'sub.param': {
        label: ['Parameter', 'პარამეტრი'], category: ['Function', 'ფუნქცია'], color: '',
        short: ['Value passed in', 'შემოსული მნიშვნელობა'],
        long: ['Parameters are the inputs of a function. Give them defaults so a missing argument does not become undefined halfway through your logic.',
               'პარამეტრები ფუნქციის შესასვლელია. მიეცი ნაგულისხმევი მნიშვნელობები, რომ დაკლებული არგუმენტი შუა ლოგიკაში undefined-ად არ იქცეს.'],
        file: 'function signature',
        code: '<span class="k">function</span> <span class="f">render</span>(items = [], target = <span class="s">\'#list\'</span>) { ... }',
        mistake: ['Relying on argument order in long signatures. Pass an options object instead.',
                  'გრძელ ხელწერაში არგუმენტების რიგზე დაყრდნობა. სჯობს გადასცე options ობიექტი.'],
        io: ['argument in → local variable out', 'შედის არგუმენტი → გამოდის ლოკალური ცვლადი']
    },
    'sub.return': {
        label: ['return', 'return'], category: ['Function', 'ფუნქცია'], color: '',
        short: ['Hand the value back', 'აბრუნებს მნიშვნელობას'],
        long: ['return ends the function and passes the value to whoever called it. A function without return gives back undefined — the source of a great many silent bugs.',
               'return ასრულებს ფუნქციას და მნიშვნელობას გამომძახებელს გადასცემს. return-ის გარეშე ფუნქცია undefined-ს აბრუნებს — ბევრი მდუმარე შეცდომის სათავე.'],
        file: 'function body',
        code: '<span class="k">return</span> items.<span class="k">filter</span>(p => p.inStock);',
        mistake: ['Putting return on its own line before the value. Automatic semicolons turn it into return undefined.',
                  'return-ის ცალკე სტრიქონზე დაწერა მნიშვნელობამდე. ავტომატური წერტილმძიმე მას return undefined-ად აქცევს.'],
        io: ['value in → caller receives it', 'შედის მნიშვნელობა → იღებს გამომძახებელი']
    },
    'sub.ifCheck': {
        label: ['if / guard', 'if / დაცვა'], category: ['Logic', 'ლოგიკა'], color: '',
        short: ['Stop early when wrong', 'ჩერდება ადრე, თუ არასწორია'],
        long: ['A guard clause checks the bad case first and returns immediately. It keeps the happy path flat and readable instead of nested five levels deep.',
               'დამცავი პირობა ჯერ ცუდ შემთხვევას ამოწმებს და მაშინვე ბრუნდება. ასე მთავარი გზა ბრტყელი და წასაკითხი რჩება, ხუთ დონეზე ჩადგმულის ნაცვლად.'],
        file: 'function body',
        code: '<span class="k">if</span> (!items?.length) <span class="k">return</span> <span class="f">showEmpty</span>();',
        mistake: ['Checking truthiness when 0 or an empty string is valid. Compare to null or undefined explicitly.',
                  'ჭეშმარიტების შემოწმება, როცა 0 ან ცარიელი სტრიქონი დასაშვებია. შეადარე პირდაპირ null-ს ან undefined-ს.'],
        io: ['value in → value or early exit', 'შედის მნიშვნელობა → გამოდის ის ან ადრეული გამოსვლა']
    },
    'sub.loop': {
        label: ['for...of loop', 'for...of ციკლი'], category: ['Logic', 'ლოგიკა'], color: '',
        short: ['Walk the items', 'გადის ერთეულებზე'],
        long: ['for...of reads each item directly, with no index bookkeeping. Use it when you need await inside the loop, where .forEach() would not wait for you.',
               'for...of თითო ერთეულს პირდაპირ კითხულობს, ინდექსის თვალყურის დევნების გარეშე. გამოიყენე მაშინ, როცა ციკლში await გჭირდება — .forEach() შენს ლოდინს არ დაელოდება.'],
        file: 'function body',
        code: '<span class="k">for</span> (<span class="k">const</span> p <span class="k">of</span> products) {\n  <span class="k">await</span> <span class="f">save</span>(p);\n}',
        mistake: ['Using await inside .forEach(). The callback is async but forEach never awaits it.',
                  '.forEach()-ში await-ის გამოყენება. callback ასინქრონულია, მაგრამ forEach მას არ ელოდება.'],
        io: ['Array in → one item at a time', 'შედის მასივი → გამოდის თითო ერთეული']
    },
    'sub.callback': {
        label: ['Callback', 'Callback'], category: ['Function', 'ფუნქცია'], color: '',
        short: ['A function given to a function', 'ფუნქცია, გადაცემული ფუნქციას'],
        long: ['Passing a function as an argument lets the other code decide when to run it. Every event handler, every .map() and every .then() is exactly this idea.',
               'ფუნქციის არგუმენტად გადაცემა სხვა კოდს აძლევს გადაწყვეტის უფლებას, როდის გაუშვას. ყოველი ივენთ-ჰენდლერი, ყოველი .map() და ყოველი .then() სწორედ ეს იდეაა.'],
        file: 'anywhere',
        code: 'items.<span class="k">forEach</span>(<span class="f">printRow</span>);   <span class="c">// pass it</span>\nitems.<span class="k">forEach</span>(<span class="f">printRow</span>()); <span class="c">// calls it — wrong</span>',
        mistake: ['Adding parentheses and calling it immediately instead of passing the function itself.',
                  'ფრჩხილების დამატება და მაშინვე გამოძახება, თავად ფუნქციის გადაცემის ნაცვლად.']
    },
    'sub.arrow': {
        label: ['Arrow function', 'ისრიანი ფუნქცია'], category: ['Function', 'ფუნქცია'], color: '',
        short: ['Short function syntax', 'ფუნქციის მოკლე ჩანაწერი'],
        long: ['Arrow functions are compact and, unlike normal functions, they keep the surrounding this. That is why they are the safe choice inside class methods and callbacks.',
               'ისრიანი ფუნქციები კომპაქტურია და, ჩვეულებრივისგან განსხვავებით, გარშემო არსებულ this-ს ინარჩუნებს. სწორედ ამიტომ არის ის უსაფრთხო არჩევანი კლასის მეთოდებსა და callback-ებში.'],
        file: 'anywhere',
        code: '<span class="k">const</span> total = ps => ps.<span class="k">reduce</span>((s, p) => s + p.price, <span class="n">0</span>);',
        mistake: ['Wrapping a returned object without parentheses. p => ({ id: p.id }) — the braces need them.',
                  'დაბრუნებული ობიექტის ფრჩხილების გარეშე დაწერა. p => ({ id: p.id }) — ფიგურულ ფრჩხილებს მრგვალი სჭირდება.']
    },
    'sub.tryBlock': {
        label: ['try block', 'try ბლოკი'], category: ['Errors', 'შეცდომები'], color: '',
        short: ['The risky part', 'სარისკო ნაწილი'],
        long: ['Put only the code that can realistically fail inside try. A huge try block hides where the problem actually came from.',
               'try-ში მხოლოდ ის კოდი ჩადე, რომელიც რეალურად შეიძლება ჩავარდეს. უზარმაზარი try ბლოკი მალავს, საიდან წამოვიდა პრობლემა.'],
        file: 'function body',
        code: '<span class="k">try</span> {\n  <span class="k">const</span> res = <span class="k">await</span> <span class="k">fetch</span>(url);\n}',
        mistake: ['Wrapping the whole function so a typo in render() looks like a network error.',
                  'მთელი ფუნქციის შეხვევა — მერე render()-ში დაშვებული შეცდომა ქსელის შეცდომად გამოიყურება.']
    },
    'sub.catchBlock': {
        label: ['catch block', 'catch ბლოკი'], category: ['Errors', 'შეცდომები'], color: 'c-error',
        short: ['What to do when it fails', 'რა გააკეთო ჩავარდნისას'],
        long: ['catch receives the error. Do something with it the user can see — a message, a retry button — and log the real error for yourself.',
               'catch იღებს შეცდომას. გააკეთე მასთან ის, რასაც მომხმარებელი დაინახავს — შეტყობინება, ხელახლა ცდის ღილაკი — და ნამდვილი შეცდომა შენთვის დალოგე.'],
        file: 'function body',
        code: '<span class="k">catch</span> (err) {\n  state.error = err.message;\n  <span class="f">render</span>();\n}',
        mistake: ['Showing the raw error text to users. Log the detail, show a sentence they can act on.',
                  'ნედლი შეცდომის ტექსტის ჩვენება მომხმარებელს. დეტალი დალოგე, აჩვენე კი წინადადება, რომელზეც რეაგირება შეუძლია.']
    },
    'sub.headers': {
        label: ['headers object', 'headers ობიექტი'], category: ['Request', 'მოთხოვნა'], color: 'c-warning',
        short: ['Extra info about the request', 'დამატებითი ინფორმაცია მოთხოვნაზე'],
        long: ['Headers travel alongside the body and describe the request: what format you are sending, what you accept back, and who you are.',
               'ჰედერები body-ის გვერდით მიდის და აღწერს მოთხოვნას: რა ფორმატს აგზავნი, რას იღებ პასუხად და ვინ ხარ.'],
        file: 'fetch options',
        code: 'headers: {\n  <span class="s">\'Content-Type\'</span>: <span class="s">\'application/json\'</span>,\n  <span class="s">\'Authorization\'</span>: <span class="s">`Bearer ${key}`</span>\n}',
        mistake: ['Setting Content-Type manually when sending FormData. Let the browser set the boundary itself.',
                  'Content-Type-ის ხელით მითითება FormData-ის გაგზავნისას. მიანდე ბრაუზერს, თვითონ დააყენოს.']
    },
    'sub.bodyJson': {
        label: ['JSON body', 'JSON body'], category: ['Request', 'მოთხოვნა'], color: '',
        short: ['The payload you send', 'გასაგზავნი შიგთავსი'],
        long: ['The body must be a string. JSON.stringify() converts your object, and the server parses it back on its side.',
               'body სტრიქონი უნდა იყოს. JSON.stringify() გადაიყვანს შენს ობიექტს, სერვერი კი თავის მხარეს უკან დააპარსავს.'],
        file: 'fetch options',
        code: 'body: <span class="k">JSON</span>.<span class="k">stringify</span>({ name, price })',
        mistake: ['Sending a body with GET. It is ignored, and some servers reject the request outright.',
                  'GET-თან ერთად body-ის გაგზავნა. ის იგნორირდება, ზოგი სერვერი კი მოთხოვნას საერთოდ არ იღებს.']
    },
    'sub.method': {
        label: ['method', 'method'], category: ['Request', 'მოთხოვნა'], color: '',
        short: ['Which verb to use', 'რომელი ზმნა გამოიყენო'],
        long: ['GET reads, POST creates, PUT replaces, PATCH edits, DELETE removes. Choosing the honest verb is what makes an API predictable.',
               'GET კითხულობს, POST ქმნის, PUT ცვლის, PATCH არედაქტირებს, DELETE შლის. სწორედ პატიოსანი ზმნის არჩევა ხდის API-ს პროგნოზირებადს.'],
        file: 'fetch options',
        code: 'method: <span class="s">\'POST\'</span>',
        mistake: ['Doing everything with POST. Then nothing can be cached and no one can guess what a call does.',
                  'ყველაფრის POST-ით კეთება. მაშინ ვერაფერი ქეშირდება და ვერავინ მიხვდება, რას აკეთებს გამოძახება.']
    },
    'sub.statusCheck': {
        label: ['res.ok / status', 'res.ok / status'], category: ['Response', 'პასუხი'], color: 'c-success',
        short: ['Did it actually work?', 'ნამდვილად გამოვიდა?'],
        long: ['fetch resolves happily on a 404. res.ok is true only for 200-299, so check it and throw yourself when it is false.',
               'fetch 404-ზეც წყნარად სრულდება. res.ok მხოლოდ 200-299-ზეა true, ამიტომ შეამოწმე და თვითონ ააგდე შეცდომა, თუ false-ია.'],
        file: 'after fetch',
        code: '<span class="k">if</span> (!res.ok) <span class="k">throw new</span> <span class="k">Error</span>(<span class="s">`HTTP ${res.status}`</span>);',
        mistake: ['Assuming any answer is a good answer, then trying to .map() an error object.',
                  'იმის ვარაუდი, რომ ნებისმიერი პასუხი კარგია — მერე შეცდომის ობიექტზე .map()-ის ცდა.']
    },
    'sub.throwErr': {
        label: ['throw Error', 'throw Error'], category: ['Errors', 'შეცდომები'], color: 'c-error',
        short: ['Report the problem upward', 'აცნობებს პრობლემას ზემოთ'],
        long: ['throw stops this function and hands the problem to the nearest catch. Throw real Error objects — they carry a stack trace, strings do not.',
               'throw აჩერებს ამ ფუნქციას და პრობლემას უახლოეს catch-ს გადასცემს. ააგდე ნამდვილი Error ობიექტი — მას სტეკის კვალი აქვს, სტრიქონს არა.'],
        file: 'function body',
        code: '<span class="k">throw new</span> <span class="k">Error</span>(<span class="s">\'Product not found\'</span>);',
        mistake: ['Throwing a plain string. You lose the stack trace and the debugger cannot help you.',
                  'უბრალო სტრიქონის აგდება. კარგავ სტეკის კვალს და დამხმარე ინსტრუმენტი ვეღარ გეხმარება.']
    },
    'sub.keyRead': {
        label: ['getItem', 'getItem'], category: ['Storage', 'საცავი'], color: '',
        short: ['Read the saved string', 'კითხულობს შენახულ სტრიქონს'],
        long: ['getItem returns a string or null. Parse it inside a try/catch — stored JSON can be corrupted by an older version of your app.',
               'getItem აბრუნებს სტრიქონს ან null-ს. დააპარსე try/catch-ში — შენახული JSON შეიძლება შენივე აპლიკაციის ძველმა ვერსიამ დააზიანა.'],
        file: 'storage.js',
        code: '<span class="k">const</span> saved = <span class="k">JSON</span>.<span class="k">parse</span>(localStorage.<span class="k">getItem</span>(<span class="s">\'products\'</span>) ?? <span class="s">\'[]\'</span>);',
        mistake: ['Calling JSON.parse(null) and letting the exception take down the whole page load.',
                  'JSON.parse(null)-ის გამოძახება და გამონაკლისით მთელი ჩატვირთვის ჩაშლა.']
    },
    'sub.keyWrite': {
        label: ['setItem', 'setItem'], category: ['Storage', 'საცავი'], color: 'c-success',
        short: ['Write the string back', 'წერს სტრიქონს უკან'],
        long: ['setItem overwrites the whole key. Save after each meaningful change, and keep the key name in one constant so a typo cannot split your data in two.',
               'setItem მთლიან გასაღებს გადააწერს. შეინახე ყოველი მნიშვნელოვანი ცვლილების შემდეგ და გასაღების სახელი ერთ კონსტანტაში დაიჭირე, რომ შეცდომამ მონაცემი ორად არ გაჰყოს.'],
        file: 'storage.js',
        code: 'localStorage.<span class="k">setItem</span>(KEY, <span class="k">JSON</span>.<span class="k">stringify</span>(state.items));',
        mistake: ['Saving on every keystroke. Debounce it, or you write to disk hundreds of times a minute.',
                  'ყოველ დარტყმაზე შენახვა. დააყოვნე, თორემ წუთში ასობითჯერ წერ დისკზე.']
    },
    'sub.stateGet': {
        label: ['read state', 'state-ის წაკითხვა'], category: ['State', 'მდგომარეობა'], color: '',
        short: ['Look at current state', 'ათვალიერებს მიმდინარე state-ს'],
        long: ['Read from the state object, never from the DOM. The state is the single source of truth; the screen is a picture of it.',
               'წაიკითხე state ობიექტიდან და არასოდეს DOM-იდან. state არის სიმართლის ერთადერთი წყარო; ეკრანი კი მისი სურათია.'],
        file: 'state.js',
        code: '<span class="k">const</span> visible = state.items.<span class="k">filter</span>(p => p.inStock);',
        mistake: ['Keeping two copies of the same list and letting them drift apart.',
                  'ერთი და იმავე სიის ორი ასლის შენახვა და მათი ერთმანეთისგან დაშორება.']
    },
    'sub.stateSet': {
        label: ['update state', 'state-ის განახლება'], category: ['State', 'მდგომარეობა'], color: 'c-info',
        short: ['Change it, then re-render', 'შეცვალე და გადახატე'],
        long: ['Write the change into state and call render() once. One path in, one path out — that discipline is the whole idea behind every UI framework.',
               'ჩაწერე ცვლილება state-ში და ერთხელ გამოიძახე render(). ერთი შესასვლელი, ერთი გამოსასვლელი — სწორედ ეს დისციპლინაა ყველა UI ფრეიმვორკის იდეა.'],
        file: 'state.js',
        code: 'state.items = [...state.items, product];\n<span class="f">render</span>();',
        mistake: ['Changing state and forgetting to re-render — the data is right but the screen still shows the old list.',
                  'state-ის შეცვლა და გადახატვის დავიწყება — მონაცემი სწორია, მაგრამ ეკრანი ძველ სიას აჩვენებს.']
    },
    'sub.domCreate': {
        label: ['create node', 'კვანძის შექმნა'], category: ['DOM', 'DOM'], color: '',
        short: ['Make one element', 'ქმნის ერთ ელემენტს'],
        long: ['One element per item, built in memory. Give it a data-id so a click can find its record later.',
               'თითო ერთეულზე ერთი ელემენტი, აწყობილი მეხსიერებაში. მიეცი data-id, რომ დაწკაპუნებამ მოგვიანებით მისი ჩანაწერი იპოვოს.'],
        file: 'render.js',
        code: '<span class="k">const</span> li = document.<span class="k">createElement</span>(<span class="s">\'li\'</span>);\nli.dataset.id = p.id;',
        mistake: ['Losing the link between element and record. Without data-id you cannot tell which row was clicked.',
                  'ელემენტსა და ჩანაწერს შორის კავშირის დაკარგვა. data-id-ის გარეშე ვერ იტყვი, რომელ სტრიქონზე დააწკაპუნეს.']
    },
    'sub.domText': {
        label: ['textContent', 'textContent'], category: ['DOM', 'DOM'], color: 'c-success',
        short: ['Safe text into the node', 'უსაფრთხო ტექსტი კვანძში'],
        long: ['textContent writes text as text. Whatever the user typed stays visible characters and can never become executable markup.',
               'textContent ტექსტს ტექსტად წერს. რაც მომხმარებელმა აკრიფა, ხილულ სიმბოლოებად რჩება და ვერასოდეს იქცევა შესასრულებელ მარკაპად.'],
        file: 'render.js',
        code: 'li.textContent = <span class="s">`${p.name} — $${p.price}`</span>;',
        mistake: ['Reaching for innerHTML out of habit when plain text is all you need.',
                  'ჩვევით innerHTML-ის გამოყენება მაშინ, როცა უბრალო ტექსტი სრულიად საკმარისია.']
    },
    'sub.classAdd': {
        label: ['add class', 'კლასის დამატება'], category: ['DOM', 'DOM'], color: '',
        short: ['Style through CSS', 'სტილი CSS-ით'],
        long: ['Add a class and let the stylesheet describe the look. States like is-loading or is-empty belong in CSS, not in JavaScript strings.',
               'დაამატე კლასი და იერსახის აღწერა სტილების ფაილს მიანდე. მდგომარეობები, როგორიცაა is-loading ან is-empty, CSS-ს ეკუთვნის და არა JavaScript-ის სტრიქონებს.'],
        file: 'render.js',
        code: 'li.classList.<span class="k">add</span>(p.inStock ? <span class="s">\'in\'</span> : <span class="s">\'out\'</span>);',
        mistake: ['Writing style.color from JavaScript and then fighting your own stylesheet.',
                  'style.color-ის JavaScript-იდან ჩაწერა და მერე საკუთარ სტილებთან ბრძოლა.']
    },
    'sub.preventDefault': {
        label: ['preventDefault', 'preventDefault'], category: ['Events', 'ივენთები'], color: 'c-warning',
        short: ['Stop the browser default', 'აჩერებს ბრაუზერის ნაგულისხმევს'],
        long: ['Forms reload the page, links navigate away. preventDefault() tells the browser you are handling this yourself in JavaScript.',
               'ფორმა გვერდს გადატვირთავს, ბმული სხვაგან გადაგიყვანს. preventDefault() ეუბნება ბრაუზერს, რომ ამას შენ თვითონ ამუშავებ JavaScript-ით.'],
        file: 'handlers.js',
        code: 'e.<span class="k">preventDefault</span>();',
        mistake: ['Calling it on every event without thinking. Sometimes the default behaviour is exactly what the user wants.',
                  'მისი გამოძახება ყოველ ივენთზე დაუფიქრებლად. ზოგჯერ ნაგულისხმევი ქცევა სწორედ ისაა, რაც მომხმარებელს უნდა.']
    },
    'sub.formData': {
        label: ['FormData', 'FormData'], category: ['Events', 'ივენთები'], color: '',
        short: ['Read all fields at once', 'კითხულობს ყველა ველს ერთად'],
        long: ['new FormData(form) collects every named field. Object.fromEntries turns it into a plain object ready to be stringified and sent.',
               'new FormData(form) აგროვებს ყველა დასახელებულ ველს. Object.fromEntries მას აქცევს ჩვეულებრივ ობიექტად, რომელიც მზადაა სტრიქონად ქცევისა და გაგზავნისთვის.'],
        file: 'handlers.js',
        code: '<span class="k">const</span> values = <span class="k">Object</span>.<span class="k">fromEntries</span>(<span class="k">new</span> <span class="k">FormData</span>(form));',
        mistake: ['Forgetting the name attribute on an input. FormData only sees named fields.',
                  'ინფუთზე name ატრიბუტის დავიწყება. FormData მხოლოდ დასახელებულ ველებს ხედავს.']
    }
};

// ============================================================
// SAMPLE DATA — the values that actually travel through a flow
// Lesson levels use the shop products. Every real-world scenario
// brings its own dataset (weather, cart, orders...) so the Data tab,
// the generated code and the browser preview speak its language.
// ============================================================
const PRODUCTS = [
    { id: 1, name: 'Laptop',     price: 1200, inStock: true  },
    { id: 2, name: 'USB Mouse',  price: 25,   inStock: false },
    { id: 3, name: 'Keyboard',   price: 80,   inStock: true  },
    { id: 4, name: 'Monitor',    price: 320,  inStock: true  },
    { id: 5, name: 'Headphones', price: 90,   inStock: false }
];
const SEARCH_RESULTS = [
    { id: 11, name: 'Laptop Pro 14', price: 1599, inStock: true },
    { id: 12, name: 'Laptop Stand',  price: 45,   inStock: true }
];
const NEW_PRODUCT = { id: 6, name: 'Webcam', price: 60, inStock: true };

// Each dataset names its three working fields:
//   f.name — the label, f.num — the number, f.ok — the yes/no flag.
// pre/suf format the number ($1200, 24°C, 4 min read).
const DATASETS = {
    products: {
        var: 'products', it: 'p', file: './data.js', storageKey: 'products', click: '#refresh',
        f: { name: 'name', num: 'price', ok: 'inStock' }, pre: '$', suf: '', okVar: 'available',
        title: ['Our Products', 'ჩვენი პროდუქცია'],
        okLabel: ['In stock', 'მარაგშია'], noLabel: ['Out of stock', 'არ არის მარაგში'],
        page: 'https://shop.local/products', api: 'https://shop.local/api/products',
        query: 'lap', rows: PRODUCTS, stored: PRODUCTS.slice(0, 3), search: SEARCH_RESULTS,
        add: NEW_PRODUCT, edit: { price: 999 }
    },
    weather: {
        var: 'cities', it: 'c', file: './weather.js', storageKey: 'cities', click: '#refresh',
        f: { name: 'city', num: 'temp', ok: 'sunny' }, pre: '', suf: '°C', okVar: 'sunnyCities',
        title: ['Weather right now', 'ამინდი ახლა'],
        okLabel: ['Sunny', 'მზიანი'], noLabel: ['Cloudy', 'მოღრუბლული'],
        page: 'https://news.local/', api: 'https://api.weather.local/v1/current',
        query: 'bat',
        rows: [
            { id: 1, city: 'Tbilisi', temp: 24, sunny: true },
            { id: 2, city: 'Batumi',  temp: 21, sunny: false },
            { id: 3, city: 'Kutaisi', temp: 26, sunny: true },
            { id: 4, city: 'Gudauri', temp: 9,  sunny: false },
            { id: 5, city: 'Telavi',  temp: 23, sunny: true }
        ],
        add: { id: 6, city: 'Mestia', temp: 12, sunny: true },
        banner: ['Weather widget rendered from the API response.', 'ამინდის ვიჯეტი დახატულია API-ს პასუხიდან.']
    },
    cart: {
        var: 'cart', it: 'item', file: './cart.js', storageKey: 'cart', click: '#checkout',
        f: { name: 'title', num: 'price', ok: 'inStock' }, pre: '$', suf: '', okVar: 'shippable',
        title: ['Your cart', 'შენი კალათა'],
        okLabel: ['Ready to ship', 'გასაგზავნად მზადაა'], noLabel: ['Back-ordered', 'მოლოდინშია'],
        page: 'https://shop.local/cart', api: 'https://shop.local/api/cart',
        query: 'sock',
        rows: [
            { id: 1, title: 'Running shoes',   price: 120, inStock: true },
            { id: 2, title: 'Sports socks',    price: 12,  inStock: true },
            { id: 3, title: 'Water bottle',    price: 18,  inStock: false },
            { id: 4, title: 'Fitness tracker', price: 95,  inStock: true }
        ],
        add: { id: 5, title: 'Yoga mat', price: 35, inStock: true },
        banner: ['Cart restored from localStorage — the order total is in the console.', 'კალათა აღდგა localStorage-იდან — შეკვეთის ჯამი კონსოლშია.']
    },
    movies: {
        var: 'movies', it: 'm', file: './movies.js', storageKey: 'movies', click: '#search-btn',
        f: { name: 'title', num: 'rating', ok: 'streaming' }, pre: '★ ', suf: '', okVar: 'watchable',
        title: ['Search results', 'ძიების შედეგები'],
        okLabel: ['Streaming now', 'ახლა ხელმისაწვდომია'], noLabel: ['Coming soon', 'მალე'],
        page: 'https://movies.local/search?q=star', api: 'https://api.movies.local/search',
        query: 'star',
        rows: [
            { id: 1, title: 'Star Wars',      rating: 8.6, streaming: true },
            { id: 2, title: 'Interstellar',   rating: 8.7, streaming: true },
            { id: 3, title: 'A Star Is Born', rating: 7.6, streaming: false },
            { id: 4, title: 'The Matrix',     rating: 8.7, streaming: true },
            { id: 5, title: 'Stardust',       rating: 7.6, streaming: true }
        ],
        search: [
            { id: 1, title: 'Star Wars',      rating: 8.6, streaming: true },
            { id: 3, title: 'A Star Is Born', rating: 7.6, streaming: false },
            { id: 5, title: 'Stardust',       rating: 7.6, streaming: true }
        ],
        add: { id: 6, title: 'Star Trek', rating: 7.9, streaming: true },
        banner: ['Results for "star" — only the last keystroke reached the server.', 'შედეგები „star“-ისთვის — სერვერამდე მხოლოდ ბოლო აკრეფამ მიაღწია.']
    },
    news: {
        var: 'articles', it: 'a', file: './news.js', storageKey: 'articles', click: '#reload',
        f: { name: 'headline', num: 'readMin', ok: 'published' }, pre: '', suf: ' min read', okVar: 'visible',
        title: ['Latest news', 'ბოლო სიახლეები'],
        okLabel: ['Published', 'გამოქვეყნებული'], noLabel: ['Draft', 'მონახაზი'],
        page: 'https://news.local/', api: 'https://api.news.local/articles',
        query: 'metro',
        rows: [
            { id: 1, headline: 'Metro adds night trains on weekends',  readMin: 4,  published: true },
            { id: 2, headline: 'New bike lanes open downtown',          readMin: 6,  published: true },
            { id: 3, headline: 'DRAFT: the city budget explained',      readMin: 12, published: false },
            { id: 4, headline: 'Local startups raise record funding',   readMin: 3,  published: true },
            { id: 5, headline: 'Grape harvest starts early this year',  readMin: 5,  published: true }
        ],
        add: { id: 6, headline: 'Old town square reopens', readMin: 2, published: true },
        banner: ['Drafts hidden — only published articles reached the page.', 'მონახაზები დამალულია — გვერდზე მხოლოდ გამოქვეყნებული სტატიები მოხვდა.']
    },
    todos: {
        var: 'todos', it: 't', file: './todos.js', storageKey: 'todos', click: '#add-task',
        f: { name: 'text', num: 'minutes', ok: 'done' }, pre: '', suf: ' min', okVar: 'finished',
        title: ['My to-do list', 'ჩემი საქმეები'],
        okLabel: ['Done', 'შესრულებულია'], noLabel: ['To do', 'გასაკეთებელია'],
        page: 'https://todo.local/', api: 'https://api.todo.local/todos',
        query: 'call',
        rows: [
            { id: 1, text: 'Buy groceries',      minutes: 30, done: false },
            { id: 2, text: 'Finish JS homework', minutes: 90, done: false },
            { id: 3, text: 'Call grandma',       minutes: 15, done: true }
        ],
        add: { id: 4, text: 'Book a dentist appointment', minutes: 10, done: false },
        banner: ['New task added, saved to localStorage and rendered.', 'ახალი საქმე დაემატა, შეინახა localStorage-ში და დაიხატა.']
    },
    login: {
        var: 'session', it: 's', file: './auth.js', storageKey: 'session', click: '#sign-in',
        f: { name: 'name', num: 'id', ok: 'verified' }, pre: '#', suf: '', okVar: 'verified',
        title: ['Welcome back', 'კეთილი იყოს შენი დაბრუნება'],
        okLabel: ['Signed in', 'შესულია'], noLabel: ['Signed out', 'გამოსულია'],
        page: 'https://learn.local/login', api: 'https://api.learn.local/auth/login',
        query: 'nino',
        rows: [{ id: 7, name: 'Nino', verified: true }],
        add: { email: 'nino@example.com', password: '********' },
        created: { token: 'eyJhbGciOiJIUzI1NiJ9.demo-token', user: { id: 7, name: 'Nino' }, expiresIn: 3600 },
        banner: ['Signed in — the session token is saved in localStorage.', 'შესვლა შესრულდა — სესიის ტოკენი შენახულია localStorage-ში.']
    },
    orders: {
        var: 'orders', it: 'o', file: './orders.js', storageKey: 'orders', click: '#refresh',
        f: { name: 'customer', num: 'total', ok: 'paid' }, pre: '$', suf: '', okVar: 'paidOrders', sortDesc: true,
        title: ['Paid orders', 'გადახდილი შეკვეთები'],
        okLabel: ['Paid', 'გადახდილია'], noLabel: ['Pending', 'მოლოდინში'],
        page: 'https://admin.shop.local/dashboard', api: 'https://api.shop.local/v2/orders',
        query: 'ana',
        rows: [
            { id: 101, customer: 'Giorgi B.', total: 240, paid: true },
            { id: 102, customer: 'Ana K.',    total: 75,  paid: false },
            { id: 103, customer: 'Luka M.',   total: 510, paid: true },
            { id: 104, customer: 'Mariam T.', total: 130, paid: true },
            { id: 105, customer: 'Saba D.',   total: 60,  paid: false }
        ],
        add: { id: 106, customer: 'Nino R.', total: 99, paid: true },
        banner: ['Revenue KPI is in the console, paid orders are in the table.', 'შემოსავლის KPI კონსოლშია, გადახდილი შეკვეთები — ცხრილში.']
    },
    messages: {
        var: 'messages', it: 'm', file: './inbox.js', storageKey: 'inbox', click: '#bell',
        f: { name: 'from', num: 'minutesAgo', ok: 'unread' }, pre: '', suf: ' min ago', okVar: 'unread',
        toggle: ['#bell', 'has-unread', '.length > 0'],
        title: ['Unread messages', 'წაუკითხავი შეტყობინებები'],
        okLabel: ['New', 'ახალი'], noLabel: ['Read', 'წაკითხული'],
        page: 'https://chat.local/', api: 'https://api.chat.local/inbox',
        query: 'team',
        rows: [
            { id: 1, from: 'Team chat',     minutesAgo: 2,  unread: true },
            { id: 2, from: 'Nika',          minutesAgo: 15, unread: false },
            { id: 3, from: 'Design review', minutesAgo: 7,  unread: true },
            { id: 4, from: 'Mom',           minutesAgo: 31, unread: true },
            { id: 5, from: 'Newsletter',    minutesAgo: 58, unread: false }
        ],
        add: { id: 6, from: 'Teacher', minutesAgo: 0, unread: true },
        banner: ['Badge lit — unread messages listed newest first.', 'ნიშნული აინთო — წაუკითხავები ჩამოწერილია, უახლესი პირველია.']
    },
    profile: {
        var: 'profile', it: 'u', file: './profile.js', storageKey: 'profile', click: '#save-profile',
        f: { name: 'name', num: 'followers', ok: 'verified' }, pre: '', suf: ' followers', okVar: 'verified',
        title: ['Profile', 'პროფილი'],
        okLabel: ['Verified', 'ვერიფიცირებული'], noLabel: ['Not verified', 'ვერიფიცირებული არ არის'],
        page: 'https://social.local/settings/profile', api: 'https://api.social.local/users/7',
        query: 'nino',
        rows: [{ id: 7, name: 'Nino Beridze', followers: 1280, verified: true, bio: 'Frontend student' }],
        add: { id: 8, name: 'Luka Gelashvili', followers: 310, verified: false, bio: 'Designer' },
        edit: { bio: 'Frontend developer in training @ IT Step' },
        banner: ['Saved with PUT — the card was re-rendered from the server answer.', 'შენახულია PUT-ით — ბარათი სერვერის პასუხიდან გადაიხატა.']
    },
    menu: {
        var: 'menu', it: 'd', file: './menu.js', storageKey: 'menu', click: '#menu-tab',
        f: { name: 'dish', num: 'price', ok: 'available' }, pre: '', suf: ' ₾', okVar: 'onSale',
        title: ['Menu', 'მენიუ'],
        okLabel: ['Available', 'ხელმისაწვდომია'], noLabel: ['Sold out', 'გაყიდულია'],
        page: 'https://food.local/restaurant/42', api: 'https://api.food.local/restaurants/42/menu',
        query: 'khach',
        rows: [
            { id: 1, dish: 'Khachapuri Adjaruli',    price: 18, available: true },
            { id: 2, dish: 'Khinkali (10 pcs)',      price: 15, available: true },
            { id: 3, dish: 'Lobiani',                price: 9,  available: false },
            { id: 4, dish: 'Badrijani with walnuts', price: 12, available: true },
            { id: 5, dish: 'Churchkhela',            price: 5,  available: false }
        ],
        add: { id: 6, dish: 'Mtsvadi', price: 22, available: true },
        banner: ['Menu built from real DOM nodes — no innerHTML involved.', 'მენიუ აწყობილია ნამდვილი DOM კვანძებით — innerHTML-ის გარეშე.']
    },
    // ---------- the products behind the second set of real-world schemas ----------
    comments: {
        var: 'comments', it: 'c', file: './comments.js', storageKey: 'comments', click: '#load-comments',
        f: { name: 'text', num: 'likes', ok: 'pinned' }, pre: '♥ ', suf: '', okVar: 'pinnedComments', sortDesc: true,
        title: ['Comments · top first', 'კომენტარები · ჯერ საუკეთესო'],
        okLabel: ['Pinned', 'მიმაგრებული'], noLabel: ['Comment', 'კომენტარი'],
        page: 'https://video.local/watch?v=js-in-100s', api: 'https://api.video.local/videos/42/comments',
        query: 'async',
        rows: [
            { id: 1, text: 'Finally understood async/await',              likes: 1840, pinned: false },
            { id: 2, text: 'The event loop part blew my mind',            likes: 932,  pinned: false },
            { id: 3, text: 'Thanks for watching! Code is in the description', likes: 410, pinned: true },
            { id: 4, text: 'Can you do one on closures next?',            likes: 2210, pinned: false },
            { id: 5, text: '00:42 is the best explanation of promises',   likes: 675,  pinned: false }
        ],
        add: { id: 6, text: 'Great video!', likes: 0, pinned: false },
        banner: ['Top comments first: the list is sorted by likes before it is drawn.', 'ჯერ საუკეთესო კომენტარები: სია დახატვამდე ლაიქებით ლაგდება.']
    },
    tracks: {
        var: 'tracks', it: 't', file: './tracks.js', storageKey: 'playlist', click: '#play',
        f: { name: 'track', num: 'minutes', ok: 'liked' }, pre: '', suf: ' min', okVar: 'likedTracks',
        title: ['Playlist · Focus coding', 'პლეილისტი · Focus coding'],
        okLabel: ['Liked', 'მოწონებული'], noLabel: ['Not liked', 'არ არის მოწონებული'],
        page: 'https://music.local/playlist/focus', api: 'https://api.music.local/v1/playlists/focus/tracks',
        query: 'lofi',
        rows: [
            { id: 1, track: 'Lo-fi Morning',  minutes: 3.2, liked: true },
            { id: 2, track: 'Deep Work',      minutes: 4.1, liked: false },
            { id: 3, track: 'Coffee & Code',  minutes: 2.8, liked: true },
            { id: 4, track: 'Night Commit',   minutes: 3.6, liked: true },
            { id: 5, track: 'Merge Conflict', minutes: 5.0, liked: false }
        ],
        add: { id: 6, track: 'Hotfix', minutes: 2.4, liked: false },
        banner: ['The tracks are listed and the playlist length comes from the same response.', 'ტრეკები სიაშია, პლეილისტის ხანგრძლივობა კი იმავე პასუხიდან ითვლება.']
    },
    watching: {
        var: 'watching', it: 's', file: './watching.js', storageKey: 'continueWatching', click: '#row-continue',
        f: { name: 'show', num: 'progress', ok: 'unfinished' }, pre: '', suf: '%', okVar: 'toContinue', sortDesc: true,
        title: ['Continue watching', 'ყურების გაგრძელება'],
        okLabel: ['Resume', 'გაგრძელება'], noLabel: ['Finished', 'დასრულებული'],
        page: 'https://stream.local/browse', api: 'https://api.stream.local/profiles/1/progress',
        query: 'dark',
        rows: [
            { id: 1, show: 'Dark · S1 E4',            progress: 62,  unfinished: true },
            { id: 2, show: 'The Crown · S2 E1',       progress: 100, unfinished: false },
            { id: 3, show: 'Arcane · S1 E7',          progress: 35,  unfinished: true },
            { id: 4, show: 'Stranger Things · S4 E2', progress: 88,  unfinished: true },
            { id: 5, show: 'Wednesday · S1 E8',       progress: 100, unfinished: false }
        ],
        add: { id: 6, show: 'Squid Game · S2 E1', progress: 5, unfinished: true },
        banner: ['Read from localStorage: this row needed no request at all.', 'წაკითხულია localStorage-დან: ამ რიგს მოთხოვნა საერთოდ არ დასჭირდა.']
    },
    suggest: {
        var: 'suggestions', it: 's', file: './suggestions.js', storageKey: 'recentSearches', click: '#search',
        f: { name: 'text', num: 'results', ok: 'trending' }, pre: '', suf: 'K results', okVar: 'trending',
        title: ['Suggestions for "javasc"', 'შეთავაზებები „javasc“-ისთვის'],
        okLabel: ['Trending', 'პოპულარული'], noLabel: ['Suggestion', 'შეთავაზება'],
        page: 'https://search.local/?q=javasc', api: 'https://api.search.local/complete',
        query: 'javasc',
        rows: [
            { id: 1, text: 'javascript',                     results: 2240, trending: true },
            { id: 2, text: 'javascript tutorial',            results: 610,  trending: true },
            { id: 3, text: 'javascript array methods',       results: 95,   trending: false },
            { id: 4, text: 'javascript interview questions', results: 120,  trending: false },
            { id: 5, text: 'javascript vs typescript',       results: 88,   trending: true }
        ],
        add: { id: 6, text: 'javascript event loop', results: 41, trending: false },
        banner: ['One request for the whole word: the earlier keystrokes were cancelled.', 'ერთი მოთხოვნა მთელი სიტყვისთვის: წინა კლავიშების მოთხოვნები გაუქმდა.']
    },
    drivers: {
        var: 'drivers', it: 'd', file: './drivers.js', storageKey: 'lastRide', click: '#order-ride',
        f: { name: 'driver', num: 'eta', ok: 'free' }, pre: '', suf: ' min', okVar: 'freeDrivers',
        title: ['Drivers nearby', 'მძღოლები ახლოს'],
        okLabel: ['Free', 'თავისუფალი'], noLabel: ['On a ride', 'მგზავრით'],
        page: 'https://ride.local/order', api: 'https://api.ride.local/drivers/nearby?lat=41.69&lng=44.80',
        query: 'prius',
        rows: [
            { id: 1, driver: 'Giorgi · Toyota Prius',  eta: 4, free: true },
            { id: 2, driver: 'Nino · Hyundai Elantra', eta: 2, free: false },
            { id: 3, driver: 'Levan · Toyota Camry',   eta: 7, free: true },
            { id: 4, driver: 'Mariam · Kia Optima',    eta: 3, free: true },
            { id: 5, driver: 'Dato · Ford Fusion',     eta: 9, free: false }
        ],
        add: { id: 6, driver: 'Ana · Tesla Model 3', eta: 5, free: true },
        banner: ['Refreshed every few seconds: free drivers only, the nearest first.', 'ახლდება ყოველ რამდენიმე წამში: მხოლოდ თავისუფალი მძღოლები, ჯერ უახლოესი.']
    },
    stays: {
        var: 'stays', it: 's', file: './stays.js', storageKey: 'wishlist', click: '#apply-filters',
        f: { name: 'stay', num: 'price', ok: 'available' }, pre: '$', suf: ' / night', okVar: 'availableStays',
        title: ['Stays in Tbilisi', 'ბინები თბილისში'],
        okLabel: ['Available', 'თავისუფალი'], noLabel: ['Booked', 'დაჯავშნილი'],
        page: 'https://stays.local/s/tbilisi', api: 'https://api.stays.local/v2/search?city=tbilisi',
        query: 'old town',
        rows: [
            { id: 1, stay: 'Old Town loft with a balcony', price: 64, available: true },
            { id: 2, stay: 'Sololaki studio',              price: 38, available: true },
            { id: 3, stay: 'Vake apartment with a view',   price: 92, available: false },
            { id: 4, stay: 'Mtatsminda guest house',       price: 45, available: true },
            { id: 5, stay: 'Rustaveli Avenue flat',        price: 71, available: false }
        ],
        add: { id: 6, stay: 'Vera garden room', price: 52, available: true },
        banner: ['Only free stays, the cheapest first: the same list the map pins use.', 'მხოლოდ თავისუფალი ბინები, ჯერ ყველაზე იაფი: იგივე სია, რასაც რუკის ნიშნულები იყენებს.']
    },
    repos: {
        var: 'repos', it: 'r', file: './repos.js', storageKey: 'starred', click: '#star-btn',
        f: { name: 'repo', num: 'stars', ok: 'starred' }, pre: '★ ', suf: '', okVar: 'starredRepos',
        title: ['Repository', 'რეპოზიტორია'],
        okLabel: ['Starred', 'ვარსკვლავი დასმულია'], noLabel: ['Star', 'ვარსკვლავის დასმა'],
        page: 'https://code.local/vercel/next.js', api: 'https://api.code.local/user/starred/vercel/next.js',
        query: 'next',
        rows: [
            { id: 1, repo: 'vercel/next.js',   stars: 131000, starred: false },
            { id: 2, repo: 'facebook/react',   stars: 236000, starred: true },
            { id: 3, repo: 'angular/angular',  stars: 97000,  starred: false },
            { id: 4, repo: 'microsoft/vscode', stars: 170000, starred: true },
            { id: 5, repo: 'denoland/deno',    stars: 100000, starred: false }
        ],
        edit: { stars: 131001, starred: true },
        add: { id: 6, repo: 'withastro/astro', stars: 50000, starred: true },
        banner: ['PUT with your token: the star is saved on the server, then the page shows its answer.', 'PUT შენი ტოკენით: ვარსკვლავი სერვერზე ინახება, შემდეგ გვერდი მის პასუხს აჩვენებს.']
    },
    posts: {
        var: 'posts', it: 'p', file: './posts.js', storageKey: 'likedPosts', click: '.feed',
        f: { name: 'caption', num: 'likes', ok: 'liked' }, pre: '♥ ', suf: '', okVar: 'likedPosts',
        title: ['Feed', 'ფიდი'],
        okLabel: ['Liked', 'მოწონებული'], noLabel: ['Like', 'მოწონება'],
        page: 'https://photos.local/', api: 'https://api.photos.local/v1/posts/7/likes',
        query: 'sunset',
        rows: [
            { id: 1, caption: 'Sunset over Narikala',      likes: 1204, liked: false },
            { id: 2, caption: 'Khachapuri o\'clock',       likes: 880,  liked: true },
            { id: 3, caption: 'First day at the bootcamp', likes: 342,  liked: false },
            { id: 4, caption: 'Kazbegi in the clouds',     likes: 2310, liked: true },
            { id: 5, caption: 'My desk setup',             likes: 157,  liked: false }
        ],
        add: { id: 7, caption: 'Sunset over Narikala', likes: 1205, liked: true },
        banner: ['One listener on the feed handles the heart of every post.', 'ერთი listener ფიდზე ყველა პოსტის გულს ამუშავებს.']
    },
    tracking: {
        var: 'steps', it: 's', file: './order.js', storageKey: 'activeOrder', click: '#track',
        f: { name: 'step', num: 'minute', ok: 'done' }, pre: '+', suf: ' min', okVar: 'doneSteps',
        title: ['Order #5521 is on its way', 'შეკვეთა #5521 გზაშია'],
        okLabel: ['Done', 'შესრულდა'], noLabel: ['Waiting', 'მოლოდინში'],
        page: 'https://delivery.local/orders/5521', api: 'https://api.delivery.local/orders/5521/status',
        query: '5521',
        rows: [
            { id: 1, step: 'Order received',        minute: 0,  done: true },
            { id: 2, step: 'Restaurant is cooking', minute: 4,  done: true },
            { id: 3, step: 'Courier picked it up',  minute: 18, done: true },
            { id: 4, step: 'Courier is 1 km away',  minute: 24, done: false },
            { id: 5, step: 'Delivered',             minute: 30, done: false }
        ],
        add: { id: 6, step: 'Rate your courier', minute: 31, done: false },
        banner: ['Checked every few seconds: the status moves without a reload.', 'მოწმდება ყოველ რამდენიმე წამში: სტატუსი გადატვირთვის გარეშე იცვლება.']
    },
    lessons: {
        var: 'lessons', it: 'l', file: './lessons.js', storageKey: 'xpHistory', click: '#finish-lesson',
        f: { name: 'lesson', num: 'xp', ok: 'perfect' }, pre: '', suf: ' XP', okVar: 'perfectLessons',
        title: ['This week', 'ეს კვირა'],
        okLabel: ['Perfect', 'უშეცდომო'], noLabel: ['Done', 'დასრულებული'],
        page: 'https://learn.local/learn', api: 'https://api.learn.local/users/me/xp',
        query: 'travel',
        rows: [
            { id: 1, lesson: 'Basics 1',   xp: 10, perfect: true },
            { id: 2, lesson: 'Basics 2',   xp: 15, perfect: false },
            { id: 3, lesson: 'Food',       xp: 12, perfect: true },
            { id: 4, lesson: 'Travel',     xp: 20, perfect: false },
            { id: 5, lesson: 'Past tense', xp: 18, perfect: true }
        ],
        stored: [
            { id: 1, lesson: 'Basics 1', xp: 10, perfect: true },
            { id: 2, lesson: 'Basics 2', xp: 15, perfect: false },
            { id: 3, lesson: 'Food',     xp: 12, perfect: true }
        ],
        add: { id: 4, lesson: 'Daily challenge', xp: 30, perfect: true },
        banner: ['Today\'s lesson was added to a copy of the history and saved back.', 'დღევანდელი გაკვეთილი ისტორიის ასლს დაემატა და უკან შეინახა.']
    }
};

// The dataset of whatever is on the canvas right now.
const DS = () => DATASETS[state.dataset] || DATASETS.products;
const nameOf = (p) => (p == null ? '?' : (p[DS().f.name] ?? p.title ?? p.name ?? '?'));
const numOf  = (p) => (p == null ? undefined : (p[DS().f.num] ?? p.price));
const okOf   = (p) => !!(p && p[DS().f.ok]);
function fmtNum(v) {
    if (typeof v !== 'number') return v == null ? '' : String(v);
    const d = DS();
    return d.pre + v + d.suf;
}
// A value written as JavaScript source: { id: 1, city: 'Tbilisi', temp: 24 }
function jsLiteral(v) {
    if (Array.isArray(v)) return '[' + v.map(jsLiteral).join(', ') + ']';
    if (v && typeof v === 'object') return '{ ' + Object.entries(v).map(([k, x]) => k + ': ' + jsLiteral(x)).join(', ') + ' }';
    if (typeof v === 'string') return '\'' + v.replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + '\'';
    return String(v);
}
// Template-literal source for a formatted number: $${p.price} or ${c.temp}°C
function numExpr(it) {
    const d = DS();
    return d.pre + '${' + it + '.' + d.f.num + '}' + d.suf;
}
// The one line of JavaScript a block stands for (some depend on the dataset).
function opOf(type) {
    const s = SIM[type];
    if (!s || !s.op) return '';
    return typeof s.op === 'function' ? s.op() : s.op;
}

const clone = (v) => (typeof structuredClone === 'function' ? structuredClone(v) : JSON.parse(JSON.stringify(v)));

// Value wrappers — they keep the trace honest about WHAT a value is,
// not just what is inside it (a Response is not an array).
const mkPromise  = (of, of_label) => ({ __kind: 'promise', of, label: of_label || 'Response' });
const mkResponse = (url, status)  => ({ __kind: 'response', url, status: status || 200, ok: (status || 200) < 400 });
const mkOptions  = (o)            => ({ __kind: 'options', ...o });
const mkEvent    = (type, target) => ({ __kind: 'event', type, target });
const mkElement  = (selector)     => ({ __kind: 'element', selector });
const mkDom      = (selector, n)  => ({ __kind: 'dom', selector, nodes: n });
const kindOf = (v) => (v && v.__kind) || (Array.isArray(v) ? 'array' : v === null ? 'null' : typeof v);

// ============================================================
// SIMULATION + CODE GENERATION
// `op`   — the one line of JavaScript this block stands for
// `run`  — what really happens to the value (drives the Data tab)
// `gen`  — the source line(s) this block contributes (Code tab)
// ============================================================
function needArray(v, who) {
    if (Array.isArray(v)) return v;
    // A state object carries its list on .items — that is what state.items means.
    if (isPlainObject(v) && Array.isArray(v.items)) return v.items;
    throw new Error(who + ' needs an array, but received ' + describeKind(v));
}
function describeKind(v) {
    const k = kindOf(v);
    if (k === 'promise') return 'a Promise (did you forget await?)';
    if (k === 'response') return 'a Response (call res.json() first)';
    if (k === 'string') return 'a string (parse it with JSON.parse first)';
    if (k === 'undefined') return 'nothing at all';
    if (k === 'object' || k === 'array') return 'an ' + k;
    return 'a ' + k;
}

const SIM = {
    dataArray: {
        op: () => 'const ' + DS().var + ' = [...]',
        run: () => clone(DS().rows),
        gen: (c) => {
            const d = DS();
            const rows = d.rows.slice(0, 3);
            c.v = d.var;
            return ['const ' + d.var + ' = [']
                .concat(rows.map((r, i) => '  ' + jsLiteral(r) + (i < rows.length - 1 ? ',' : '')))
                .concat(['];']);
        }
    },
    apiEndpoint: {
        op: 'const API = \'...\'',
        run: (v, c) => c.api.url || DS().api,
        gen: (c) => { c.v = 'API'; c.url = 'API'; return ['const API = \'' + (c.api.url || DS().api) + '\';']; }
    },
    localStore: {
        op: () => 'localStorage.getItem(\'' + DS().storageKey + '\')',
        run: () => JSON.stringify(DS().stored || DS().rows),
        gen: (c) => { c.v = 'raw'; return ['const raw = localStorage.getItem(\'' + DS().storageKey + '\'); // a string, or null']; }
    },
    userInput: {
        op: 'input.value',
        run: () => DS().query,
        gen: (c) => { c.v = 'q'; return ['const q = document.querySelector(\'#search\').value.trim();']; }
    },

    apiKey: {
        op: 'headers = { Authorization: ... }',
        run: (v, c) => buildHeaders(c.api, true),
        gen: (c) => {
            c.headers = true;
            const a = c.api;
            if (a.scheme === 'bearer') return ['const API_KEY = \'' + maskKey(a.key) + '\';', 'const headers = { \'Authorization\': `Bearer ${API_KEY}`, \'Accept\': \'application/json\' };'];
            if (a.scheme === 'header') return ['const API_KEY = \'' + maskKey(a.key) + '\';', 'const headers = { \'' + (a.headerName || 'x-api-key') + '\': API_KEY, \'Accept\': \'application/json\' };'];
            if (a.scheme === 'query') { c.queryKey = true; return ['const API_KEY = \'' + maskKey(a.key) + '\';', 'const url = `${API}?' + (a.paramName || 'apikey') + '=${API_KEY}`;']; }
            return ['const headers = { \'Accept\': \'application/json\' };'];
        }
    },
    fetchCall: {
        op: 'fetch(url, options)',
        run: async (v, c) => {
            await loadPayload(c);
            return mkPromise(mkResponse(c.requestUrl, c.status));
        },
        gen: (c) => {
            const url = c.queryKey ? 'url' : (c.url || 'API');
            const args = [url];
            if (c.options) args.push(c.signal ? '{ ...options, signal }' : 'options');
            else if (c.headers || c.signal) args.push('{ ' + [c.headers && 'headers', c.signal && 'signal'].filter(Boolean).join(', ') + ' }');
            const call = 'fetch(' + args.join(', ') + ')';
            if (c.thenStyle) { c.skipFetchLine = true; c.v = 'data'; return []; }
            if (c.canAwait) { c.v = 'res'; return ['const res = await ' + call + ';']; }
            c.v = 'resPromise';
            return ['const resPromise = ' + call + '; // no await: this is a Promise, not data'];
        }
    },
    jsonParse: {
        op: 'await res.json()',
        run: (v, c) => {
            if (typeof v === 'string') return JSON.parse(v);
            const k = kindOf(v);
            if (k === 'promise' || k === 'response') {
                const d = DS();
                // A write returns what it wrote, not the whole collection.
                if (c.method === 'POST') return d.created ? clone(d.created) : { ...(c.sentBody || clone(d.add)), id: (d.add && d.add.id) || 6, created: true };
                if (c.method === 'PUT') return { ...(c.sentBody || clone(d.rows[0])), updated: true };
                if (c.method === 'DELETE') return { id: (d.rows[2] || d.rows[0]).id, deleted: true };
                return clone(c.payload);
            }
            throw new Error('res.json() needs a Response, but received ' + describeKind(v));
        },
        gen: (c) => {
            if (c.thenStyle) return [];
            if (c.v === 'raw') { c.v = DS().var; return ['const ' + c.v + ' = JSON.parse(raw ?? \'[]\');']; }
            c.v = 'data';
            return [(c.canAwait ? 'const data = await res.json();' : 'const data = await resPromise.then(r => r.json());')];
        }
    },
    httpGet:    { op: 'method: \'GET\'',    run: (v, c) => { c.method = 'GET'; return mkOptions({ method: 'GET', headers: buildHeaders(c.api, false) }); }, gen: (c) => { c.options = true; c.method = 'GET'; return ['const options = { method: \'GET\'' + (c.headers ? ', headers' : '') + ' };']; } },
    httpPost:   { op: 'method: \'POST\'',   run: (v, c) => { c.method = 'POST'; c.sentBody = isPlainObject(v) ? v : clone(DS().add); return mkOptions({ method: 'POST', headers: buildHeaders(c.api, true), body: JSON.stringify(c.sentBody) }); }, gen: (c) => { c.options = true; c.method = 'POST'; return ['const options = {', '  method: \'POST\',', '  headers' + (c.headers ? '' : ': { \'Content-Type\': \'application/json\' }') + ',', '  body: JSON.stringify(' + (c.v || 'payload') + ')', '};']; } },
    httpPut:    { op: 'method: \'PUT\'',    run: (v, c) => { c.method = 'PUT'; c.sentBody = isPlainObject(v) ? v : { ...clone(DS().rows[0]), ...(DS().edit || {}) }; return mkOptions({ method: 'PUT', headers: buildHeaders(c.api, true), body: JSON.stringify(c.sentBody) }); }, gen: (c) => { c.options = true; c.method = 'PUT'; c.url = '`${API}/${id}`'; return ['const options = {', '  method: \'PUT\',', '  headers' + (c.headers ? '' : ': { \'Content-Type\': \'application/json\' }') + ',', '  body: JSON.stringify(' + (c.v || 'updated') + ')', '};']; } },
    httpDelete: { op: 'method: \'DELETE\'', run: (v, c) => { c.method = 'DELETE'; return mkOptions({ method: 'DELETE', headers: buildHeaders(c.api, false) }); }, gen: (c) => { c.options = true; c.method = 'DELETE'; c.url = '`${API}/${id}`'; return ['const options = { method: \'DELETE\'' + (c.headers ? ', headers' : '') + ' };']; } },

    tryCatch: {
        op: 'try { ... } catch (err) { ... }',
        run: (v) => v,
        gen: (c) => { c.open.push(['} catch (err) {', '  console.error(err);', '  showError(err.message);', '}']); c.indentAfter = 1; return ['try {']; }
    },
    abortCtl: {
        op: 'new AbortController()',
        run: (v) => v,
        gen: (c) => { c.signal = true; return ['controller?.abort(); // cancel the previous request', 'controller = new AbortController();', 'const signal = controller.signal;']; }
    },

    asyncFn: {
        op: 'async function load() { ... }',
        run: (v) => v,
        gen: (c) => { c.open.push(['}', '', 'load();']); c.indentAfter = 1; return ['async function load() {']; }
    },
    awaitOp: {
        op: 'await promise',
        run: (v) => {
            if (v && v.__kind === 'promise') return v.of;
            throw new Error('await expects a Promise, but received ' + describeKind(v));
        },
        gen: () => []   // await shows up inline on the fetch / json lines above
    },
    promiseThen: {
        op: '.then(res => res.json())',
        run: (v, c) => {
            if (v && v.__kind === 'promise') return clone(c.payload);
            if (v && v.__kind === 'response') return clone(c.payload);
            throw new Error('.then() expects a Promise, but received ' + describeKind(v));
        },
        gen: (c) => {
            c.v = 'data';
            return ['fetch(' + (c.url || 'API') + (c.options ? ', options' : '') + ')',
                    '  .then(res => res.json())',
                    '  .then(data => {',
                    '    // ...the steps below happen in here',
                    '  })',
                    '  .catch(err => console.error(err));'];
        }
    },
    setTimeoutBlk: {
        op: 'setTimeout(fn, 300)',
        run: (v) => v,
        gen: (c) => { c.open.push(['}, 300);']); c.indentAfter = 1; return ['setTimeout(() => {']; }
    },
    debounceBlk: {
        op: 'debounce(fn, 300)',
        run: (v) => v,
        gen: (c) => { c.open.push(['}, 300);']); c.indentAfter = 1; return ['const onSearch = debounce(async (q) => {']; }
    },
    eventLoop: {
        op: 'sync → microtask → timer',
        run: (v, c) => { c.console.push('1 sync'); c.console.push('2 microtask'); c.console.push('3 timer'); return v; },
        gen: () => ['console.log(\'1 sync\');',
                    'Promise.resolve().then(() => console.log(\'2 microtask\'));',
                    'setTimeout(() => console.log(\'3 timer\'), 0);',
                    '// order: 1 sync → 2 microtask → 3 timer']
    },

    filterOp: {
        op: () => { const d = DS(); return '.filter(' + d.it + ' => ' + d.it + '.' + d.f.ok + ')'; },
        run: (v) => needArray(v, '.filter()').filter(okOf),
        gen: (c) => { const d = DS(); const from = c.v; c.v = d.okVar; return ['const ' + d.okVar + ' = ' + from + '.filter(' + d.it + ' => ' + d.it + '.' + d.f.ok + ');']; }
    },
    mapOp: {
        op: () => '.map(' + DS().it + ' => ({ ... }))',
        run: (v) => {
            const num = DS().f.num;
            return needArray(v, '.map()').map(p => ({ id: p.id, title: String(nameOf(p)).toUpperCase(), [num]: fmtNum(numOf(p)) }));
        },
        gen: (c) => {
            const d = DS(), it = d.it;
            const from = c.v;
            c.v = 'rows';
            c.mapped = true;
            return ['const rows = ' + from + '.map(' + it + ' => ({',
                    '  id: ' + it + '.id,',
                    '  title: ' + it + '.' + d.f.name + '.toUpperCase(),',
                    '  ' + d.f.num + ': `' + numExpr(it) + '`',
                    '}));'];
        }
    },
    sortOp: {
        op: () => { const d = DS(), n = d.f.num; return '.sort((a, b) => ' + (d.sortDesc ? 'b.' + n + ' - a.' + n : 'a.' + n + ' - b.' + n) + ')'; },
        run: (v) => {
            const dir = DS().sortDesc ? -1 : 1;
            return [...needArray(v, '.sort()')].sort((a, b) => dir * ((Number(numOf(a)) || 0) - (Number(numOf(b)) || 0)));
        },
        gen: (c) => {
            const d = DS(), n = d.f.num;
            const from = c.v;
            c.v = 'sorted';
            return ['const sorted = [...' + from + '].sort((a, b) => ' + (d.sortDesc ? 'b.' + n + ' - a.' + n : 'a.' + n + ' - b.' + n) + ');'];
        }
    },
    reduceOp: {
        op: () => { const d = DS(); return '.reduce((sum, ' + d.it + ') => sum + ' + d.it + '.' + d.f.num + ', 0)'; },
        run: (v) => Math.round(needArray(v, '.reduce()').reduce((s, p) => s + (Number(numOf(p)) || 0), 0) * 100) / 100,
        gen: (c) => { const d = DS(); const from = c.v; c.v = 'total'; return ['const total = ' + from + '.reduce((sum, ' + d.it + ') => sum + ' + d.it + '.' + d.f.num + ', 0);']; }
    },
    findOp: {
        op: () => { const d = DS(); return '.find(' + d.it + ' => ' + d.it + '.' + d.f.ok + ')'; },
        run: (v) => needArray(v, '.find()').find(okOf),
        gen: (c) => { const d = DS(); const from = c.v; c.v = 'found'; return ['const found = ' + from + '.find(' + d.it + ' => ' + d.it + '.' + d.f.ok + ');']; }
    },
    destructure: {
        op: () => { const d = DS(); return 'const { ' + d.f.name + ', ' + d.f.num + ' } = item'; },
        run: (v) => {
            const src = Array.isArray(v) ? v[0] : v;
            if (!isPlainObject(src)) throw new Error('destructuring needs an object, but received ' + describeKind(v));
            const f = DS().f;
            return { [f.name]: src[f.name] ?? src.title, [f.num]: src[f.num] };
        },
        gen: (c) => { const d = DS(); const from = c.v; c.v = 'first'; return ['const [first] = ' + from + ';', 'const { ' + d.f.name + ', ' + d.f.num + ' = 0 } = first;']; }
    },
    spreadOp: {
        op: '[...items, newItem]',
        run: (v) => [...needArray(v, 'spread'), clone(DS().add)],
        gen: (c) => { const from = c.v; c.v = 'next'; return ['const next = [...' + from + ', ' + (c.formVar || jsLiteral(DS().add)) + '];']; }
    },
    templateLit: {
        op: 'items.map(...).join(\'\')',
        run: (v, c) => {
            const arr = needArray(v, 'the template');
            c.renderArray = arr;
            return arr.map(p => '<li class="row"><b>' + nameOf(p) + '</b> — ' + fmtNum(numOf(p)) + '</li>').join('\n');
        },
        gen: (c) => {
            const d = DS(), it = d.it;
            const from = c.v;
            const label = c.mapped ? 'title' : d.f.name;
            const num = c.mapped ? '${' + it + '.' + d.f.num + '}' : numExpr(it);
            c.v = 'html';
            return ['const html = ' + from + '.map(' + it + ' => `',
                    '  <li class="row" data-id="${' + it + '.id}">',
                    '    <b>${' + it + '.' + label + '}</b> — ' + num,
                    '  </li>`).join(\'\');'];
        }
    },

    stateObj: {
        op: 'state = { items, loading, error }',
        run: (v) => ({ items: Array.isArray(v) ? v : [v], loading: false, error: null }),
        gen: (c) => { const from = c.v; c.v = 'state.items'; return ['const state = { items: ' + from + ', loading: false, error: null };']; }
    },
    closureBlk: {
        op: 'createStore(items)',
        run: (v) => v,
        gen: (c) => { const from = c.v; return ['const store = createStore(' + from + '); // items stay private inside']; }
    },
    saveLocal: {
        op: () => 'localStorage.setItem(\'' + DS().storageKey + '\', json)',
        run: (v) => JSON.stringify(Array.isArray(v) ? v : (v && v.items) || v),
        gen: (c) => { const from = c.v; return ['localStorage.setItem(\'' + DS().storageKey + '\', JSON.stringify(' + from + '));']; }
    },

    querySel: {
        op: 'document.querySelector(\'#list\')',
        run: (v, c) => { c.target = '#list'; return v; },
        gen: () => ['const list = document.querySelector(\'#list\');']
    },
    createEl: {
        op: 'document.createElement(\'li\')',
        run: (v, c) => {
            if (Array.isArray(v)) c.renderArray = v;
            else if (isPlainObject(v) && Array.isArray(v.items)) c.renderArray = v.items;
            return v;
        },
        gen: (c) => {
            const d = DS(), it = d.it;
            const from = c.v;
            const label = c.mapped ? 'title' : d.f.name;
            const num = c.mapped ? '${' + it + '.' + d.f.num + '}' : numExpr(it);
            return ['const nodes = ' + from + '.map(' + it + ' => {',
                    '  const li = document.createElement(\'li\');',
                    '  li.textContent = `${' + it + '.' + label + '} — ' + num + '`;',
                    '  li.dataset.id = ' + it + '.id;',
                    '  return li;',
                    '});'];
        }
    },
    appendChildBlk: {
        op: 'list.append(fragment)',
        run: (v) => v,
        gen: () => ['const frag = document.createDocumentFragment();', 'frag.append(...nodes);', 'list.append(frag); // one repaint, not one per row']
    },
    renderDom: {
        op: 'list.innerHTML = html',
        run: (v, c) => {
            if (typeof v !== 'string') throw new Error('innerHTML needs an HTML string, but received ' + describeKind(v));
            c.html = v;
            return mkDom(c.target || '#list', v.split('\n').filter(Boolean).length);
        },
        gen: (c) => { const from = c.v; c.v = 'DOM'; return ['document.querySelector(\'#list\').innerHTML = ' + from + ';']; }
    },
    eventListener: {
        op: 'btn.addEventListener(\'click\', fn)',
        run: () => mkEvent('click', DS().click || '#refresh'),
        gen: (c) => { c.open.push(['});']); c.indentAfter = 1; return ['document.querySelector(\'' + (DS().click || '#refresh') + '\').addEventListener(\'click\', async (e) => {']; }
    },
    delegation: {
        op: 'list.addEventListener(\'click\', fn)',
        run: () => mkEvent('click', '.row[data-id="' + (DS().rows[2] || DS().rows[0]).id + '"]'),
        gen: (c) => { c.open.push(['});']); c.indentAfter = 1; return ['list.addEventListener(\'click\', (e) => {', '  const row = e.target.closest(\'[data-id]\');', '  if (!row) return;', '  const id = Number(row.dataset.id);']; }
    },
    formSubmit: {
        op: 'form.addEventListener(\'submit\', fn)',
        run: () => clone(DS().add),
        gen: (c) => { c.open.push(['});']); c.indentAfter = 1; c.v = 'values'; c.formVar = 'values'; return ['form.addEventListener(\'submit\', async (e) => {', '  e.preventDefault();', '  const values = Object.fromEntries(new FormData(form));']; }
    },
    classToggle: {
        op: 'el.classList.toggle(\'is-empty\', ...)',
        run: (v) => v,
        gen: (c) => {
            const t = DS().toggle;
            if (t) return ['document.querySelector(\'' + t[0] + '\').classList.toggle(\'' + t[1] + '\', ' + (c.v || 'items') + t[2] + ');'];
            return ['list.classList.toggle(\'is-empty\', ' + (c.v || 'items') + '.length === 0);'];
        }
    },

    exportBlk: {
        op: () => 'export const ' + DS().var,
        run: (v) => v,
        gen: (c) => {
            const d = DS();
            const from = c.v;
            return ['// ---- ' + d.file.replace('./', '') + ' ----', from === d.var ? 'export { ' + d.var + ' };' : 'export const ' + d.var + ' = ' + from + ';'];
        }
    },
    importBlk: {
        op: () => 'import { ' + DS().var + ' } from \'' + DS().file + '\'',
        run: (v) => v,
        gen: (c) => { const d = DS(); c.v = d.var; return ['// ---- app.js ----', 'import { ' + d.var + ' } from \'' + d.file + '\';']; }
    },

    consoleLog: {
        op: 'console.log(value)',
        run: (v, c) => {
            c.console.push(v === undefined
                ? '// undefined — the block before this one passed nothing on'
                : formatValue(v, true));
            return v;
        },
        gen: (c) => ['console.log(\'' + (c.v || 'value') + ':\', ' + (c.v || 'value') + ');']
    },
    browser: {
        op: 'the browser paints the DOM',
        run: (v) => v,
        gen: () => ['// the browser paints the DOM — nothing left for you to write']
    }
};

function isPlainObject(v) {
    return !!v && typeof v === 'object' && !Array.isArray(v) && !v.__kind;
}
function maskKey(key) {
    if (!key) return 'YOUR_API_KEY';
    if (key.length <= 6) return key[0] + '***';
    return key.slice(0, 4) + '...' + key.slice(-2);
}
// Builds the headers a real request would carry, from the shared API config.
function buildHeaders(api, withContentType) {
    const h = { 'Accept': 'application/json' };
    if (withContentType) h['Content-Type'] = 'application/json';
    if (api.key && api.scheme === 'bearer') h['Authorization'] = 'Bearer ' + api.key;
    if (api.key && api.scheme === 'header') h[api.headerName || 'x-api-key'] = api.key;
    return h;
}
// The URL a real request would hit, including a query-parameter key.
function buildUrl(api) {
    let url = (api.url || '').trim();
    if (!url) return '';
    if (api.key && api.scheme === 'query') {
        const sep = url.includes('?') ? '&' : '?';
        url += sep + encodeURIComponent(api.paramName || 'apikey') + '=' + encodeURIComponent(api.key);
    }
    return url;
}
// Digs the array out of a wrapped response, e.g. { products: [...] }.
function pickArray(json, path) {
    let node = json;
    if (path) {
        for (const part of path.split('.').map(s => s.trim()).filter(Boolean)) {
            if (node == null) break;
            node = node[part];
        }
    }
    if (Array.isArray(node)) return node;
    if (Array.isArray(json)) return json;
    for (const key of ['products', 'items', 'data', 'results']) {
        if (json && Array.isArray(json[key])) return json[key];
    }
    return node;
}

// ============================================================
// LIBRARY GROUPS
// ============================================================
const LIBRARY_GROUPS = [
    { title: 'grpSource',    items: ['dataArray', 'apiEndpoint', 'localStore', 'userInput'] },
    { title: 'grpNetwork',   items: ['fetchCall', 'apiKey', 'jsonParse', 'httpGet', 'httpPost', 'httpPut', 'httpDelete', 'tryCatch', 'abortCtl'] },
    { title: 'grpAsync',     items: ['asyncFn', 'awaitOp', 'promiseThen', 'setTimeoutBlk', 'debounceBlk', 'eventLoop'] },
    { title: 'grpTransform', items: ['filterOp', 'mapOp', 'sortOp', 'reduceOp', 'findOp', 'destructure', 'spreadOp', 'templateLit'] },
    { title: 'grpState',     items: ['stateObj', 'closureBlk', 'saveLocal'] },
    { title: 'grpDom',       items: ['querySel', 'createEl', 'appendChildBlk', 'renderDom', 'eventListener', 'delegation', 'formSubmit', 'classToggle'] },
    { title: 'grpModule',    items: ['exportBlk', 'importBlk'] },
    { title: 'grpOutput',    items: ['consoleLog', 'browser'] }
];

// ============================================================
// SUB-CANVAS: what lives inside each block
// ============================================================
const SUB_TOOLS = {
    dataArray:      ['sub.loop', 'sub.arrow'],
    apiEndpoint:    ['sub.param', 'sub.return'],
    localStore:     ['sub.keyRead', 'sub.ifCheck'],
    userInput:      ['sub.formData', 'sub.ifCheck'],
    fetchCall:      ['sub.method', 'sub.headers', 'sub.bodyJson', 'sub.statusCheck'],
    apiKey:         ['sub.headers', 'sub.keyRead', 'sub.ifCheck'],
    jsonParse:      ['sub.statusCheck', 'sub.return', 'sub.throwErr'],
    httpGet:        ['sub.method', 'sub.headers'],
    httpPost:       ['sub.method', 'sub.headers', 'sub.bodyJson'],
    httpPut:        ['sub.method', 'sub.headers', 'sub.bodyJson'],
    httpDelete:     ['sub.method', 'sub.headers', 'sub.ifCheck'],
    tryCatch:       ['sub.tryBlock', 'sub.catchBlock', 'sub.statusCheck', 'sub.throwErr'],
    abortCtl:       ['sub.ifCheck', 'sub.catchBlock'],
    asyncFn:        ['sub.param', 'sub.return', 'sub.tryBlock', 'sub.ifCheck'],
    awaitOp:        ['sub.tryBlock', 'sub.catchBlock'],
    promiseThen:    ['sub.callback', 'sub.return', 'sub.catchBlock'],
    setTimeoutBlk:  ['sub.callback', 'sub.arrow'],
    debounceBlk:    ['sub.callback', 'sub.arrow', 'sub.ifCheck'],
    eventLoop:      ['sub.callback', 'sub.arrow'],
    filterOp:       ['sub.arrow', 'sub.callback', 'sub.ifCheck', 'sub.return'],
    mapOp:          ['sub.arrow', 'sub.callback', 'sub.return'],
    sortOp:         ['sub.arrow', 'sub.param', 'sub.return'],
    reduceOp:       ['sub.arrow', 'sub.param', 'sub.return'],
    findOp:         ['sub.arrow', 'sub.ifCheck', 'sub.return'],
    destructure:    ['sub.param', 'sub.return'],
    spreadOp:       ['sub.param', 'sub.return'],
    templateLit:    ['sub.loop', 'sub.arrow', 'sub.domText'],
    stateObj:       ['sub.stateGet', 'sub.stateSet'],
    closureBlk:     ['sub.param', 'sub.return', 'sub.arrow'],
    saveLocal:      ['sub.keyWrite', 'sub.ifCheck'],
    querySel:       ['sub.domCreate', 'sub.ifCheck'],
    createEl:       ['sub.domCreate', 'sub.domText', 'sub.classAdd'],
    appendChildBlk: ['sub.loop', 'sub.domCreate'],
    renderDom:      ['sub.domCreate', 'sub.domText', 'sub.classAdd'],
    eventListener:  ['sub.callback', 'sub.preventDefault', 'sub.stateSet'],
    delegation:     ['sub.ifCheck', 'sub.callback', 'sub.stateSet'],
    formSubmit:     ['sub.preventDefault', 'sub.formData', 'sub.ifCheck'],
    classToggle:    ['sub.classAdd', 'sub.ifCheck'],
    exportBlk:      ['sub.return', 'sub.param'],
    importBlk:      ['sub.param', 'sub.return'],
    consoleLog:     ['sub.param'],
    browser:        ['sub.domText', 'sub.classAdd']
};

// A representative arrangement shown the first time you dive into a block
const SUB_SEED = {
    fetchCall:  { nodes: [{type: 'sub.method', x: 200, y: 250}, {type: 'sub.headers', x: 500, y: 250}, {type: 'sub.statusCheck', x: 800, y: 250}], connections: [[0,1],[1,2]] },
    tryCatch:   { nodes: [{type: 'sub.statusCheck', x: 250, y: 250}], connections: [] },
    asyncFn:    { nodes: [{type: 'sub.param', x: 200, y: 240}, {type: 'sub.return', x: 560, y: 240}], connections: [[0,1]] },
    filterOp:   { nodes: [{type: 'sub.arrow', x: 200, y: 240}, {type: 'sub.ifCheck', x: 500, y: 240}, {type: 'sub.return', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    mapOp:      { nodes: [{type: 'sub.arrow', x: 200, y: 240}, {type: 'sub.return', x: 560, y: 240}], connections: [[0,1]] },
    formSubmit: { nodes: [{type: 'sub.preventDefault', x: 200, y: 240}, {type: 'sub.formData', x: 500, y: 240}, {type: 'sub.ifCheck', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    stateObj:   { nodes: [{type: 'sub.stateSet', x: 200, y: 240}, {type: 'sub.stateGet', x: 560, y: 240}], connections: [[0,1]] },
    renderDom:  { nodes: [{type: 'sub.domCreate', x: 200, y: 240}, {type: 'sub.domText', x: 500, y: 240}, {type: 'sub.classAdd', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    apiKey:     { nodes: [{type: 'sub.keyRead', x: 220, y: 240}, {type: 'sub.headers', x: 560, y: 240}], connections: [[0,1]] }
};

// ============================================================
// LEVELS
// ============================================================
const ADVANCED_FROM = 9;
const LEVELS = [
    {
        title:   ['Render an array', 'მასივის დახატვა'],
        mission: ['You have an array of products in your file. Turn it into HTML and put it on the page.',
                  'ფაილში პროდუქციის მასივი გაქვს. აქციე HTML-ად და გამოიტანე გვერდზე.'],
        hint:    ['Array of data → Template string → Render to DOM → Browser screen.',
                  'მონაცემთა მასივი → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერის ეკრანი.'],
        expected: ['dataArray', 'templateLit', 'renderDom', 'browser'],
        outcome: 'list'
    },
    {
        title:   ['Filter what you show', 'გაფილტრე ნაჩვენები'],
        mission: ['Two products are out of stock. Show only the ones a customer can actually buy.',
                  'ორი პროდუქტი მარაგში არ არის. აჩვენე მხოლოდ ის, რისი ყიდვაც შეიძლება.'],
        hint:    ['Insert .filter() between the array and the template string.',
                  'ჩასვი .filter() მასივსა და შაბლონურ სტრიქონს შორის.'],
        expected: ['dataArray', 'filterOp', 'templateLit', 'renderDom', 'browser'],
        outcome: 'inStock'
    },
    {
        title:   ['Reshape with .map()', 'გარდაქმნა .map()-ით'],
        mission: ['The raw objects are not the shape your UI wants. Give every item an upper-case title and a price with a currency sign.',
                  'ნედლი ობიექტები არ არის ის ფორმა, რაც ინტერფეისს სჭირდება. მიეცი თითოეულს დიდი ასოებით სათაური და ვალუტიანი ფასი.'],
        hint:    ['Array of data → .map() → Template string → Render to DOM → Browser screen.',
                  'მონაცემთა მასივი → .map() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['dataArray', 'mapOp', 'templateLit', 'renderDom', 'browser'],
        outcome: 'mapped'
    },
    {
        title:   ['Sort by price', 'დალაგება ფასით'],
        mission: ['Show the cheapest product first. Sort a copy so the original array stays untouched.',
                  'პირველი იყოს ყველაზე იაფი. დაალაგე ასლი, რომ ორიგინალი ხელუხლებელი დარჩეს.'],
        hint:    ['Array of data → .sort() → Template string → Render to DOM → Browser screen.',
                  'მონაცემთა მასივი → .sort() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['dataArray', 'sortOp', 'templateLit', 'renderDom', 'browser'],
        outcome: 'sorted'
    },
    {
        title:   ['Add it all up', 'შეკრიბე ყველაფერი'],
        mission: ['Calculate the total price of the basket and print it in the console. Notice that an array of five becomes a single number.',
                  'დათვალე კალათის ჯამური ფასი და დაბეჭდე კონსოლში. შეამჩნიე, რომ ხუთელემენტიანი მასივი ერთ რიცხვად იქცევა.'],
        hint:    ['Array of data → .reduce() → console.log.',
                  'მონაცემთა მასივი → .reduce() → console.log.'],
        expected: ['dataArray', 'reduceOp', 'consoleLog'],
        outcome: 'total'
    },
    {
        title:   ['Fetch from an API', 'მონაცემი API-დან'],
        mission: ['Stop hard-coding the data. Call a URL, open the response as JSON, and render whatever comes back.',
                  'შეწყვიტე მონაცემის ხელით ჩაწერა. გამოიძახე URL, გახსენი პასუხი JSON-ად და დახატე ის, რაც დაბრუნდა.'],
        hint:    ['API endpoint → fetch() → res.json() → Template string → Render to DOM → Browser screen. Set a real URL in the API block if you have one.',
                  'API მისამართი → fetch() → res.json() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი. თუ გაქვს, API ბლოკში ჩაწერე ნამდვილი URL.'],
        expected: ['apiEndpoint', 'fetchCall', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        outcome: 'fetched'
    },
    {
        title:   ['async / await', 'async / await'],
        mission: ['Wrap the request in an async function and await the promise, so the value you pass on is real data instead of a Promise.',
                  'შეახვიე მოთხოვნა async ფუნქციაში და დაელოდე Promise-ს, რომ შემდეგ გადაცემული მნიშვნელობა იყოს ნამდვილი მონაცემი და არა Promise.'],
        hint:    ['async function → API endpoint → fetch() → await → res.json() → Template string → Render to DOM → Browser screen.',
                  'async ფუნქცია → API მისამართი → fetch() → await → res.json() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['asyncFn', 'apiEndpoint', 'fetchCall', 'awaitOp', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        outcome: 'awaited'
    },
    {
        title:   ['Survive a failure', 'გადაიტანე შეცდომა'],
        mission: ['The server will go down one day. Wrap the request in try/catch, then dive into the try/catch block and add the try and catch halves inside it.',
                  'სერვერი ერთ დღეს ჩავარდება. შეახვიე მოთხოვნა try/catch-ში, შემდეგ შედი try/catch ბლოკში და შიგნით დაამატე try და catch ნაწილები.'],
        hint:    ['async function → try / catch → API endpoint → fetch() → await → res.json() → Template string → Render to DOM → Browser screen. Then dive into try / catch and add the try block and catch block.',
                  'async ფუნქცია → try / catch → API მისამართი → fetch() → await → res.json() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი. მერე შედი try / catch-ში და დაამატე try ბლოკი და catch ბლოკი.'],
        expected: ['asyncFn', 'tryCatch', 'apiEndpoint', 'fetchCall', 'awaitOp', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        subRequired: { tryCatch: ['sub.tryBlock', 'sub.catchBlock'] },
        outcome: 'caught'
    },
    {
        title:   ['Send an API key', 'API გასაღების გაგზავნა'],
        mission: ['This endpoint refuses anonymous calls. Attach your key as a header and send an explicit GET. Open the API block inspector to set the key.',
                  'ეს endpoint ანონიმურ მოთხოვნას არ იღებს. მიამაგრე გასაღები ჰედერად და გააგზავნე აშკარა GET. გასაღები ჩაწერე API ბლოკის ინსპექტორში.'],
        hint:    ['async function → API endpoint → API key / headers → GET → fetch() → await → res.json() → Template string → Render to DOM → Browser screen.',
                  'async ფუნქცია → API მისამართი → API გასაღები → GET → fetch() → await → res.json() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['asyncFn', 'apiEndpoint', 'apiKey', 'httpGet', 'fetchCall', 'awaitOp', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        outcome: 'keyed'
    },
    // ---------- Advanced ----------
    {
        title:   ['React to a click', 'რეაქცია დაწკაპუნებაზე'],
        mission: ['Nothing should happen until the user clicks Refresh. On click, take the data, put it in state, and render from state.',
                  'სანამ მომხმარებელი Refresh-ს არ დააჭერს, არაფერი უნდა მოხდეს. დაწკაპუნებაზე აიღე მონაცემი, ჩადე state-ში და იქიდან დახატე.'],
        hint:    ['addEventListener → Array of data → State object → Template string → Render to DOM → Browser screen.',
                  'addEventListener → მონაცემთა მასივი → State ობიექტი → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['eventListener', 'dataArray', 'stateObj', 'templateLit', 'renderDom', 'browser'],
        outcome: 'clicked'
    },
    {
        title:   ['Submit a form with POST', 'ფორმის გაგზავნა POST-ით'],
        mission: ['A user fills in a new product. Stop the page reloading, collect the fields, and POST them to the server.',
                  'მომხმარებელი ავსებს ახალ პროდუქტს. შეაჩერე გვერდის გადატვირთვა, შეაგროვე ველები და გააგზავნე POST-ით.'],
        hint:    ['Form submit → API endpoint → POST → fetch() → await → res.json() → console.log.',
                  'ფორმის გაგზავნა → API მისამართი → POST → fetch() → await → res.json() → console.log.'],
        expected: ['formSubmit', 'apiEndpoint', 'httpPost', 'fetchCall', 'awaitOp', 'jsonParse', 'consoleLog'],
        outcome: 'posted'
    },
    {
        title:   ['Update with PUT', 'განახლება PUT-ით'],
        mission: ['Clicking Save should send the edited product back to the server with PUT.',
                  'Save-ზე დაწკაპუნებამ რედაქტირებული პროდუქტი PUT-ით უნდა დააბრუნოს სერვერზე.'],
        hint:    ['addEventListener → API endpoint → PUT / PATCH → fetch() → await → res.json() → console.log.',
                  'addEventListener → API მისამართი → PUT / PATCH → fetch() → await → res.json() → console.log.'],
        expected: ['eventListener', 'apiEndpoint', 'httpPut', 'fetchCall', 'awaitOp', 'jsonParse', 'consoleLog'],
        outcome: 'updated'
    },
    {
        title:   ['Delete the clicked row', 'დააჭერილი სტრიქონის წაშლა'],
        mission: ['Every row has a delete button. Use one delegated listener on the list, read the id from the row, and send DELETE.',
                  'თითო სტრიქონს წაშლის ღილაკი აქვს. გამოიყენე ერთი დელეგირებული listener სიაზე, წაიკითხე id სტრიქონიდან და გააგზავნე DELETE.'],
        hint:    ['Event delegation → API endpoint → DELETE → fetch() → await → res.json() → console.log.',
                  'ივენთის დელეგირება → API მისამართი → DELETE → fetch() → await → res.json() → console.log.'],
        expected: ['delegation', 'apiEndpoint', 'httpDelete', 'fetchCall', 'awaitOp', 'jsonParse', 'consoleLog'],
        outcome: 'deleted'
    },
    {
        title:   ['Remember it after a refresh', 'დაიმახსოვრე განახლების შემდეგაც'],
        mission: ['Add a product to the list without mutating the old array, keep it in state, and save the whole thing to localStorage.',
                  'დაამატე პროდუქტი ძველი მასივის შეუცვლელად, შეინახე state-ში და მთლიანი შედეგი ჩაწერე localStorage-ში.'],
        hint:    ['Array of data → Spread / copy → State object → Save to storage → console.log.',
                  'მონაცემთა მასივი → Spread / კოპირება → State ობიექტი → შენახვა საცავში → console.log.'],
        expected: ['dataArray', 'spreadOp', 'stateObj', 'saveLocal', 'consoleLog'],
        outcome: 'saved'
    },
    {
        title:   ['Read it back', 'წაიკითხე უკან'],
        mission: ['On the next visit the data is in localStorage — as a string. Parse it back into an array and render it.',
                  'შემდეგ ვიზიტზე მონაცემი localStorage-შია — სტრიქონად. დააპარსე უკან მასივად და დახატე.'],
        hint:    ['localStorage → res.json() (JSON.parse) → Template string → Render to DOM → Browser screen.',
                  'localStorage → res.json() (JSON.parse) → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['localStore', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        outcome: 'loaded'
    },
    {
        title:   ['Search without flooding', 'ძებნა ქსელის გადატვირთვის გარეშე'],
        mission: ['The user types "lap". Wait until the typing stops before calling the server, then render the matches.',
                  'მომხმარებელი კრეფს "lap"-ს. დაელოდე აკრეფის დასრულებას, მერე გამოიძახე სერვერი და დახატე შედეგები.'],
        hint:    ['Input value → Debounce → API endpoint → fetch() → await → res.json() → Template string → Render to DOM → Browser screen.',
                  'ინფუთის მნიშვნელობა → Debounce → API მისამართი → fetch() → await → res.json() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['userInput', 'debounceBlk', 'apiEndpoint', 'fetchCall', 'awaitOp', 'jsonParse', 'templateLit', 'renderDom', 'browser'],
        outcome: 'search'
    },
    {
        title:   ['One listener, every row', 'ერთი listener ყველა სტრიქონზე'],
        mission: ['Instead of a listener per row, handle every click on the container, then filter and re-render the list.',
                  'თითო სტრიქონზე listener-ის ნაცვლად, დაამუშავე ყველა დაწკაპუნება კონტეინერზე, მერე გაფილტრე და გადახატე სია.'],
        hint:    ['Event delegation → Array of data → .filter() → Template string → Render to DOM → Browser screen.',
                  'ივენთის დელეგირება → მონაცემთა მასივი → .filter() → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['delegation', 'dataArray', 'filterOp', 'templateLit', 'renderDom', 'browser'],
        outcome: 'delegated'
    },
    {
        title:   ['The same thing with .then()', 'იგივე, .then()-ით'],
        mission: ['Write the fetch the older way: no async function, no await — just a promise chain. The result is identical.',
                  'დაწერე იგივე fetch ძველებურად: async ფუნქციის და await-ის გარეშე — მხოლოდ promise-ის ჯაჭვით. შედეგი იდენტურია.'],
        hint:    ['API endpoint → fetch() → .then() chain → Template string → Render to DOM → Browser screen.',
                  'API მისამართი → fetch() → .then() ჯაჭვი → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['apiEndpoint', 'fetchCall', 'promiseThen', 'templateLit', 'renderDom', 'browser'],
        outcome: 'chained'
    },
    {
        title:   ['Who runs first?', 'ვინ სრულდება პირველი?'],
        mission: ['Three logs, written in one order and printed in another. Build the flow and read the console to see why.',
                  'სამი ლოგი, დაწერილი ერთი რიგით და დაბეჭდილი სხვა რიგით. ააწყვე ნაკადი და კონსოლში ნახე, რატომ.'],
        hint:    ['Event loop → setTimeout → console.log.',
                  'ივენთ ლუპი → setTimeout → console.log.'],
        expected: ['eventLoop', 'setTimeoutBlk', 'consoleLog'],
        outcome: 'loop'
    },
    {
        title:   ['Split it into modules', 'დაყავი მოდულებად'],
        mission: ['The data belongs in data.js and the rendering in app.js. Export it from one file and import it into the other.',
                  'მონაცემი data.js-ს ეკუთვნის, დახატვა კი app.js-ს. დააექსპორტე ერთი ფაილიდან და დააიმპორტე მეორეში.'],
        hint:    ['Array of data → export → import → Template string → Render to DOM → Browser screen.',
                  'მონაცემთა მასივი → export → import → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expected: ['dataArray', 'exportBlk', 'importBlk', 'templateLit', 'renderDom', 'browser'],
        outcome: 'module'
    },
    {
        title:   ['Cancel the stale request', 'გააუქმე ძველი მოთხოვნა'],
        mission: ['The user searched twice. Abort the first request so its late answer can never overwrite the newer one.',
                  'მომხმარებელმა ორჯერ მოძებნა. გააუქმე პირველი მოთხოვნა, რომ მისმა დაგვიანებულმა პასუხმა ახალი ვერ გადააფაროს.'],
        hint:    ['async function → AbortController → API endpoint → fetch() → await → res.json() → console.log.',
                  'async ფუნქცია → AbortController → API მისამართი → fetch() → await → res.json() → console.log.'],
        expected: ['asyncFn', 'abortCtl', 'apiEndpoint', 'fetchCall', 'awaitOp', 'jsonParse', 'consoleLog'],
        outcome: 'aborted'
    },
    {
        title:   ['One pipeline, two actions', 'ერთი მილსადენი, ორი ქმედება'],
        mission: ['Create and delete are different actions that share the same request pipeline. This one is a graph — connections may fan in and out.',
                  'შექმნა და წაშლა სხვადასხვა ქმედებაა, მაგრამ ერთსა და იმავე მილსადენს იყენებს. ეს გრაფია — კავშირები იყოფა და ერთდება.'],
        hint:    ['Form submit → POST, Event delegation → DELETE, both → fetch(). API endpoint → fetch() → res.json() → State object → Template string → Render to DOM → Browser screen.',
                  'ფორმის გაგზავნა → POST, ივენთის დელეგირება → DELETE, ორივე → fetch(). API მისამართი → fetch() → res.json() → State ობიექტი → შაბლონური სტრიქონი → DOM-ში ჩაწერა → ბრაუზერი.'],
        expectedGraph: {
            nodes: ['formSubmit', 'delegation', 'httpPost', 'httpDelete', 'apiEndpoint', 'fetchCall', 'jsonParse', 'stateObj', 'templateLit', 'renderDom', 'browser'],
            edges: [
                ['formSubmit', 'httpPost'],
                ['delegation', 'httpDelete'],
                ['httpPost', 'fetchCall'],
                ['httpDelete', 'fetchCall'],
                ['apiEndpoint', 'fetchCall'],
                ['fetchCall', 'jsonParse'],
                ['jsonParse', 'stateObj'],
                ['stateObj', 'templateLit'],
                ['templateLit', 'renderDom'],
                ['renderDom', 'browser']
            ]
        },
        outcome: 'crud'
    }
];

// ============================================================
// REFERENCE SCHEMAS — pre-built flows, easy to hard
// nodes: [{type, x, y}]   connections: [[fromIdx, toIdx]]
// ============================================================
const EXAMPLES = [
    { id:'render', diff:1, title:['Render an array','მასივის დახატვა'],
      desc:['Array → template string → DOM','მასივი → შაბლონი → DOM'],
      nodes:[{type:'dataArray',x:160,y:300},{type:'templateLit',x:460,y:300},{type:'renderDom',x:760,y:300},{type:'browser',x:1060,y:300}],
      connections:[[0,1],[1,2],[2,3]] },
    { id:'filter', diff:1, title:['Filter the list','სიის გაფილტვრა'],
      desc:['Keep only in-stock items','მხოლოდ მარაგში არსებული'],
      nodes:[{type:'dataArray',x:140,y:300},{type:'filterOp',x:400,y:300},{type:'templateLit',x:660,y:300},{type:'renderDom',x:920,y:300},{type:'browser',x:1180,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'map', diff:1, title:['Reshape with map','გარდაქმნა map-ით'],
      desc:['Raw objects → UI-shaped objects','ნედლი ობიექტი → ინტერფეისის ფორმა'],
      nodes:[{type:'dataArray',x:140,y:300},{type:'mapOp',x:400,y:300},{type:'templateLit',x:660,y:300},{type:'renderDom',x:920,y:300},{type:'browser',x:1180,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'reduce', diff:1, title:['Total with reduce','ჯამი reduce-ით'],
      desc:['Five items become one number','ხუთი ერთეული ერთ რიცხვად'],
      nodes:[{type:'dataArray',x:200,y:300},{type:'reduceOp',x:520,y:300},{type:'consoleLog',x:840,y:300}],
      connections:[[0,1],[1,2]] },
    { id:'fetch', diff:2, title:['First fetch','პირველი fetch'],
      desc:['URL → fetch → json → screen','URL → fetch → json → ეკრანი'],
      nodes:[{type:'apiEndpoint',x:120,y:300},{type:'fetchCall',x:380,y:300},{type:'jsonParse',x:640,y:300},{type:'templateLit',x:900,y:300},{type:'renderDom',x:1160,y:300},{type:'browser',x:1420,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'await', diff:2, title:['async / await','async / await'],
      desc:['Unwrap the promise before rendering','გახსენი Promise დახატვამდე'],
      nodes:[{type:'asyncFn',x:100,y:300},{type:'apiEndpoint',x:340,y:300},{type:'fetchCall',x:580,y:300},{type:'awaitOp',x:820,y:300},{type:'jsonParse',x:1060,y:300},{type:'templateLit',x:1300,y:300},{type:'renderDom',x:1540,y:300},{type:'browser',x:1780,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'trycatch', diff:3, title:['Fetch that cannot crash','fetch, რომელიც ვერ ჩავარდება'],
      desc:['try / catch around the request','try / catch მოთხოვნის გარშემო'],
      nodes:[{type:'asyncFn',x:100,y:300},{type:'tryCatch',x:330,y:300},{type:'apiEndpoint',x:560,y:300},{type:'fetchCall',x:790,y:300},{type:'awaitOp',x:1020,y:300},{type:'jsonParse',x:1250,y:300},{type:'templateLit',x:1480,y:300},{type:'renderDom',x:1710,y:300},{type:'browser',x:1940,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'apikey', diff:3, title:['Request with an API key','მოთხოვნა API გასაღებით'],
      desc:['Headers carry the key','ჰედერები ატარებს გასაღებს'],
      nodes:[{type:'asyncFn',x:100,y:300},{type:'apiEndpoint',x:320,y:300},{type:'apiKey',x:540,y:300},{type:'httpGet',x:760,y:300},{type:'fetchCall',x:980,y:300},{type:'awaitOp',x:1200,y:300},{type:'jsonParse',x:1420,y:300},{type:'templateLit',x:1640,y:300},{type:'renderDom',x:1860,y:300},{type:'browser',x:2080,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'click', diff:2, title:['Click to load','დაწკაპუნებით ჩატვირთვა'],
      desc:['Event → state → render','ივენთი → state → დახატვა'],
      nodes:[{type:'eventListener',x:140,y:300},{type:'dataArray',x:420,y:300},{type:'stateObj',x:700,y:300},{type:'templateLit',x:980,y:300},{type:'renderDom',x:1260,y:300},{type:'browser',x:1540,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'post', diff:3, title:['Form → POST','ფორმა → POST'],
      desc:['Collect fields and send them','შეაგროვე ველები და გააგზავნე'],
      nodes:[{type:'formSubmit',x:120,y:300},{type:'apiEndpoint',x:380,y:300},{type:'httpPost',x:640,y:300},{type:'fetchCall',x:900,y:300},{type:'awaitOp',x:1160,y:300},{type:'jsonParse',x:1420,y:300},{type:'consoleLog',x:1680,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'delete', diff:3, title:['Delegated delete','დელეგირებული წაშლა'],
      desc:['One listener, DELETE by id','ერთი listener, DELETE id-ით'],
      nodes:[{type:'delegation',x:120,y:300},{type:'apiEndpoint',x:380,y:300},{type:'httpDelete',x:640,y:300},{type:'fetchCall',x:900,y:300},{type:'awaitOp',x:1160,y:300},{type:'jsonParse',x:1420,y:300},{type:'consoleLog',x:1680,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'storage', diff:2, title:['Save to localStorage','შენახვა localStorage-ში'],
      desc:['Copy, keep in state, persist','დააკოპირე, შეინახე state-ში, დაიმახსოვრე'],
      nodes:[{type:'dataArray',x:140,y:300},{type:'spreadOp',x:420,y:300},{type:'stateObj',x:700,y:300},{type:'saveLocal',x:980,y:300},{type:'consoleLog',x:1260,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'restore', diff:2, title:['Restore from storage','აღდგენა საცავიდან'],
      desc:['String → parse → render','სტრიქონი → parse → დახატვა'],
      nodes:[{type:'localStore',x:160,y:300},{type:'jsonParse',x:460,y:300},{type:'templateLit',x:760,y:300},{type:'renderDom',x:1060,y:300},{type:'browser',x:1360,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'search', diff:4, title:['Debounced search','დებაუნსით ძებნა'],
      desc:['Wait for the typing to stop','დაელოდე აკრეფის დასრულებას'],
      nodes:[{type:'userInput',x:100,y:300},{type:'debounceBlk',x:330,y:300},{type:'apiEndpoint',x:560,y:300},{type:'fetchCall',x:790,y:300},{type:'awaitOp',x:1020,y:300},{type:'jsonParse',x:1250,y:300},{type:'templateLit',x:1480,y:300},{type:'renderDom',x:1710,y:300},{type:'browser',x:1940,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'then', diff:3, title:['Promise chain','Promise-ის ჯაჭვი'],
      desc:['The same fetch, written with .then()','იგივე fetch, .then()-ით'],
      nodes:[{type:'apiEndpoint',x:140,y:300},{type:'fetchCall',x:420,y:300},{type:'promiseThen',x:700,y:300},{type:'templateLit',x:980,y:300},{type:'renderDom',x:1260,y:300},{type:'browser',x:1540,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'loop', diff:3, title:['Event loop order','ივენთ ლუპის რიგი'],
      desc:['sync → microtask → timer','სინქრონული → microtask → ტაიმერი'],
      nodes:[{type:'eventLoop',x:220,y:300},{type:'setTimeoutBlk',x:540,y:300},{type:'consoleLog',x:860,y:300}],
      connections:[[0,1],[1,2]] },
    { id:'modules', diff:2, title:['Two files, one app','ორი ფაილი, ერთი აპი'],
      desc:['export from data.js, import in app.js','export data.js-იდან, import app.js-ში'],
      nodes:[{type:'dataArray',x:120,y:300},{type:'exportBlk',x:380,y:300},{type:'importBlk',x:640,y:300},{type:'templateLit',x:900,y:300},{type:'renderDom',x:1160,y:300},{type:'browser',x:1420,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'abort', diff:4, title:['Cancel a request','მოთხოვნის გაუქმება'],
      desc:['AbortController kills the stale call','AbortController კლავს ძველ გამოძახებას'],
      nodes:[{type:'asyncFn',x:120,y:300},{type:'abortCtl',x:380,y:300},{type:'apiEndpoint',x:640,y:300},{type:'fetchCall',x:900,y:300},{type:'awaitOp',x:1160,y:300},{type:'jsonParse',x:1420,y:300},{type:'consoleLog',x:1680,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'nodes', diff:4, title:['Build nodes, not strings','კვანძები და არა სტრიქონები'],
      desc:['createElement + fragment + append','createElement + fragment + append'],
      nodes:[{type:'dataArray',x:120,y:300},{type:'filterOp',x:380,y:300},{type:'querySel',x:640,y:300},{type:'createEl',x:900,y:300},{type:'appendChildBlk',x:1160,y:300},{type:'browser',x:1420,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'crud', diff:5, title:['Create + delete pipeline','შექმნა + წაშლა ერთად'],
      desc:['Two actions share one fetch (graph)','ორი ქმედება ერთ fetch-ს იყენებს'],
      nodes:[{type:'formSubmit',x:120,y:170},{type:'delegation',x:120,y:430},{type:'httpPost',x:400,y:170},{type:'httpDelete',x:400,y:430},{type:'apiEndpoint',x:400,y:620},{type:'fetchCall',x:700,y:300},{type:'jsonParse',x:960,y:300},{type:'stateObj',x:1220,y:300},{type:'templateLit',x:1480,y:300},{type:'renderDom',x:1740,y:300},{type:'browser',x:2000,y:300}],
      connections:[[0,2],[1,3],[2,5],[3,5],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]] },

    // ---------- Real-world scenarios: the flows behind products people use every day ----------
    { id:'rw-weather', real:true, dataset:'weather', diff:3,
      scenario:['Weather app · news portal','ამინდის აპი · საინფორმაციო პორტალი'],
      title:['Weather widget','ამინდის ვიჯეტი'],
      desc:['URL + API key fan into one fetch, .map() formats "24°C"','URL და API გასაღები ერთ fetch-ში, .map() აფორმებს „24°C“-ს'],
      nodes:[{type:'asyncFn',x:60,y:200},{type:'apiEndpoint',x:320,y:200},{type:'apiKey',x:320,y:440},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'mapOp',x:1360,y:320},{type:'templateLit',x:1620,y:320},{type:'renderDom',x:1880,y:320},{type:'browser',x:2140,y:320}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'rw-cart', real:true, dataset:'cart', diff:3,
      scenario:['Online store · checkout','ონლაინ მაღაზია · გადახდა'],
      title:['Shopping cart','საყიდლების კალათა'],
      desc:['One parsed cart feeds two branches: list + total','ერთი კალათა ორ განშტოებას კვებავს: სია + ჯამი'],
      nodes:[{type:'localStore',x:80,y:320},{type:'jsonParse',x:340,y:320},{type:'templateLit',x:620,y:180},{type:'renderDom',x:880,y:180},{type:'browser',x:1140,y:180},{type:'reduceOp',x:620,y:460},{type:'consoleLog',x:880,y:460}],
      connections:[[0,1],[1,2],[2,3],[3,4],[1,5],[5,6]] },
    { id:'rw-search', real:true, dataset:'movies', diff:4,
      scenario:['Streaming service · search box','სტრიმინგ სერვისი · საძიებო ველი'],
      title:['Live movie search','ფილმების ცოცხალი ძიება'],
      desc:['Debounce + abort, then fetch the matches','Debounce + გაუქმება, მერე დამთხვევების ჩამოტვირთვა'],
      nodes:[{type:'userInput',x:60,y:320},{type:'debounceBlk',x:320,y:320},{type:'abortCtl',x:580,y:320},{type:'apiEndpoint',x:580,y:560},{type:'fetchCall',x:840,y:440},{type:'awaitOp',x:1100,y:440},{type:'jsonParse',x:1360,y:440},{type:'templateLit',x:1620,y:440},{type:'renderDom',x:1880,y:440},{type:'browser',x:2140,y:440}],
      connections:[[0,1],[1,2],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'rw-news', real:true, dataset:'news', diff:3,
      scenario:['News site · homepage','საინფორმაციო საიტი · მთავარი გვერდი'],
      title:['News feed that never breaks','ლენტა, რომელიც არ ფუჭდება'],
      desc:['try / catch around fetch, drafts filtered out','try / catch fetch-ის გარშემო, მონახაზები გაფილტრულია'],
      nodes:[{type:'asyncFn',x:60,y:320},{type:'tryCatch',x:320,y:320},{type:'apiEndpoint',x:320,y:560},{type:'fetchCall',x:580,y:440},{type:'awaitOp',x:840,y:440},{type:'jsonParse',x:1100,y:440},{type:'filterOp',x:1360,y:440},{type:'templateLit',x:1620,y:440},{type:'renderDom',x:1880,y:440},{type:'browser',x:2140,y:440}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'rw-todo', real:true, dataset:'todos', diff:4,
      scenario:['Productivity app · to-do list','პროდუქტიულობის აპი · საქმეების სია'],
      title:['To-do list that remembers','საქმეების სია, რომელსაც ახსოვს'],
      desc:['Form → storage → spread → state, then save + render','ფორმა → საცავი → spread → state, მერე შენახვა + დახატვა'],
      nodes:[{type:'formSubmit',x:60,y:320},{type:'localStore',x:320,y:320},{type:'jsonParse',x:580,y:320},{type:'spreadOp',x:840,y:320},{type:'stateObj',x:1100,y:320},{type:'saveLocal',x:1360,y:180},{type:'consoleLog',x:1620,y:180},{type:'templateLit',x:1360,y:460},{type:'renderDom',x:1620,y:460},{type:'browser',x:1880,y:460}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[4,7],[7,8],[8,9]] },
    { id:'rw-login', real:true, dataset:'login', diff:3,
      scenario:['Learning platform · sign-in','სასწავლო პლატფორმა · შესვლა'],
      title:['Sign-in form','შესვლის ფორმა'],
      desc:['POST credentials, keep the token in localStorage','POST-ით შესვლა, ტოკენი localStorage-ში'],
      nodes:[{type:'formSubmit',x:60,y:200},{type:'httpPost',x:320,y:200},{type:'apiEndpoint',x:320,y:440},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'saveLocal',x:1360,y:320},{type:'consoleLog',x:1620,y:320}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'rw-dashboard', real:true, dataset:'orders', diff:5,
      scenario:['Online store · admin dashboard','ონლაინ მაღაზია · ადმინ პანელი'],
      title:['Sales dashboard','გაყიდვების დაფა'],
      desc:['Fan in (URL + key), fan out (KPI + table)','შეერთება (URL + გასაღები), განშტოება (KPI + ცხრილი)'],
      nodes:[{type:'asyncFn',x:60,y:200},{type:'apiEndpoint',x:320,y:200},{type:'apiKey',x:320,y:460},{type:'fetchCall',x:580,y:330},{type:'awaitOp',x:840,y:330},{type:'jsonParse',x:1100,y:330},{type:'filterOp',x:1360,y:330},{type:'reduceOp',x:1620,y:180},{type:'consoleLog',x:1880,y:180},{type:'sortOp',x:1620,y:480},{type:'templateLit',x:1880,y:480},{type:'renderDom',x:2140,y:480},{type:'browser',x:2400,y:480}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[6,9],[9,10],[10,11],[11,12]] },
    { id:'rw-chat', real:true, dataset:'messages', diff:3,
      scenario:['Chat app · notification bell','ჩატის აპი · შეტყობინებების ზარი'],
      title:['Unread messages badge','წაუკითხავის ნიშნული'],
      desc:['Poll with .then(), light the bell, list unread','შემოწმება .then()-ით, ზარი ინთება, სია'],
      nodes:[{type:'setTimeoutBlk',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'fetchCall',x:580,y:320},{type:'promiseThen',x:840,y:320},{type:'filterOp',x:1100,y:320},{type:'classToggle',x:1360,y:170},{type:'sortOp',x:1360,y:470},{type:'templateLit',x:1620,y:470},{type:'renderDom',x:1880,y:470},{type:'browser',x:2140,y:470}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[4,6],[6,7],[7,8],[8,9]] },
    { id:'rw-profile', real:true, dataset:'profile', diff:3,
      scenario:['Social network · edit profile','სოციალური ქსელი · პროფილის რედაქტირება'],
      title:['Edit profile','პროფილის რედაქტირება'],
      desc:['Save click → PUT → state → re-render','Save → PUT → state → გადახატვა'],
      nodes:[{type:'eventListener',x:60,y:200},{type:'httpPut',x:320,y:200},{type:'apiEndpoint',x:320,y:440},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'stateObj',x:1360,y:320},{type:'templateLit',x:1620,y:320},{type:'renderDom',x:1880,y:320},{type:'browser',x:2140,y:320}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'rw-menu', real:true, dataset:'menu', diff:4,
      scenario:['Food delivery · restaurant page','მიტანის სერვისი · რესტორნის გვერდი'],
      title:['Restaurant menu','რესტორნის მენიუ'],
      desc:['Module import, filter + sort, real DOM nodes','მოდულის იმპორტი, ფილტრი + დალაგება, DOM კვანძები'],
      nodes:[{type:'dataArray',x:60,y:320},{type:'exportBlk',x:320,y:320},{type:'importBlk',x:580,y:320},{type:'filterOp',x:840,y:320},{type:'sortOp',x:1100,y:320},{type:'querySel',x:1360,y:320},{type:'createEl',x:1620,y:320},{type:'appendChildBlk',x:1880,y:320},{type:'browser',x:2140,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    // ---------- Real projects: the same ideas inside products everyone has used ----------
    { id:'rw-youtube', real:true, project:true, dataset:'comments', diff:3,
      scenario:['YouTube · comments under a video','YouTube · კომენტარები ვიდეოს ქვეშ'],
      title:['Top comments','საუკეთესო კომენტარები'],
      desc:['Fetch the comments, sort them by likes, render the list','კომენტარების წამოღება, ლაიქებით დალაგება, სიის დახატვა'],
      nodes:[{type:'asyncFn',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'sortOp',x:1360,y:320},{type:'templateLit',x:1620,y:320},{type:'renderDom',x:1880,y:320},{type:'browser',x:2140,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'rw-spotify', real:true, project:true, dataset:'tracks', diff:4,
      scenario:['Spotify · playlist page','Spotify · პლეილისტის გვერდი'],
      title:['Playlist and its length','პლეილისტი და მისი ხანგრძლივობა'],
      desc:['Token + URL into one fetch; one list feeds the tracks and the total time','ტოკენი + URL ერთ fetch-ში; ერთი სია კვებავს ტრეკებსაც და ჯამურ დროსაც'],
      nodes:[{type:'asyncFn',x:60,y:200},{type:'apiEndpoint',x:320,y:200},{type:'apiKey',x:320,y:440},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'templateLit',x:1360,y:180},{type:'renderDom',x:1620,y:180},{type:'browser',x:1880,y:180},{type:'reduceOp',x:1360,y:460},{type:'consoleLog',x:1620,y:460}],
      connections:[[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[5,9],[9,10]] },
    { id:'rw-netflix', real:true, project:true, dataset:'watching', diff:3,
      scenario:['Netflix · Continue watching row','Netflix · „ყურების გაგრძელების“ რიგი'],
      title:['Continue watching','ყურების გაგრძელება'],
      desc:['Saved progress → keep the unfinished → most watched first','შენახული პროგრესი → მხოლოდ დაუსრულებელი → ჯერ ყველაზე ნანახი'],
      nodes:[{type:'localStore',x:60,y:320},{type:'jsonParse',x:320,y:320},{type:'filterOp',x:580,y:320},{type:'sortOp',x:840,y:320},{type:'templateLit',x:1100,y:320},{type:'renderDom',x:1360,y:320},{type:'browser',x:1620,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'rw-google', real:true, project:true, dataset:'suggest', diff:5,
      scenario:['Google · search suggestions','Google · ძიების შეთავაზებები'],
      title:['Search suggestions','ძიების შეთავაზებები'],
      desc:['Debounce, cancel the stale request, then format each suggestion','debounce, ძველი მოთხოვნის გაუქმება, შემდეგ თითო შეთავაზების ფორმატირება'],
      nodes:[{type:'userInput',x:60,y:320},{type:'debounceBlk',x:320,y:320},{type:'abortCtl',x:580,y:320},{type:'apiEndpoint',x:840,y:320},{type:'fetchCall',x:1100,y:320},{type:'awaitOp',x:1360,y:320},{type:'jsonParse',x:1620,y:320},{type:'mapOp',x:1880,y:320},{type:'templateLit',x:2140,y:320},{type:'renderDom',x:2400,y:320},{type:'browser',x:2660,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]] },
    { id:'rw-bolt', real:true, project:true, dataset:'drivers', diff:4,
      scenario:['Bolt / Uber · ordering a ride','Bolt / Uber · მანქანის გამოძახება'],
      title:['Drivers nearby, nearest first','ახლო მძღოლები, ჯერ უახლოესი'],
      desc:['A timer polls, .then() unwraps, keep the free drivers, sort by arrival time','ტაიმერი ამოწმებს, .then() ხსნის, მხოლოდ თავისუფალი, დალაგება მოსვლის დროით'],
      nodes:[{type:'setTimeoutBlk',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'fetchCall',x:580,y:320},{type:'promiseThen',x:840,y:320},{type:'filterOp',x:1100,y:320},{type:'sortOp',x:1360,y:320},{type:'templateLit',x:1620,y:320},{type:'renderDom',x:1880,y:320},{type:'browser',x:2140,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'rw-airbnb', real:true, project:true, dataset:'stays', diff:3,
      scenario:['Airbnb · search results','Airbnb · ძიების შედეგები'],
      title:['Free stays, cheapest first','თავისუფალი ბინები, ჯერ იაფი'],
      desc:['Fetch → keep the available → sort by price → render','წამოღება → მხოლოდ თავისუფალი → ფასით დალაგება → დახატვა'],
      nodes:[{type:'asyncFn',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'fetchCall',x:580,y:320},{type:'awaitOp',x:840,y:320},{type:'jsonParse',x:1100,y:320},{type:'filterOp',x:1360,y:320},{type:'sortOp',x:1620,y:320},{type:'templateLit',x:1880,y:320},{type:'renderDom',x:2140,y:320},{type:'browser',x:2400,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'rw-github', real:true, project:true, dataset:'repos', diff:4,
      scenario:['GitHub · starring a repository','GitHub · რეპოზიტორიისთვის ვარსკვლავის დასმა'],
      title:['Star a repository','ვარსკვლავის დასმა'],
      desc:['Click → PUT with your token → keep the answer in state → re-render','დაწკაპუნება → PUT შენი ტოკენით → პასუხი state-ში → თავიდან დახატვა'],
      nodes:[{type:'eventListener',x:60,y:200},{type:'httpPut',x:320,y:200},{type:'apiEndpoint',x:580,y:200},{type:'apiKey',x:580,y:440},{type:'fetchCall',x:840,y:320},{type:'awaitOp',x:1100,y:320},{type:'jsonParse',x:1360,y:320},{type:'stateObj',x:1620,y:320},{type:'templateLit',x:1880,y:320},{type:'renderDom',x:2140,y:320},{type:'browser',x:2400,y:320}],
      connections:[[0,1],[1,2],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]] },
    { id:'rw-instagram', real:true, project:true, dataset:'posts', diff:3,
      scenario:['Instagram · liking a post','Instagram · პოსტის მოწონება'],
      title:['Like any post in the feed','ნებისმიერი პოსტის მოწონება'],
      desc:['One delegated listener for the whole feed, then POST the like','ერთი დელეგირებული listener მთელ ფიდზე, შემდეგ მოწონების POST'],
      nodes:[{type:'delegation',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'httpPost',x:580,y:320},{type:'fetchCall',x:840,y:320},{type:'awaitOp',x:1100,y:320},{type:'jsonParse',x:1360,y:320},{type:'consoleLog',x:1620,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'rw-wolt', real:true, project:true, dataset:'tracking', diff:3,
      scenario:['Wolt / Glovo · order tracking','Wolt / Glovo · შეკვეთის თვალყური'],
      title:['Live order status','შეკვეთის ცოცხალი სტატუსი'],
      desc:['A timer polls the order, .then() unwraps it, .map() formats each step','ტაიმერი ამოწმებს შეკვეთას, .then() ხსნის, .map() აფორმებს თითო ნაბიჯს'],
      nodes:[{type:'setTimeoutBlk',x:60,y:320},{type:'apiEndpoint',x:320,y:320},{type:'fetchCall',x:580,y:320},{type:'promiseThen',x:840,y:320},{type:'mapOp',x:1100,y:320},{type:'templateLit',x:1360,y:320},{type:'renderDom',x:1620,y:320},{type:'browser',x:1880,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'rw-duolingo', real:true, project:true, dataset:'lessons', diff:4,
      scenario:['Duolingo · lesson complete','Duolingo · გაკვეთილი დასრულდა'],
      title:['Save today\'s XP','დღევანდელი XP-ის შენახვა'],
      desc:['Read the saved history, add today without mutating it, save it back','წაიკითხე ისტორია, დაამატე დღევანდელი მუტაციის გარეშე, შეინახე უკან'],
      nodes:[{type:'eventListener',x:60,y:320},{type:'localStore',x:320,y:320},{type:'jsonParse',x:580,y:320},{type:'spreadOp',x:840,y:320},{type:'stateObj',x:1100,y:320},{type:'saveLocal',x:1360,y:320},{type:'consoleLog',x:1620,y:320}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] }
];

// ============================================================
// REAL-WORLD TASKS — the student designs the flow from a brief.
// Each requirement is a list of rules that must all hold:
//   ['has', t]       a block of type t is on the canvas
//   ['not', t]       no block of type t is on the canvas
//   ['link', a, b]   a direct connection a → b
//   ['path', a, b]   data can travel from a to b (blocks in between are fine)
//   ['out', t, n]    one t block has at least n outgoing connections
// `example` is the reference solution in EXAMPLES.
// ============================================================
const TASKS = [
    {
        id: 'weather', example: 'rw-weather', dataset: 'weather', diff: 3,
        context: ['Weather app · news portal', 'ამინდის აპი · საინფორმაციო პორტალი'],
        title:   ['Weather widget', 'ამინდის ვიჯეტი'],
        goal:    ['Load live temperatures for five cities and render them as "24°C".', 'ჩატვირთე ხუთი ქალაქის ტემპერატურა და გამოიტანე ფორმატით „24°C“.'],
        story:   ['A news portal wants a small weather strip in its header. When the page opens, ask the weather API for the current temperature in five cities. The API refuses anonymous calls, so your key has to travel with the request. The raw numbers must become display text like "24°C" before they reach the page.',
                  'საინფორმაციო პორტალს სურს, ჰედერში ამინდის პატარა ზოლი ჰქონდეს. გვერდის გახსნისას ამინდის API-ს ჰკითხე ხუთი ქალაქის მიმდინარე ტემპერატურა. API ანონიმურ მოთხოვნას არ იღებს, ამიტომ შენი გასაღები მოთხოვნას უნდა გაჰყვეს. ნედლი რიცხვები გვერდამდე უნდა იქცეს ტექსტად, მაგალითად „24°C“.'],
        hint:    ['fetch() can take two inputs: the URL and the API key. After res.json(), .map() reshapes every city before the template string.',
                  'fetch()-ს შეიძლება ორი შემავალი ჰქონდეს: URL და API გასაღები. res.json()-ის შემდეგ .map() თითო ქალაქს გარდაქმნის შაბლონურ სტრიქონამდე.'],
        reqs: [
            { text: ['Wrap the work in an async function', 'მოათავსე ყველაფერი async ფუნქციაში'], rules: [['has', 'asyncFn']] },
            { text: ['The weather API URL goes into fetch()', 'ამინდის API-ს URL შედის fetch()-ში'], rules: [['link', 'apiEndpoint', 'fetchCall']] },
            { text: ['Your API key goes into the same fetch() — two inputs, one request', 'API გასაღებიც იმავე fetch()-ში შედის — ორი შემავალი, ერთი მოთხოვნა'], rules: [['link', 'apiKey', 'fetchCall']] },
            { text: ['await the response, then read it with res.json()', 'დაელოდე პასუხს await-ით, მერე წაიკითხე res.json()-ით'], rules: [['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Turn every reading into "24°C" with .map()', 'თითო მაჩვენებელი .map()-ით აქციე „24°C“-ად'], rules: [['path', 'jsonParse', 'mapOp']] },
            { text: ['Render the list and show it in the browser', 'დახატე სია და აჩვენე ბრაუზერში'], rules: [['path', 'mapOp', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'cart', example: 'rw-cart', dataset: 'cart', diff: 3,
        context: ['Online store · checkout', 'ონლაინ მაღაზია · გადახდა'],
        title:   ['Shopping cart', 'საყიდლების კალათა'],
        goal:    ['Restore the saved cart, list the items and calculate the total — one source, two branches.', 'აღადგინე შენახული კალათა, ჩამოწერე ნივთები და დაითვალე ჯამი — ერთი წყარო, ორი განშტოება.'],
        story:   ['A customer left the store yesterday with four items in the cart, and the cart was saved in localStorage as a JSON string. Today they are back. Restore the cart, list the items on the cart page, and calculate the order total for the Pay button. Both results come from the same parsed array, so one block has to feed two branches.',
                  'მყიდველმა გუშინ მაღაზია დატოვა კალათაში ოთხი ნივთით, კალათა კი localStorage-ში JSON სტრიქონად შეინახა. დღეს ის დაბრუნდა. აღადგინე კალათა, ჩამოწერე ნივთები კალათის გვერდზე და დაითვალე შეკვეთის ჯამი ღილაკისთვის „გადახდა“. ორივე შედეგი ერთი და იმავე დაპარსული მასივიდან მოდის, ამიტომ ერთმა ბლოკმა ორ განშტოებას უნდა მისცეს მონაცემი.'],
        hint:    ['Drag two connections out of the same res.json() (JSON.parse) port: one to the template string, one to .reduce().',
                  'გამოიყვანე ორი კავშირი ერთი და იმავე res.json() (JSON.parse) პორტიდან: ერთი შაბლონურ სტრიქონთან, მეორე .reduce()-თან.'],
        reqs: [
            { text: ['Read the saved cart from localStorage', 'წაიკითხე შენახული კალათა localStorage-იდან'], rules: [['has', 'localStore']] },
            { text: ['Parse the string back into an array', 'სტრიქონი უკან მასივად აქციე'], rules: [['link', 'localStore', 'jsonParse']] },
            { text: ['Branch 1: render the items on the page', 'განშტოება 1: დახატე ნივთები გვერდზე'], rules: [['path', 'jsonParse', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] },
            { text: ['Branch 2: add up the prices with .reduce() and log the total', 'განშტოება 2: შეკრიბე ფასები .reduce()-ით და დალოგე ჯამი'], rules: [['path', 'jsonParse', 'reduceOp'], ['path', 'reduceOp', 'consoleLog']] },
            { text: ['One output feeds both branches', 'ერთი გამოსასვლელი ორივე განშტოებას კვებავს'], rules: [['out', 'jsonParse', 2]] }
        ]
    },
    {
        id: 'search', example: 'rw-search', dataset: 'movies', diff: 4,
        context: ['Streaming service · search box', 'სტრიმინგ სერვისი · საძიებო ველი'],
        title:   ['Live movie search', 'ფილმების ცოცხალი ძიება'],
        goal:    ['Search while the user types — without flooding the server or showing stale results.', 'ეძებე აკრეფისას — სერვერის გადატვირთვისა და მოძველებული შედეგების გარეშე.'],
        story:   ['A streaming service shows results while you type "star". A request on every keystroke would send five requests for five letters, and a slow early answer could overwrite a newer one. Wait until the typing pauses, cancel any request that is still in flight, then fetch and render the matches.',
                  'სტრიმინგ სერვისი შედეგებს აჩვენებს, სანამ „star“-ს კრეფ. მოთხოვნა ყოველ ღილაკზე ხუთ ასოზე ხუთ მოთხოვნას გააგზავნიდა, ხოლო ნელმა ადრეულმა პასუხმა შეიძლება ახალი გადაფაროს. დაელოდე აკრეფის პაუზას, გააუქმე ჯერ კიდევ მიმდინარე მოთხოვნა, მერე ჩამოტვირთე და დახატე დამთხვევები.'],
        hint:    ['Input value → Debounce → AbortController → fetch(). The API endpoint plugs into fetch() as a second input.',
                  'ინფუთის მნიშვნელობა → Debounce → AbortController → fetch(). API მისამართი fetch()-ს მეორე შემავლად უერთდება.'],
        reqs: [
            { text: ['Read the input and debounce it', 'წაიკითხე ინფუთი და გაატარე debounce-ში'], rules: [['link', 'userInput', 'debounceBlk']] },
            { text: ['Abort the previous request before sending a new one', 'ახლის გაგზავნამდე გააუქმე წინა მოთხოვნა'], rules: [['path', 'debounceBlk', 'abortCtl'], ['path', 'abortCtl', 'fetchCall']] },
            { text: ['Send the query to the search API', 'გაუგზავნე მოთხოვნა საძიებო API-ს'], rules: [['link', 'apiEndpoint', 'fetchCall']] },
            { text: ['await the response and parse the JSON', 'დაელოდე პასუხს და დააპარსე JSON'], rules: [['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Render the results list', 'დახატე შედეგების სია'], rules: [['path', 'jsonParse', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'news', example: 'rw-news', dataset: 'news', diff: 3,
        context: ['News site · homepage', 'საინფორმაციო საიტი · მთავარი გვერდი'],
        title:   ['News feed that never breaks', 'ლენტა, რომელიც არ ფუჭდება'],
        goal:    ['Load the articles safely, hide drafts and render the feed.', 'უსაფრთხოდ ჩატვირთე სტატიები, დამალე მონახაზები და დახატე ლენტა.'],
        story:   ['The homepage loads its articles from the newsroom API. Twice last month that API went down and visitors saw a blank page. Make the request inside try / catch so a failure shows a friendly message instead. The API also returns unpublished drafts — those must never reach the public page.',
                  'მთავარი გვერდი სტატიებს რედაქციის API-დან ტვირთავს. გასულ თვეს ეს API ორჯერ გაითიშა და მნახველებმა ცარიელი გვერდი ნახეს. მოთხოვნა try / catch-ის შიგნით გააკეთე, რომ შეცდომისას მეგობრული შეტყობინება გამოჩნდეს. API გამოუქვეყნებელ მონახაზებსაც აბრუნებს — ისინი საჯარო გვერდზე არასდროს უნდა მოხვდეს.'],
        hint:    ['async function → try / catch → fetch(), with the API endpoint as the second input of fetch(). After res.json(), .filter() keeps published articles only.',
                  'async ფუნქცია → try / catch → fetch(), API მისამართი კი fetch()-ის მეორე შემავალია. res.json()-ის შემდეგ .filter() მხოლოდ გამოქვეყნებულს ტოვებს.'],
        reqs: [
            { text: ['Open an async function with try / catch inside', 'გახსენი async ფუნქცია, შიგნით try / catch-ით'], rules: [['path', 'asyncFn', 'tryCatch']] },
            { text: ['Make the request inside the try', 'მოთხოვნა try-ის შიგნით გააკეთე'], rules: [['path', 'tryCatch', 'fetchCall']] },
            { text: ['Call the newsroom API endpoint', 'გამოიძახე რედაქციის API'], rules: [['link', 'apiEndpoint', 'fetchCall']] },
            { text: ['await the response and parse the JSON', 'დაელოდე პასუხს და დააპარსე JSON'], rules: [['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Hide drafts: keep only published articles', 'დამალე მონახაზები: დატოვე მხოლოდ გამოქვეყნებული'], rules: [['path', 'jsonParse', 'filterOp']] },
            { text: ['Render the feed', 'დახატე ლენტა'], rules: [['path', 'filterOp', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'todo', example: 'rw-todo', dataset: 'todos', diff: 4,
        context: ['Productivity app · to-do list', 'პროდუქტიულობის აპი · საქმეების სია'],
        title:   ['To-do list that remembers', 'საქმეების სია, რომელსაც ახსოვს'],
        goal:    ['Add a task from the form, save the new list and re-render it.', 'დაამატე საქმე ფორმიდან, შეინახე ახალი სია და გადახატე.'],
        story:   ['When the user submits the "New task" form, the app reads the saved list from localStorage, adds the new task without mutating the old array, and keeps the result in state. From state the flow splits in two: one branch saves the list back to localStorage so it survives a refresh, the other re-renders it on screen.',
                  'როცა მომხმარებელი ფორმას „ახალი საქმე“ აგზავნის, აპი localStorage-იდან კითხულობს შენახულ სიას, ამატებს ახალ საქმეს ძველი მასივის შეუცვლელად და შედეგს state-ში ინახავს. state-იდან ნაკადი ორად იყოფა: ერთი განშტოება სიას უკან ინახავს localStorage-ში, რომ განახლების შემდეგაც დარჩეს, მეორე კი ეკრანზე ხელახლა ხატავს.'],
        hint:    ['Form submit → localStorage → res.json() (JSON.parse) → Spread → State object. Then two connections out of State: Save to storage, and Template string → Render.',
                  'ფორმის გაგზავნა → localStorage → res.json() (JSON.parse) → Spread → State ობიექტი. მერე State-დან ორი კავშირი: შენახვა საცავში და შაბლონური სტრიქონი → დახატვა.'],
        reqs: [
            { text: ['Start from the form submit event', 'დაიწყე ფორმის გაგზავნის ივენთით'], rules: [['path', 'formSubmit', 'localStore']] },
            { text: ['Load the saved list and parse it', 'ჩატვირთე შენახული სია და დააპარსე'], rules: [['link', 'localStore', 'jsonParse']] },
            { text: ['Add the new task with spread — never push into the old array', 'ახალი საქმე spread-ით დაამატე — ძველ მასივში push არასდროს'], rules: [['path', 'jsonParse', 'spreadOp']] },
            { text: ['Keep the new list in state', 'ახალი სია state-ში შეინახე'], rules: [['path', 'spreadOp', 'stateObj']] },
            { text: ['Branch 1: save the list back to localStorage', 'განშტოება 1: სია უკან შეინახე localStorage-ში'], rules: [['path', 'stateObj', 'saveLocal']] },
            { text: ['Branch 2: re-render the list', 'განშტოება 2: სია ხელახლა დახატე'], rules: [['path', 'stateObj', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'login', example: 'rw-login', dataset: 'login', diff: 3,
        context: ['Learning platform · sign-in page', 'სასწავლო პლატფორმა · შესვლის გვერდი'],
        title:   ['Sign-in form', 'შესვლის ფორმა'],
        goal:    ['POST the credentials, then keep the session token in localStorage.', 'გააგზავნე მონაცემები POST-ით და სესიის ტოკენი შეინახე localStorage-ში.'],
        story:   ['Build the sign-in for an online learning platform. On submit, stop the page reload, collect the email and password, and POST them to /auth/login. The server answers with JSON that contains a session token — store that token in localStorage so the student stays signed in after a refresh. Never store the password itself.',
                  'ააწყე შესვლა ონლაინ სასწავლო პლატფორმისთვის. გაგზავნისას შეაჩერე გვერდის გადატვირთვა, შეაგროვე ელფოსტა და პაროლი და გააგზავნე POST-ით /auth/login-ზე. სერვერი JSON-ით პასუხობს, რომელშიც სესიის ტოკენია — შეინახე ეს ტოკენი localStorage-ში, რომ სტუდენტი განახლების შემდეგაც შესული დარჩეს. თავად პაროლი არასდროს შეინახო.'],
        hint:    ['Form submit → POST → fetch(), and API endpoint → fetch() as the second input. Then await → res.json() → Save to storage → console.log.',
                  'ფორმის გაგზავნა → POST → fetch(), და API მისამართი → fetch() მეორე შემავლად. მერე await → res.json() → შენახვა საცავში → console.log.'],
        reqs: [
            { text: ['Collect the form fields and prepare a POST', 'შეაგროვე ფორმის ველები და მოამზადე POST'], rules: [['link', 'formSubmit', 'httpPost']] },
            { text: ['The POST options go into fetch()', 'POST-ის პარამეტრები fetch()-ში შედის'], rules: [['link', 'httpPost', 'fetchCall']] },
            { text: ['The login URL goes into the same fetch()', 'შესვლის URL იმავე fetch()-ში შედის'], rules: [['link', 'apiEndpoint', 'fetchCall']] },
            { text: ['await the answer and read the JSON', 'დაელოდე პასუხს და წაიკითხე JSON'], rules: [['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Save the session token to localStorage', 'სესიის ტოკენი შეინახე localStorage-ში'], rules: [['path', 'jsonParse', 'saveLocal']] },
            { text: ['Log what was saved', 'დალოგე, რა შეინახა'], rules: [['path', 'saveLocal', 'consoleLog']] }
        ]
    },
    {
        id: 'dashboard', example: 'rw-dashboard', dataset: 'orders', diff: 5,
        context: ['Online store · admin dashboard', 'ონლაინ მაღაზია · ადმინ პანელი'],
        title:   ['Sales dashboard', 'გაყიდვების დაფა'],
        goal:    ['One request, two widgets: a revenue number and a table of paid orders.', 'ერთი მოთხოვნა, ორი ვიჯეტი: შემოსავლის რიცხვი და გადახდილი შეკვეთების ცხრილი.'],
        story:   ['The store owner opens the admin dashboard every morning. Fetch the orders from the private orders API (it needs your key), keep only the paid ones, then split the flow: one branch adds up the revenue for the big KPI number, the other sorts the orders by amount — biggest first — and renders the table.',
                  'მაღაზიის მფლობელი ადმინ პანელს ყოველ დილით ხსნის. ჩამოტვირთე შეკვეთები დახურული API-დან (მას შენი გასაღები სჭირდება), დატოვე მხოლოდ გადახდილი და მერე გაყავი ნაკადი: ერთი განშტოება შემოსავალს კრებს დიდი KPI რიცხვისთვის, მეორე შეკვეთებს თანხით ალაგებს — უდიდესი პირველი — და ცხრილს ხატავს.'],
        hint:    ['Fan in: API endpoint and API key both connect to fetch(). Fan out: .filter() connects to both .reduce() and .sort().',
                  'შეერთება: API მისამართი და API გასაღები ორივე fetch()-ს უერთდება. განშტოება: .filter() უერთდება .reduce()-საც და .sort()-საც.'],
        reqs: [
            { text: ['Call the orders API with your key — two inputs into fetch()', 'გამოიძახე შეკვეთების API შენი გასაღებით — fetch()-ში ორი შემავალი'], rules: [['link', 'apiEndpoint', 'fetchCall'], ['link', 'apiKey', 'fetchCall']] },
            { text: ['Run it in an async function and await the response', 'გაუშვი async ფუნქციაში და დაელოდე პასუხს await-ით'], rules: [['has', 'asyncFn'], ['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Keep only paid orders', 'დატოვე მხოლოდ გადახდილი შეკვეთები'], rules: [['path', 'jsonParse', 'filterOp']] },
            { text: ['KPI branch: total revenue with .reduce() → console.log', 'KPI განშტოება: ჯამური შემოსავალი .reduce()-ით → console.log'], rules: [['path', 'filterOp', 'reduceOp'], ['path', 'reduceOp', 'consoleLog']] },
            { text: ['Table branch: sort by amount and render', 'ცხრილის განშტოება: დაალაგე თანხით და დახატე'], rules: [['path', 'filterOp', 'sortOp'], ['path', 'sortOp', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] },
            { text: ['.filter() feeds both branches', '.filter() ორივე განშტოებას კვებავს'], rules: [['out', 'filterOp', 2]] }
        ]
    },
    {
        id: 'chat', example: 'rw-chat', dataset: 'messages', diff: 3,
        context: ['Chat app · notification bell', 'ჩატის აპი · შეტყობინებების ზარი'],
        title:   ['Unread messages badge', 'წაუკითხავის ნიშნული'],
        goal:    ['Poll the inbox, light up the bell, and list unread messages newest first.', 'პერიოდულად შეამოწმე inbox, აანთე ზარი და ჩამოწერე წაუკითხავები — უახლესი პირველი.'],
        story:   ['A team chat checks the server for new messages every few seconds (polling). On each tick, fetch the inbox with a classic .then() chain, keep only the unread messages, toggle the red dot on the bell icon, and show the unread list with the newest message on top.',
                  'გუნდური ჩატი სერვერზე ახალ შეტყობინებებს რამდენიმე წამში ერთხელ ამოწმებს (polling). ყოველ ჯერზე ჩამოტვირთე inbox კლასიკური .then() ჯაჭვით, დატოვე მხოლოდ წაუკითხავი, გადართე წითელი წერტილი ზარის ხატულაზე და აჩვენე წაუკითხავების სია, ზემოთ უახლესით.'],
        hint:    ['setTimeout → API endpoint → fetch() → .then() chain → .filter(). From .filter() go two ways: classList, and .sort() → Template string → Render.',
                  'setTimeout → API მისამართი → fetch() → .then() ჯაჭვი → .filter(). .filter()-დან ორი გზა: classList და .sort() → შაბლონური სტრიქონი → დახატვა.'],
        reqs: [
            { text: ['Schedule the check with setTimeout', 'დაგეგმე შემოწმება setTimeout-ით'], rules: [['path', 'setTimeoutBlk', 'fetchCall']] },
            { text: ['Ask the inbox endpoint', 'მიმართე inbox-ის endpoint-ს'], rules: [['path', 'apiEndpoint', 'fetchCall']] },
            { text: ['Use a .then() chain — no await this time', 'გამოიყენე .then() ჯაჭვი — ამჯერად await-ის გარეშე'], rules: [['link', 'fetchCall', 'promiseThen'], ['not', 'awaitOp']] },
            { text: ['Keep only unread messages', 'დატოვე მხოლოდ წაუკითხავი'], rules: [['path', 'promiseThen', 'filterOp']] },
            { text: ['Toggle the badge class on the bell', 'გადართე ნიშნულის კლასი ზარზე'], rules: [['path', 'filterOp', 'classToggle']] },
            { text: ['Sort newest first and render the list', 'დაალაგე უახლესით და დახატე სია'], rules: [['path', 'filterOp', 'sortOp'], ['path', 'sortOp', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'profile', example: 'rw-profile', dataset: 'profile', diff: 3,
        context: ['Social network · edit profile', 'სოციალური ქსელი · პროფილის რედაქტირება'],
        title:   ['Edit profile', 'პროფილის რედაქტირება'],
        goal:    ['Send the edited profile with PUT and re-render the card from the answer.', 'გააგზავნე რედაქტირებული პროფილი PUT-ით და ბარათი პასუხიდან გადახატე.'],
        story:   ['On the settings page the user changes their bio and clicks Save. Send the whole updated profile to /users/7 with PUT. Do not trust what is still in the form: put the server\'s answer into state and re-render the profile card from state — the server is the source of truth.',
                  'პარამეტრების გვერდზე მომხმარებელი ცვლის ბიოგრაფიას და აჭერს Save-ს. გააგზავნე მთლიანი განახლებული პროფილი /users/7-ზე PUT-ით. ნუ ენდობი იმას, რაც ჯერ კიდევ ფორმაშია: სერვერის პასუხი ჩადე state-ში და პროფილის ბარათი state-იდან გადახატე — ჭეშმარიტების წყარო სერვერია.'],
        hint:    ['addEventListener → PUT → fetch(), and API endpoint → fetch(). Then await → res.json() → State object → Template string → Render.',
                  'addEventListener → PUT → fetch(), და API მისამართი → fetch(). მერე await → res.json() → State ობიექტი → შაბლონური სტრიქონი → დახატვა.'],
        reqs: [
            { text: ['On the Save click, prepare a PUT', 'Save-ზე დაწკაპუნებისას მოამზადე PUT'], rules: [['link', 'eventListener', 'httpPut']] },
            { text: ['The PUT options and the user URL both go into fetch()', 'PUT-ის პარამეტრები და მომხმარებლის URL ორივე fetch()-ში შედის'], rules: [['link', 'httpPut', 'fetchCall'], ['link', 'apiEndpoint', 'fetchCall']] },
            { text: ['await the answer and parse the JSON', 'დაელოდე პასუხს და დააპარსე JSON'], rules: [['path', 'fetchCall', 'awaitOp'], ['path', 'awaitOp', 'jsonParse']] },
            { text: ['Store the server\'s answer in state', 'სერვერის პასუხი state-ში შეინახე'], rules: [['path', 'jsonParse', 'stateObj']] },
            { text: ['Re-render the profile card from state', 'პროფილის ბარათი state-იდან გადახატე'], rules: [['path', 'stateObj', 'templateLit'], ['path', 'templateLit', 'renderDom'], ['path', 'renderDom', 'browser']] }
        ]
    },
    {
        id: 'menu', example: 'rw-menu', dataset: 'menu', diff: 4,
        context: ['Food delivery · restaurant page', 'მიტანის სერვისი · რესტორნის გვერდი'],
        title:   ['Restaurant menu', 'რესტორნის მენიუ'],
        goal:    ['Import the menu from its own module and build the list from real DOM nodes.', 'მენიუ შემოიტანე საკუთარი მოდულიდან და სია ააწყე ნამდვილი DOM კვანძებით.'],
        story:   ['A food delivery app keeps each restaurant\'s menu in its own module, menu.js. On the restaurant page, import the menu, hide sold-out dishes, sort what is left from cheapest to most expensive, and build the list with createElement. Dish names are typed in by restaurants, so the team bans innerHTML here.',
                  'მიტანის აპი თითო რესტორნის მენიუს ცალკე მოდულში, menu.js-ში ინახავს. რესტორნის გვერდზე შემოიტანე მენიუ, დამალე გაყიდული კერძები, დარჩენილი დაალაგე იაფიდან ძვირისკენ და სია ააწყე createElement-ით. კერძების სახელებს რესტორნები თავად წერენ, ამიტომ გუნდი აქ innerHTML-ს კრძალავს.'],
        hint:    ['Array of data → export → import → .filter() → .sort() → querySelector → createElement → append → Browser screen.',
                  'მონაცემთა მასივი → export → import → .filter() → .sort() → querySelector → createElement → append → ბრაუზერი.'],
        reqs: [
            { text: ['Export the menu from menu.js and import it in app.js', 'დააექსპორტე მენიუ menu.js-იდან და დააიმპორტე app.js-ში'], rules: [['link', 'dataArray', 'exportBlk'], ['link', 'exportBlk', 'importBlk']] },
            { text: ['Hide sold-out dishes', 'დამალე გაყიდული კერძები'], rules: [['path', 'importBlk', 'filterOp']] },
            { text: ['Cheapest first', 'იაფი პირველი'], rules: [['path', 'filterOp', 'sortOp']] },
            { text: ['Find the list and build <li> nodes with createElement', 'იპოვე სია და ააწყე <li> კვანძები createElement-ით'], rules: [['has', 'querySel'], ['path', 'sortOp', 'createEl']] },
            { text: ['Append them in one go and show the page', 'მიაბი ერთბაშად და აჩვენე გვერდი'], rules: [['path', 'createEl', 'appendChildBlk'], ['path', 'appendChildBlk', 'browser']] },
            { text: ['No innerHTML in this one', 'აქ innerHTML არ გამოიყენო'], rules: [['not', 'renderDom']] }
        ]
    }
];

// ============================================================
// STATE
// ============================================================
const API_STORE_KEY = 'jsl-api';
const state = {
    currentLevel: 0,
    nodes: [],
    connections: [],
    selectedNodeId: null,
    nextNodeId: 1,
    nextConnId: 1,
    completed: new Set(),
    running: false,
    zoom: 1,
    theme: 'light',
    spacePressed: false,
    panning: false,
    canvasStack: [],
    readonly: false,
    snapToGrid: false,
    undoStack: [],
    redoStack: [],
    panel: 'trace',
    librarySearch: '',
    trace: [],
    consoleLines: [],
    dataset: 'products',     // which sample data the canvas runs on
    task: null,              // the real-world task being solved, if any
    taskUi: { blocks: false, solution: false, collapsed: false, story: false },
    tasksDone: new Set(),
    // One shared API config — every API / fetch block on the canvas uses it.
    api: {
        url: '',
        key: '',
        scheme: 'none',        // none | bearer | header | query
        headerName: 'x-api-key',
        paramName: 'apikey',
        path: '',              // where the array sits inside the response
        revealKey: false
    }
};

const NODE_W = 220;
const NODE_H = 108;
const CANVAS_W = 3200;
const CANVAS_H = 1800;
const SVG_NS = 'http://www.w3.org/2000/svg';
const MIN_ZOOM = 0.3;
const MAX_ZOOM = 2;
const TASKS_STORE_KEY = 'jsl-tasks-done';
const THEME_STORE_KEY = 'jsl-theme-v2';   // v2: the redesign starts everyone on the dark theme once
const LAYOUT_STORE_KEY = 'jsl-layout';    // panel sizes
const PANELS_STORE_KEY = 'jsl-panels';    // which panels are collapsed

// ============================================================
// DOM REFS
// ============================================================
const $ = (id) => document.getElementById(id);
const canvasEl = $('canvas');
const canvasStageEl = $('canvas-stage');
const canvasWrapEl = $('canvas-wrap');
const svgEl = $('connections-svg');
const nodesContainer = $('nodes-container');
const libraryListEl = $('library-list');
const librarySearchEl = $('library-search');
const inspectorBody = $('inspector-body');
const inspectorTitle = $('insp-title');
const explainStepsEl = $('explain-steps');
const explainBodyEl = $('explain-body');
const dataBodyEl = $('data-body');
const codeBodyEl = $('code-body');
const missionTextEl = $('mission-text');
const missionHintBtn = $('mission-hint');
const levelNumEl = $('level-num');
const levelTitleEl = $('level-title');
const levelsToggle = $('levels-toggle');
const levelsDropdown = $('levels-dropdown');
const levelsMenuEl = $('levels-menu');
const toastWrap = $('toast-wrap');
const previewOverlay = $('preview-overlay');
const previewBody = $('preview-body');
const consoleBodyEl = $('console-body');
const zoomLevelEl = $('zoom-level');
const taskPanelEl = $('task-panel');
const tasksOverlay = $('tasks-overlay');

// ============================================================
// UTIL
// ============================================================
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

function portPos(node, type) {
    if (type === 'in') return { x: node.x, y: node.y + NODE_H / 2 };
    return { x: node.x + NODE_W, y: node.y + NODE_H / 2 };
}
function bezier(sx, sy, tx, ty) {
    const dx = Math.max(40, Math.abs(tx - sx) * 0.5);
    return `M ${sx} ${sy} C ${sx + dx} ${sy}, ${tx - dx} ${ty}, ${tx} ${ty}`;
}
function eventToCanvas(e) {
    const rect = canvasEl.getBoundingClientRect();
    return { x: (e.clientX - rect.left) / state.zoom, y: (e.clientY - rect.top) / state.zoom };
}
function isOverCanvas(e) {
    const r = canvasWrapEl.getBoundingClientRect();
    return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
}
function nowTime() {
    const d = new Date();
    return String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0');
}
function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Renders any runtime value the way you would read it in a debugger.
function formatValue(v, compact) {
    const k = kindOf(v);
    if (k === 'promise')  return 'Promise { <pending> → ' + v.label + ' }';
    if (k === 'response') return 'Response { ok: ' + v.ok + ', status: ' + v.status + ', url: "' + v.url + '" }';
    if (k === 'options')  return jsonish({ method: v.method, headers: v.headers, body: v.body ? shorten(v.body, 60) : undefined }, compact);
    if (k === 'event')    return 'Event { type: "' + v.type + '", target: "' + v.target + '" }';
    if (k === 'element')  return 'Element <' + v.selector + '>';
    if (k === 'dom')      return 'DOM: ' + v.nodes + ' node(s) inside ' + v.selector;
    if (k === 'undefined') return 'undefined';
    if (k === 'null')     return 'null';
    if (k === 'string')   return '"' + shorten(v, compact ? 90 : 400) + '"';
    if (k === 'number' || k === 'boolean') return String(v);
    return jsonish(v, compact);
}
function jsonish(v, compact) {
    let s;
    try { s = JSON.stringify(v, null, compact ? 0 : 2); } catch (_) { s = String(v); }
    if (s === undefined) s = String(v);
    return shorten(s, compact ? 120 : 900);
}
function shorten(s, max) {
    s = String(s);
    return s.length > max ? s.slice(0, max) + '…' : s;
}
// The pill next to a step: how big is this value?
function sizeLabel(v) {
    if (Array.isArray(v)) return v.length + ' items';
    const k = kindOf(v);
    if (k === 'undefined') return 'no value yet';
    if (k === 'string') return v.length + ' chars';
    if (k === 'number') return 'number';
    if (k === 'promise') return 'pending';
    if (k === 'response') return 'status ' + v.status;
    if (k === 'dom') return v.nodes + ' nodes';
    if (k === 'object') return Object.keys(v).length + ' keys';
    return k;
}
function sizeOf(v) {
    if (Array.isArray(v)) return v.length;
    if (typeof v === 'string') return v.length;
    return null;
}

// ============================================================
// ZOOM
// ============================================================
function applyZoom() {
    canvasEl.style.transform = `scale(${state.zoom})`;
    canvasStageEl.style.width = (CANVAS_W * state.zoom) + 'px';
    canvasStageEl.style.height = (CANVAS_H * state.zoom) + 'px';
    // The dot grid lives on the scroll container, so it scales with the zoom too.
    canvasWrapEl.style.setProperty('--zoom', state.zoom);
    zoomLevelEl.textContent = Math.round(state.zoom * 100) + '%';
}
// Zooms and scrolls so every block on the canvas is in view.
function fitView() {
    if (!state.nodes.length) { setZoom(1); canvasWrapEl.scrollLeft = 0; canvasWrapEl.scrollTop = 0; return; }
    const pad = 60;
    const minX = Math.min(...state.nodes.map(n => n.x)) - pad;
    const minY = Math.min(...state.nodes.map(n => n.y)) - pad;
    const maxX = Math.max(...state.nodes.map(n => n.x)) + NODE_W + pad;
    const maxY = Math.max(...state.nodes.map(n => n.y)) + NODE_H + pad;
    const r = canvasWrapEl.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const z = Math.min(1, Math.max(MIN_ZOOM, Math.min(r.width / (maxX - minX), r.height / (maxY - minY))));
    state.zoom = z;
    applyZoom();
    canvasWrapEl.scrollLeft = Math.max(0, minX * z - Math.max(0, (r.width - (maxX - minX) * z) / 2));
    canvasWrapEl.scrollTop = Math.max(0, minY * z - Math.max(0, (r.height - (maxY - minY) * z) / 2));
}
function setZoom(z, anchor) {
    const old = state.zoom;
    const newZ = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
    if (newZ === old) return;
    if (anchor) {
        const canvasX = (canvasWrapEl.scrollLeft + anchor.x) / old;
        const canvasY = (canvasWrapEl.scrollTop + anchor.y) / old;
        state.zoom = newZ;
        applyZoom();
        canvasWrapEl.scrollLeft = canvasX * newZ - anchor.x;
        canvasWrapEl.scrollTop = canvasY * newZ - anchor.y;
    } else {
        state.zoom = newZ;
        applyZoom();
    }
}

// ============================================================
// LIBRARY
// ============================================================
function renderLibrary() {
    libraryListEl.innerHTML = '';
    const header = $('lbl-library');
    const inSub = state.canvasStack.length > 0;
    const q = state.librarySearch.trim().toLowerCase();
    const matches = (type) => {
        if (!q) return true;
        const def = NODE_DEFS[type];
        const hay = [tx(def.label), tx(def.short), tx(def.category), type, opOf(type)].join(' ').toLowerCase();
        return hay.includes(q);
    };

    if (inSub) {
        const parentType = state.canvasStack[state.canvasStack.length - 1].ownerNodeType;
        if (header) header.textContent = tt('subLibraryTitle') + ' · ' + tx(NODE_DEFS[parentType].label);
        const items = (SUB_TOOLS[parentType] || []).filter(matches);
        const sec = document.createElement('div');
        sec.className = 'library-section';
        sec.innerHTML = `<div class="library-section-title">${escapeHtml(tx(NODE_DEFS[parentType].label))}</div>`;
        items.forEach(type => sec.appendChild(libItem(type)));
        libraryListEl.appendChild(sec);
        if (!items.length) libraryListEl.insertAdjacentHTML('beforeend', `<div class="library-empty">${tt('noBlocks')}</div>`);
        return;
    }

    if (header) header.textContent = tt('library');
    let shown = 0;
    LIBRARY_GROUPS.forEach(group => {
        const items = group.items.filter(matches);
        if (!items.length) return;
        shown += items.length;
        const sec = document.createElement('div');
        sec.className = 'library-section';
        sec.innerHTML = `<div class="library-section-title">${tt(group.title)}</div>`;
        items.forEach(type => sec.appendChild(libItem(type)));
        libraryListEl.appendChild(sec);
    });
    if (!shown) libraryListEl.innerHTML = `<div class="library-empty">${tt('noBlocks')}</div>`;
}

function libItem(type) {
    const def = NODE_DEFS[type];
    const item = document.createElement('div');
    item.className = 'lib-item';
    item.dataset.type = type;
    item.title = tx(def.short);
    item.innerHTML = `
        <div class="lib-icon ${def.color || ''}">${iconFor(type)}</div>
        <div class="lib-label">${escapeHtml(tx(def.label))}</div>
    `;
    item.addEventListener('mousedown', (e) => startLibraryDrag(type, e));
    return item;
}

function renderBreadcrumb() {
    const el = $('breadcrumb');
    if (!el) return;
    if (!state.canvasStack.length) {
        el.classList.remove('show');
        el.innerHTML = '';
        return;
    }
    const ownerType = state.canvasStack[state.canvasStack.length - 1].ownerNodeType;
    el.innerHTML = `
        <span class="crumb" id="crumb-top">${tt('topCrumb')}</span>
        <span class="sep">›</span>
        <span class="crumb current">${escapeHtml(tx(NODE_DEFS[ownerType].label))}</span>
    `;
    el.classList.add('show');
    $('crumb-top').addEventListener('click', surface);
}

// ============================================================
// SUB-CANVAS (dive into a block) — one level deep
// ============================================================
function openSubCanvas(node) {
    if (state.canvasStack.length) return;
    if (state.running) return;
    if (!SUB_TOOLS[node.type]) return;

    const snapshot = {
        nodes: state.nodes,
        connections: state.connections,
        nextNodeId: state.nextNodeId,
        nextConnId: state.nextConnId,
        selectedNodeId: state.selectedNodeId,
        zoom: state.zoom,
        scrollLeft: canvasWrapEl.scrollLeft,
        scrollTop: canvasWrapEl.scrollTop
    };
    state.canvasStack.push({ ownerNodeId: node.id, ownerNodeType: node.type, snapshot });

    if (!node.children) {
        node.children = { nodes: [], connections: [], nextNodeId: 1, nextConnId: 1 };
        const lvl = LEVELS[state.currentLevel];
        const levelSeed = lvl && lvl.subSeeds && lvl.subSeeds[node.type];
        const seed = levelSeed === null ? null : (levelSeed || SUB_SEED[node.type]);
        if (seed) {
            seed.nodes.forEach((sn) => {
                node.children.nodes.push({ id: 'n' + node.children.nextNodeId++, type: sn.type, x: sn.x, y: sn.y, flipped: false });
            });
            (seed.connections || []).forEach(([fromIdx, toIdx]) => {
                const a = node.children.nodes[fromIdx];
                const b = node.children.nodes[toIdx];
                if (!a || !b) return;
                node.children.connections.push({ id: 'c' + node.children.nextConnId++, from: a.id, to: b.id });
            });
        }
    }

    const swap = () => {
        state.nodes = node.children.nodes;
        state.connections = node.children.connections;
        state.nextNodeId = node.children.nextNodeId;
        state.nextConnId = node.children.nextConnId;
        state.selectedNodeId = null;
        renderLibrary();
        renderAll();
        renderBreadcrumb();
        renderExplainSteps();
        canvasWrapEl.scrollLeft = 0;
        canvasWrapEl.scrollTop = 0;
    };
    const rotator = $('library-rotator');
    if (rotator) {
        rotator.classList.add('rotate-out');
        setTimeout(() => { swap(); rotator.classList.remove('rotate-out'); }, 200);
    } else swap();
}

function surface() {
    if (!state.canvasStack.length) return;
    if (state.running) return;
    const frame = state.canvasStack[state.canvasStack.length - 1];
    const snapshot = frame.snapshot;
    const owner = snapshot.nodes.find(n => n.id === frame.ownerNodeId);
    if (owner && owner.children) {
        owner.children.nodes = state.nodes;
        owner.children.connections = state.connections;
        owner.children.nextNodeId = state.nextNodeId;
        owner.children.nextConnId = state.nextConnId;
    }
    state.canvasStack.pop();

    const restore = () => {
        state.nodes = snapshot.nodes;
        state.connections = snapshot.connections;
        state.nextNodeId = snapshot.nextNodeId;
        state.nextConnId = snapshot.nextConnId;
        state.selectedNodeId = snapshot.selectedNodeId;
        renderLibrary();
        renderAll();
        renderBreadcrumb();
        renderExplainSteps();
        canvasWrapEl.scrollLeft = snapshot.scrollLeft;
        canvasWrapEl.scrollTop = snapshot.scrollTop;
    };
    const rotator = $('library-rotator');
    if (rotator) {
        rotator.classList.add('rotate-out');
        setTimeout(() => { restore(); rotator.classList.remove('rotate-out'); }, 200);
    } else restore();
}

// ============================================================
// LEVELS MENU / NODES / CONNECTIONS
// ============================================================
function renderLevelsMenu() {
    levelsMenuEl.innerHTML = '';
    const basicHeader = document.createElement('div');
    basicHeader.className = 'level-section-title';
    basicHeader.textContent = lang === 'ka' ? 'საფუძვლები' : 'Fundamentals';
    levelsMenuEl.appendChild(basicHeader);

    LEVELS.forEach((lvl, idx) => {
        if (idx === ADVANCED_FROM) {
            const adv = document.createElement('div');
            adv.className = 'level-section-title';
            adv.textContent = lang === 'ka' ? 'დამატებითი ნაკადები' : 'Advanced Flows';
            levelsMenuEl.appendChild(adv);
        }
        const item = document.createElement('div');
        item.className = 'level-item';
        if (idx === state.currentLevel) item.classList.add('active');
        if (state.completed.has(idx)) item.classList.add('done');
        item.innerHTML = `
            <div class="level-item-num">${state.completed.has(idx) ? '✓' : idx + 1}</div>
            <div class="level-item-body">
                <div class="level-item-title">${escapeHtml(tx(lvl.title))}</div>
                <div class="level-item-mission">${escapeHtml(tx(lvl.mission))}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            loadLevel(idx);
            levelsDropdown.classList.remove('open');
        });
        levelsMenuEl.appendChild(item);
    });
}

function renderNodes() {
    nodesContainer.innerHTML = '';
    state.nodes.forEach(node => {
        const def = NODE_DEFS[node.type];
        if (!def) return;
        const el = document.createElement('div');
        el.className = 'node' + (node.flipped ? ' flipped' : '') + (state.selectedNodeId === node.id ? ' selected' : '');
        el.style.left = node.x + 'px';
        el.style.top = node.y + 'px';
        el.dataset.id = node.id;

        const inCount = state.connections.filter(c => c.to === node.id).length;
        const outCount = state.connections.filter(c => c.from === node.id).length;
        const hasIn = inCount > 0;
        const hasOut = outCount > 0;
        const canDive = !state.canvasStack.length && !!SUB_TOOLS[node.type];
        const op = opOf(node.type);

        el.innerHTML = `
            <div class="node-inner">
                <div class="node-face node-front">
                    <div class="node-badge" data-badge></div>
                    <div class="node-header">
                        <div class="node-icon ${def.color || ''}">${iconFor(node.type)}</div>
                        <div class="node-title">${escapeHtml(tx(def.label))}</div>
                        <div class="node-actions">
                            ${canDive ? `<button class="node-btn dive-btn" title="${tt('dveTooltip')}">${I.dive}</button>` : ''}
                            <button class="node-btn delete" title="Delete">${I.close}</button>
                        </div>
                    </div>
                    <div class="node-body">${escapeHtml(tx(def.short))}</div>
                    <div class="node-tag">${escapeHtml(op || tx(def.category))}</div>
                    <div class="port port-in ${hasIn ? 'connected' : ''}" data-port="in" ${inCount > 1 ? `data-count="${inCount}"` : ''}></div>
                    <div class="port port-out ${hasOut ? 'connected' : ''}" data-port="out" ${outCount > 1 ? `data-count="${outCount}"` : ''}></div>
                </div>
                <div class="node-face node-back">
                    <div class="node-back-title">${escapeHtml(tx(def.label))}</div>
                    <div class="node-back-text">${escapeHtml(tx(def.long))}</div>
                    <div class="node-back-hint">${tt('dblToFlip')}</div>
                </div>
            </div>
        `;

        el.addEventListener('mousedown', (e) => onNodeMouseDown(e, node));
        el.addEventListener('click', (e) => onNodeClick(e, node));
        el.addEventListener('dblclick', (e) => {
            if (e.target.closest('.port, .node-btn')) return;
            e.preventDefault();
            flipNode(node.id);
        });
        nodesContainer.appendChild(el);
    });
}

// The point halfway along the curve drawn by bezier().
function bezierMid(sx, sy, tx, ty) {
    const dx = Math.max(40, Math.abs(tx - sx) * 0.5);
    return {
        x: (sx + 3 * (sx + dx) + 3 * (tx - dx) + tx) / 8,
        y: (sy + 3 * sy + 3 * ty + ty) / 8
    };
}

function renderConnections() {
    Array.from(svgEl.querySelectorAll('.conn-group, .conn, .conn-hit')).forEach(n => n.remove());
    const sel = state.selectedNodeId;
    state.connections.forEach(conn => {
        const from = state.nodes.find(n => n.id === conn.from);
        const to = state.nodes.find(n => n.id === conn.to);
        if (!from || !to) return;
        const sp = portPos(from, 'out');
        const tp = portPos(to, 'in');
        const d = bezier(sp.x, sp.y, tp.x, tp.y);

        const g = document.createElementNS(SVG_NS, 'g');
        g.setAttribute('class', 'conn-group' + (sel && (conn.from === sel || conn.to === sel) ? ' linked' : ''));

        const hit = document.createElementNS(SVG_NS, 'path');
        hit.setAttribute('d', d);
        hit.setAttribute('class', 'conn-hit');
        hit.addEventListener('click', () => removeConnection(conn.id));
        g.appendChild(hit);

        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'conn');
        path.dataset.id = conn.id;
        g.appendChild(path);

        // A small × at the middle of the curve, shown on hover.
        if (!state.readonly) {
            const m = bezierMid(sp.x, sp.y, tp.x, tp.y);
            const del = document.createElementNS(SVG_NS, 'g');
            del.setAttribute('class', 'conn-del');
            del.setAttribute('transform', `translate(${m.x} ${m.y})`);
            del.innerHTML = `<title>${escapeHtml(tt('removeLink'))}</title><circle r="10"></circle><path d="M-3.5 -3.5 L3.5 3.5 M3.5 -3.5 L-3.5 3.5"></path>`;
            del.addEventListener('click', (e) => { e.stopPropagation(); removeConnection(conn.id); });
            g.appendChild(del);
        }
        svgEl.appendChild(g);
    });
    renderTaskPanel();
}

// ============================================================
// INSPECTOR
// ============================================================
const API_BLOCKS = ['apiEndpoint', 'apiKey', 'fetchCall'];

function renderInspector() {
    const node = state.nodes.find(n => n.id === state.selectedNodeId);
    if (!node) {
        inspectorTitle.textContent = tt('selectBlock');
        inspectorBody.innerHTML = `
            <div class="inspector-empty">
                <div class="inspector-empty-icon">${I.info}</div>
                <div class="inspector-empty-title">${tt('nothingSel')}</div>
                <div class="inspector-empty-text">${tt('clickAnyBlock')}</div>
            </div>
        `;
        return;
    }
    const def = NODE_DEFS[node.type];
    inspectorTitle.textContent = tx(def.label);
    const apiSection = API_BLOCKS.includes(node.type) ? apiFormHtml('insp') : '';
    inspectorBody.innerHTML = `
        ${apiSection}
        <div class="insp-section">
            <div class="insp-section-label">${tt('whatDoes')}</div>
            <div class="insp-text">${escapeHtml(tx(def.long))}</div>
        </div>
        ${def.io ? `<div class="insp-section">
            <div class="insp-section-label">${tt('dataShape')}</div>
            <div class="insp-preview">${escapeHtml(tx(def.io))}</div>
        </div>` : ''}
        <div class="insp-section">
            <div class="insp-section-label">${tt('fileSrc')}</div>
            <div class="insp-file">${escapeHtml(def.file)}</div>
        </div>
        <div class="insp-section">
            <div class="insp-section-label">${tt('codeEx')}</div>
            <div class="insp-code">${def.code}</div>
        </div>
        <div class="insp-section">
            <div class="insp-section-label">${tt('commonMistake')}</div>
            <div class="insp-mistake">
                <div class="insp-mistake-icon">${I.warning}</div>
                <div class="insp-mistake-text">${escapeHtml(tx(def.mistake))}</div>
            </div>
        </div>
    `;
    if (apiSection) wireApiForm('insp');
}

// The API form — rendered both in the inspector and in the API overlay.
function apiFormHtml(ns) {
    const a = state.api;
    const opt = (val, key) => `<option value="${val}" ${a.scheme === val ? 'selected' : ''}>${tt(key)}</option>`;
    return `
        <div class="insp-section">
            <div class="insp-section-label">${tt('apiTitle')}</div>

            <div class="insp-field">
                <div class="insp-field-label">${tt('apiUrlLabel')}</div>
                <input class="insp-input" id="${ns}-api-url" placeholder="https://fakestoreapi.com/products" value="${escapeHtml(a.url)}">
                <div class="insp-hint">${tt('apiUrlHint')}</div>
            </div>

            <div class="insp-field">
                <div class="insp-field-label">${tt('apiKeyLabel')}</div>
                <div class="insp-row">
                    <input class="insp-input" id="${ns}-api-key" type="${a.revealKey ? 'text' : 'password'}" autocomplete="off" spellcheck="false" placeholder="sk-..." value="${escapeHtml(a.key)}">
                    <button class="insp-btn" id="${ns}-api-reveal">${a.revealKey ? tt('apiHide') : tt('apiShow')}</button>
                </div>
                <div class="insp-hint">${tt('apiKeyHint')}</div>
            </div>

            <div class="insp-field">
                <div class="insp-field-label">${tt('apiSchemeLabel')}</div>
                <select class="insp-select" id="${ns}-api-scheme">
                    ${opt('none', 'apiSchemeNone')}
                    ${opt('bearer', 'apiSchemeBearer')}
                    ${opt('header', 'apiSchemeHeader')}
                    ${opt('query', 'apiSchemeQuery')}
                </select>
            </div>

            <div class="insp-field ${a.scheme === 'header' ? '' : 'panel-hidden'}" id="${ns}-api-headerwrap">
                <div class="insp-field-label">${tt('apiHeaderLabel')}</div>
                <input class="insp-input" id="${ns}-api-header" placeholder="x-api-key" value="${escapeHtml(a.headerName)}">
            </div>

            <div class="insp-field ${a.scheme === 'query' ? '' : 'panel-hidden'}" id="${ns}-api-paramwrap">
                <div class="insp-field-label">${tt('apiParamLabel')}</div>
                <input class="insp-input" id="${ns}-api-param" placeholder="apikey" value="${escapeHtml(a.paramName)}">
            </div>

            <div class="insp-field">
                <div class="insp-field-label">${tt('apiPathLabel')}</div>
                <input class="insp-input" id="${ns}-api-path" placeholder="products" value="${escapeHtml(a.path)}">
                <div class="insp-hint">${tt('apiPathHint')}</div>
            </div>

            <div class="insp-field">
                <div class="insp-field-label">${tt('apiRequestPreview')}</div>
                <div class="insp-preview" id="${ns}-api-preview">${escapeHtml(requestPreview())}</div>
            </div>

            <div class="insp-row">
                <button class="insp-btn primary" id="${ns}-api-test">${tt('apiTest')}</button>
                <button class="insp-btn" id="${ns}-api-clear">${tt('apiClear')}</button>
            </div>
            <div class="insp-status" id="${ns}-api-status"></div>

            <div class="insp-note" style="margin-top:12px;">
                <span>${I.info}</span>
                <span>${tt('apiSharedNote')} ${tt('apiCorsNote')}</span>
            </div>
        </div>
    `;
}

// A readable summary of the request the current config would send.
function requestPreview() {
    const a = state.api;
    const url = buildUrl(a) || 'https://shop.local/api/products (mock)';
    const headers = buildHeaders(a, false);
    const shown = Object.entries(headers)
        .map(([k, v]) => k + ': ' + (k.toLowerCase() === 'authorization' ? 'Bearer ' + maskKey(a.key) : (k === a.headerName ? maskKey(a.key) : v)))
        .join('\n  ');
    return 'GET ' + (a.scheme === 'query' && a.key ? url.replace(encodeURIComponent(a.key), maskKey(a.key)) : url) + '\n  ' + shown;
}

function wireApiForm(ns) {
    const g = (suffix) => $(ns + '-api-' + suffix);
    const stop = (el) => {
        if (!el) return;
        el.addEventListener('mousedown', (e) => e.stopPropagation());
        el.addEventListener('keydown', (e) => e.stopPropagation());
    };
    const refresh = () => {
        const prev = g('preview');
        if (prev) prev.textContent = requestPreview();
        renderCodePanel();
    };
    const bindInput = (suffix, field) => {
        const el = g(suffix);
        if (!el) return;
        stop(el);
        el.addEventListener('input', (e) => {
            state.api[field] = e.target.value;
            saveApiConfig();
            refresh();
        });
    };
    bindInput('url', 'url');
    bindInput('key', 'key');
    bindInput('header', 'headerName');
    bindInput('param', 'paramName');
    bindInput('path', 'path');

    const scheme = g('scheme');
    if (scheme) {
        stop(scheme);
        scheme.addEventListener('change', (e) => {
            state.api.scheme = e.target.value;
            saveApiConfig();
            const hw = g('headerwrap');
            const pw = g('paramwrap');
            if (hw) hw.classList.toggle('panel-hidden', state.api.scheme !== 'header');
            if (pw) pw.classList.toggle('panel-hidden', state.api.scheme !== 'query');
            refresh();
        });
    }
    const reveal = g('reveal');
    if (reveal) {
        reveal.addEventListener('click', () => {
            state.api.revealKey = !state.api.revealKey;
            const input = g('key');
            if (input) input.type = state.api.revealKey ? 'text' : 'password';
            reveal.textContent = state.api.revealKey ? tt('apiHide') : tt('apiShow');
        });
    }
    const clear = g('clear');
    if (clear) {
        clear.addEventListener('click', () => {
            state.api.url = '';
            state.api.key = '';
            state.api.scheme = 'none';
            state.api.path = '';
            saveApiConfig();
            if (state.selectedNodeId) renderInspector();
            renderApiOverlay();
            renderCodePanel();
        });
    }
    const test = g('test');
    if (test) {
        test.addEventListener('click', async () => {
            const statusEl = g('status');
            if (statusEl) { statusEl.className = 'insp-status'; statusEl.textContent = tt('apiTesting'); }
            const result = await testApiRequest();
            if (!statusEl) return;
            statusEl.className = 'insp-status ' + (result.ok ? 'ok' : 'bad');
            statusEl.textContent = result.ok
                ? tt('apiOk') + ' ' + result.summary
                : tt('apiFail') + ': ' + result.message;
        });
    }
}

// Fires one real request with the current settings and reports what came back.
async function testApiRequest() {
    const a = state.api;
    const url = buildUrl(a);
    if (!url) return { ok: false, message: tt('apiUrlLabel') + ' — ?' };
    try {
        const res = await fetch(url, { headers: buildHeaders(a, false) });
        if (!res.ok) return { ok: false, message: 'HTTP ' + res.status };
        const json = await res.json();
        const arr = pickArray(json, a.path);
        const summary = Array.isArray(arr)
            ? arr.length + ' ' + tt('items')
            : Object.keys(json || {}).length + ' keys';
        return { ok: true, summary };
    } catch (err) {
        return { ok: false, message: err.message };
    }
}

function saveApiConfig() {
    try {
        const { url, key, scheme, headerName, paramName, path } = state.api;
        localStorage.setItem(API_STORE_KEY, JSON.stringify({ url, key, scheme, headerName, paramName, path }));
    } catch (_) {}
}
function loadApiConfig() {
    try {
        const raw = localStorage.getItem(API_STORE_KEY);
        if (!raw) return;
        Object.assign(state.api, JSON.parse(raw));
    } catch (_) {}
}

function renderApiOverlay() {
    const body = $('api-body');
    if (!body) return;
    body.innerHTML = apiFormHtml('ovl');
    wireApiForm('ovl');
}

// ============================================================
// BOTTOM PANEL: Trace / Data / Code
// ============================================================
function setPanel(tab) {
    state.panel = tab;
    document.querySelectorAll('.panel-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    explainBodyEl.classList.toggle('panel-hidden', tab !== 'trace');
    dataBodyEl.classList.toggle('panel-hidden', tab !== 'data');
    codeBodyEl.classList.toggle('panel-hidden', tab !== 'code');
    if (tab === 'code') renderCodePanel();
    if (tab === 'data') renderDataPanel();
}

function renderExplainSteps(count) {
    explainStepsEl.innerHTML = '';
    if (state.canvasStack.length && count == null) return;
    let n = count;
    if (n == null) {
        if (state.task) return;
        const lvl = LEVELS[state.currentLevel];
        n = (lvl.expected || (lvl.expectedGraph && lvl.expectedGraph.nodes) || []).length;
    }
    Array.from({ length: n }).forEach(() => {
        const dot = document.createElement('div');
        dot.className = 'explain-dot';
        explainStepsEl.appendChild(dot);
    });
}
function markStep(i) {
    const dots = explainStepsEl.querySelectorAll('.explain-dot');
    dots.forEach((d, idx) => {
        d.classList.remove('active');
        if (idx < i) d.classList.add('done');
        if (idx === i) d.classList.add('active');
    });
}

function appendLog(text, kind = '') {
    if (explainBodyEl.querySelector('.explain-empty')) explainBodyEl.innerHTML = '';
    const entry = document.createElement('div');
    entry.className = 'log-entry ' + (kind || '');
    entry.innerHTML = `<span class="log-time">${nowTime()}</span><span class="log-dot"></span><span class="log-text">${text}</span>`;
    explainBodyEl.appendChild(entry);
    explainBodyEl.scrollTop = explainBodyEl.scrollHeight;
}

// The Data tab: the real value after every block, and how big it got.
function renderDataPanel() {
    if (!state.trace.length) {
        dataBodyEl.innerHTML = `<div class="data-empty">${tt('dataEmpty')}</div>`;
        return;
    }
    dataBodyEl.innerHTML = state.trace.map((step, i) => {
        const def = NODE_DEFS[step.type];
        const beforeSize = sizeOf(step.before);
        const afterSize = sizeOf(step.after);
        let pillClass = '';
        if (beforeSize != null && afterSize != null) {
            if (afterSize < beforeSize) pillClass = 'shrink';
            else if (afterSize > beforeSize) pillClass = 'grow';
        }
        const changed = step.changed ? ' changed' : '';
        const errHtml = step.error
            ? `<div class="insp-mistake" style="margin-top:6px;">
                   <div class="insp-mistake-icon">${I.warning}</div>
                   <div class="insp-mistake-text">${escapeHtml(step.error)}</div>
               </div>`
            : '';
        return `
            <div class="data-step${changed}">
                <div class="data-step-num">${i + 1}</div>
                <div class="data-step-main">
                    <div class="data-step-head">
                        <span class="data-step-label">${escapeHtml(tx(def.label))}</span>
                        <span class="data-step-op">${escapeHtml(step.op || '')}</span>
                        <span class="data-pill ${pillClass}">${escapeHtml(sizeLabel(step.after))}</span>
                    </div>
                    <div class="data-value">${escapeHtml(formatValue(step.after))}</div>
                    ${errHtml}
                </div>
            </div>`;
    }).join('');
}

// The Code tab: the JavaScript the canvas currently describes.
function renderCodePanel() {
    const order = currentOrder();
    if (!order || order.length < 1) {
        codeBodyEl.innerHTML = `<div class="data-empty">${tt('codeEmpty')}</div>`;
        return;
    }
    const src = generateCode(order);
    codeBodyEl.innerHTML = `<div class="code-out"><button class="code-copy" id="code-copy">${tt('copy')}</button>${highlightJs(src)}</div>`;
    const btn = $('code-copy');
    if (btn) {
        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(src);
                showToast('', tt('copied'), 'success');
            } catch (_) {
                showToast('', tt('copied'), 'info');
            }
        });
    }
}

// Walks the chain and lets every block contribute its own source lines.
function generateCode(order) {
    const byId = new Map(state.nodes.map(n => [n.id, n]));
    const types = order.map(id => (byId.get(id) || {}).type).filter(Boolean);
    const pos = new Map(order.map((id, i) => [id, i]));
    const c = {
        v: 'items',
        api: state.api,
        open: [],
        indentAfter: 0,
        headers: false,
        options: false,
        queryKey: false,
        url: null,
        canAwait: types.includes('awaitOp') || types.includes('asyncFn'),
        thenStyle: types.includes('promiseThen')
    };
    const out = [];
    let indent = 0;
    const push = (lines) => lines.forEach(l => out.push(l ? '  '.repeat(indent) + l : ''));

    // Every block remembers the variable it produced, so in a branching flow
    // each branch reads from its own parent — not from whatever ran last.
    const varOf = new Map();
    order.forEach(id => {
        const node = byId.get(id);
        if (!node) return;
        const parents = state.connections
            .filter(cn => cn.to === id && varOf.has(cn.from))
            .map(cn => cn.from)
            .sort((a, b) => pos.get(b) - pos.get(a));
        if (parents.length) c.v = varOf.get(parents[0]);
        const sim = SIM[node.type];
        if (sim && sim.gen) {
            c.indentAfter = 0;
            push(sim.gen(c) || []);
            if (c.indentAfter) indent += c.indentAfter;
        }
        varOf.set(id, c.v);
    });
    while (c.open.length) {
        const closer = c.open.pop();
        indent = Math.max(0, indent - 1);
        push(closer);
    }
    return out.join('\n');
}

// Minimal JS highlighter for the generated source.
function highlightJs(src) {
    const esc = String(src).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const re = /(\/\/[^\n]*)|('[^'\n]*'|"[^"\n]*"|`[^`]*`)|\b(const|let|var|function|async|await|return|if|else|for|of|in|new|try|catch|throw|import|export|from|default|class|true|false|null|undefined)\b|\b(\d+)\b/g;
    return esc.replace(re, (m, comment, str, kw, num) => {
        if (comment) return '<span class="c">' + comment + '</span>';
        if (str) return '<span class="s">' + str + '</span>';
        if (kw) return '<span class="k">' + kw + '</span>';
        if (num) return '<span class="n">' + num + '</span>';
        return m;
    });
}

function renderHeader() {
    const task = state.task;
    document.body.classList.toggle('task-mode', !!task);
    if (task) {
        levelNumEl.textContent = tt('taskLabel') + ' ' + (TASKS.indexOf(task) + 1);
        levelTitleEl.textContent = tx(task.title);
        missionTextEl.textContent = tx(task.goal);
        return;
    }
    const lvl = LEVELS[state.currentLevel];
    levelNumEl.textContent = (lang === 'ka' ? 'დონე ' : 'Level ') + (state.currentLevel + 1);
    levelTitleEl.textContent = tx(lvl.title);
    missionTextEl.textContent = tx(lvl.mission);
}
function renderEmptyExplain() {
    explainBodyEl.innerHTML = `<div class="explain-empty">${tt('emptyExplain')} <strong style="color: var(--brand);">${tt('runFlowB')}</strong> ${tt('toWatch')}</div>`;
}
function renderUIStrings() {
    $('lbl-levels').textContent = tt('levels');
    $('lbl-reset').textContent = tt('reset');
    $('lbl-check').textContent = tt('checkAnswer');
    $('lbl-run').textContent = tt('runFlow');
    $('lbl-library').textContent = tt('library');
    $('lbl-inspector').textContent = tt('inspector');
    $('lbl-howitworks').textContent = tt('howWorks');
    $('lbl-mission').textContent = tt('mission');
    $('lbl-examples').textContent = tt('examplesTitle');
    $('lbl-examples-title').textContent = tt('examplesTitle');
    $('lbl-readonly').textContent = tt('readonlyHint');
    $('example-load-editable').textContent = tt('loadEditable');
    $('lbl-api-title').textContent = tt('apiTitle');
    $('lbl-tab-trace').textContent = tt('tabTrace');
    $('lbl-tab-data').textContent = tt('tabData');
    $('lbl-tab-code').textContent = tt('tabCode');
    $('lbl-console').textContent = tt('consoleTitle');
    $('lbl-console-hint').textContent = tt('consoleHint');
    $('mission-hint').textContent = tt('showHint');
    $('brand-name').textContent = tt('brand');
    $('brand-sub').textContent = tt('academy');
    $('lbl-tasks').textContent = tt('tasks');
    $('lbl-tasks-title').textContent = tt('tasksTitle');
    $('lbl-tasks-sub').textContent = tt('tasksSub');
    librarySearchEl.placeholder = tt('searchBlocks');
    applyPanels();
}

function renderAll() {
    renderNodes();
    renderConnections();
    renderInspector();
    if (state.panel === 'code') renderCodePanel();
}

// ============================================================
// NODE OPS
// ============================================================
function pushUndo() {
    state.undoStack.push({
        nodes: deepCloneNodes(state.nodes),
        connections: state.connections.map(c => ({ ...c }))
    });
    if (state.undoStack.length > 50) state.undoStack.shift();
    state.redoStack.length = 0;
}
function deepCloneNodes(nodes) {
    return nodes.map(n => {
        const copy = { ...n };
        if (n.children) {
            copy.children = {
                nodes: deepCloneNodes(n.children.nodes),
                connections: n.children.connections.map(c => ({ ...c })),
                nextNodeId: n.children.nextNodeId,
                nextConnId: n.children.nextConnId
            };
        }
        return copy;
    });
}
function applySnapshot(snap) {
    state.nodes = snap.nodes;
    state.connections = snap.connections;
    state.selectedNodeId = null;
    renderAll();
}
function undo() {
    if (!state.undoStack.length) return;
    state.redoStack.push({ nodes: deepCloneNodes(state.nodes), connections: state.connections.map(c => ({ ...c })) });
    applySnapshot(state.undoStack.pop());
}
function redo() {
    if (!state.redoStack.length) return;
    state.undoStack.push({ nodes: deepCloneNodes(state.nodes), connections: state.connections.map(c => ({ ...c })) });
    applySnapshot(state.redoStack.pop());
}

function addNode(type, x, y) {
    if (state.readonly) return null;
    pushUndo();
    const node = {
        id: 'n' + state.nextNodeId++,
        type,
        x: Math.max(10, x - NODE_W / 2),
        y: Math.max(10, y - NODE_H / 2),
        flipped: false
    };
    state.nodes.push(node);
    renderAll();
    return node;
}
function removeNode(id) {
    if (state.readonly) return;
    pushUndo();
    state.nodes = state.nodes.filter(n => n.id !== id);
    state.connections = state.connections.filter(c => c.from !== id && c.to !== id);
    if (state.selectedNodeId === id) state.selectedNodeId = null;
    renderAll();
}
// Is `toId` reachable from `fromId` along the current connections?
function reaches(fromId, toId) {
    const seen = new Set([fromId]);
    const queue = [fromId];
    while (queue.length) {
        const id = queue.shift();
        if (id === toId) return true;
        state.connections.forEach(c => {
            if (c.from === id && !seen.has(c.to)) { seen.add(c.to); queue.push(c.to); }
        });
    }
    return false;
}

// Any output can feed many inputs and any input can collect many outputs —
// the only thing that is refused is a loop, because data must flow forward.
function addConnection(fromId, toId) {
    if (state.readonly) return;
    if (fromId === toId) return;
    if (state.connections.some(c => c.from === fromId && c.to === toId)) return;
    if (reaches(toId, fromId)) {
        showToast(tt('wouldLoop'), tt('wouldLoopMsg'), 'warning');
        return;
    }
    pushUndo();
    state.connections.push({ id: 'c' + state.nextConnId++, from: fromId, to: toId });
    renderConnections();
    renderNodes();
    if (state.panel === 'code') renderCodePanel();
}
function removeConnection(id) {
    if (state.readonly) return;
    pushUndo();
    state.connections = state.connections.filter(c => c.id !== id);
    renderConnections();
    renderNodes();
    if (state.panel === 'code') renderCodePanel();
}
function flipNode(id) {
    const n = state.nodes.find(x => x.id === id);
    if (!n) return;
    n.flipped = !n.flipped;
    renderNodes();
}

// Lays the flow out in columns: every block sits one column to the right of
// its furthest parent, and branches stack vertically inside a column.
function autoLayout() {
    if (state.readonly || !state.nodes.length) return;
    const fg = flowGraph();
    if (!fg.acyclic) return;
    pushUndo();
    const parentsOf = (id) => state.connections.filter(c => c.to === id).map(c => c.from);
    const childrenOf = (id) => state.connections.filter(c => c.from === id).map(c => c.to);
    const linked = new Set();
    state.connections.forEach(c => { linked.add(c.from); linked.add(c.to); });

    const col = new Map();
    fg.order.forEach(id => {
        const ps = parentsOf(id);
        col.set(id, ps.length ? Math.max(...ps.map(p => col.get(p))) + 1 : 0);
    });
    // A source that only feeds a later block (an API key, a URL) moves up next to it.
    [...fg.order].reverse().forEach(id => {
        const kids = childrenOf(id);
        if (!parentsOf(id).length && kids.length) col.set(id, Math.min(...kids.map(k => col.get(k))) - 1);
    });

    const columns = new Map();
    fg.order.filter(id => linked.has(id)).forEach(id => {
        const c = col.get(id);
        if (!columns.has(c)) columns.set(c, []);
        columns.get(c).push(id);
    });
    const byId = new Map(state.nodes.map(n => [n.id, n]));
    const midY = 380, gapX = 260, gapY = 200;
    columns.forEach((ids, c) => {
        ids.sort((a, b) => byId.get(a).y - byId.get(b).y);
        ids.forEach((id, row) => {
            const node = byId.get(id);
            node.x = 80 + c * gapX;
            node.y = Math.max(40, Math.round(midY + (row - (ids.length - 1) / 2) * gapY));
        });
    });
    // Blocks that are not wired to anything wait in a row underneath.
    state.nodes.filter(n => !linked.has(n.id)).forEach((node, i) => {
        node.x = 80 + i * gapX;
        node.y = midY + 2 * gapY + 60;
    });
    renderAll();
    showToast('', tt('tidied'), 'info');
}

// ============================================================
// INTERACTIONS
// ============================================================
function startLibraryDrag(type, e) {
    if (state.readonly) return;
    e.preventDefault();
    const def = NODE_DEFS[type];
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.innerHTML = `${iconFor(type)} ${escapeHtml(tx(def.label))}`;
    document.body.appendChild(ghost);
    const positionGhost = (ev) => {
        ghost.style.left = (ev.clientX + 10) + 'px';
        ghost.style.top = (ev.clientY + 10) + 'px';
    };
    positionGhost(e);
    const onMove = (ev) => positionGhost(ev);
    const onUp = (ev) => {
        ghost.remove();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (isOverCanvas(ev)) {
            const pos = eventToCanvas(ev);
            addNode(type, pos.x, pos.y);
        }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

function onNodeMouseDown(e, node) {
    if (state.readonly && !e.target.closest('.node-btn.delete, .dive-btn')) return;
    if (e.target.closest('.dive-btn')) {
        e.stopPropagation();
        openSubCanvas(node);
        return;
    }
    if (e.target.closest('.node-btn.delete')) {
        e.stopPropagation();
        removeNode(node.id);
        return;
    }
    if (state.readonly) return;
    if (e.target.classList.contains('port')) {
        e.stopPropagation();
        startConnectionDrag(node, e.target.dataset.port, e);
        return;
    }
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = node.x;
    const origY = node.y;
    const el = e.currentTarget;
    el.classList.add('dragging');
    let moved = false;
    const snap = (v) => state.snapToGrid ? Math.round(v / 20) * 20 : v;
    const onMove = (ev) => {
        node.x = Math.max(0, snap(origX + (ev.clientX - startX) / state.zoom));
        node.y = Math.max(0, snap(origY + (ev.clientY - startY) / state.zoom));
        el.style.left = node.x + 'px';
        el.style.top = node.y + 'px';
        moved = true;
        renderConnections();
    };
    const onUp = () => {
        el.classList.remove('dragging');
        if (moved && (node.x !== origX || node.y !== origY)) pushUndo();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

function onNodeClick(e, node) {
    if (e.target.closest('.dive-btn') || e.target.closest('.node-btn.delete') || e.target.classList.contains('port')) return;
    state.selectedNodeId = node.id;
    renderNodes();
    renderConnections();
    renderInspector();
}

function startConnectionDrag(node, portType, e) {
    if (state.readonly) return;
    e.preventDefault();
    const isOutgoing = portType === 'out';
    const sp = portPos(node, portType);
    const pending = document.createElementNS(SVG_NS, 'path');
    pending.setAttribute('class', 'pending');
    svgEl.appendChild(pending);
    // Every port that could accept this connection lights up while dragging.
    canvasEl.classList.add(isOutgoing ? 'linking-out' : 'linking-in');
    let targetEl = null;
    const onMove = (ev) => {
        const rect = canvasEl.getBoundingClientRect();
        const mx = (ev.clientX - rect.left) / state.zoom;
        const my = (ev.clientY - rect.top) / state.zoom;
        pending.setAttribute('d', isOutgoing ? bezier(sp.x, sp.y, mx, my) : bezier(mx, my, sp.x, sp.y));
        const el = document.elementFromPoint(ev.clientX, ev.clientY);
        const port = el && el.classList && el.classList.contains('port') ? el : null;
        if (targetEl && targetEl !== port) targetEl.classList.remove('target');
        if (port && port.dataset.port === (isOutgoing ? 'in' : 'out')) {
            port.classList.add('target');
            targetEl = port;
        } else targetEl = null;
    };
    const onUp = (ev) => {
        pending.remove();
        canvasEl.classList.remove('linking-out', 'linking-in');
        if (targetEl) targetEl.classList.remove('target');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        const el = document.elementFromPoint(ev.clientX, ev.clientY);
        if (el && el.classList && el.classList.contains('port')) {
            if (el.dataset.port !== (isOutgoing ? 'in' : 'out')) {
                showToast(tt('wrongDir'), tt('wrongDirMsg'), 'warning');
                return;
            }
            const otherNodeEl = el.closest('.node');
            if (!otherNodeEl) return;
            const otherId = otherNodeEl.dataset.id;
            if (otherId === node.id) return;
            if (isOutgoing) addConnection(node.id, otherId);
            else addConnection(otherId, node.id);
        }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

canvasEl.addEventListener('click', (e) => {
    if (state.justPanned) { state.justPanned = false; return; }
    if (e.target === canvasEl || e.target === svgEl || e.target === nodesContainer) {
        state.selectedNodeId = null;
        renderNodes();
        renderConnections();
        renderInspector();
    }
});

// ============================================================
// FLOW ANALYSIS
// ============================================================
function topologicalChain() {
    if (!state.nodes.length) return [];
    const incoming = new Map(state.nodes.map(n => [n.id, 0]));
    state.connections.forEach(c => incoming.set(c.to, (incoming.get(c.to) || 0) + 1));
    const starts = state.nodes.filter(n => incoming.get(n.id) === 0);
    if (starts.length !== 1) return null;
    const order = [starts[0].id];
    let current = starts[0].id;
    const visited = new Set([current]);
    while (true) {
        const next = state.connections.filter(c => c.from === current);
        if (next.length === 0) break;
        if (next.length > 1) return null;
        if (visited.has(next[0].to)) return null;
        order.push(next[0].to);
        visited.add(next[0].to);
        current = next[0].to;
    }
    return order;
}

// When several blocks are ready at once, scopes open first (async function,
// event handlers), then sources, then request config, then everything else —
// so the generated code reads the way a person would write it.
const GEN_RANK = {
    asyncFn: 0, eventListener: 0, delegation: 0, formSubmit: 0, setTimeoutBlk: 0, debounceBlk: 0, tryCatch: 0, eventLoop: 0,
    dataArray: 1, apiEndpoint: 1, localStore: 1, userInput: 1, importBlk: 1,
    apiKey: 2, httpGet: 2, httpPost: 2, httpPut: 2, httpDelete: 2, abortCtl: 2
};

// Kahn's algorithm with a priority — handles fan-in and fan-out. Among the
// ready blocks it picks by rank, then left to right, so a run moves across
// the canvas column by column.
function flowGraph() {
    const nodes = state.nodes;
    const byId = new Map(nodes.map(n => [n.id, n]));
    const indeg = new Map(nodes.map(n => [n.id, 0]));
    const adj = new Map(nodes.map(n => [n.id, []]));
    state.connections.forEach(c => {
        if (!byId.has(c.from) || !byId.has(c.to)) return;
        indeg.set(c.to, indeg.get(c.to) + 1);
        adj.get(c.from).push(c.to);
    });
    const starts = nodes.filter(n => indeg.get(n.id) === 0).map(n => n.id);
    const remaining = new Map(indeg);
    const ready = [...starts];
    const order = [];
    const key = (id) => {
        const n = byId.get(id);
        return [GEN_RANK[n.type] ?? 3, n.x, n.y];
    };
    while (ready.length) {
        ready.sort((a, b) => {
            const ka = key(a), kb = key(b);
            return ka[0] - kb[0] || ka[1] - kb[1] || ka[2] - kb[2];
        });
        const id = ready.shift();
        order.push(id);
        for (const next of adj.get(id)) {
            remaining.set(next, remaining.get(next) - 1);
            if (remaining.get(next) === 0) ready.push(next);
        }
    }
    return { order, acyclic: order.length === nodes.length, starts };
}

// The order used by the Code tab and by Run Flow. Blocks that are not
// connected to anything stay out of it.
function currentOrder() {
    const fg = flowGraph();
    if (!fg.acyclic) return null;
    if (state.nodes.length === 1) return fg.order;
    const linked = new Set();
    state.connections.forEach(c => { linked.add(c.from); linked.add(c.to); });
    return fg.order.filter(id => linked.has(id));
}

// ============================================================
// CHECK ANSWER
// ============================================================
function checkSubAnswers(lvl) {
    if (!lvl.subRequired) return null;
    const topNodes = state.canvasStack.length ? state.canvasStack[0].snapshot.nodes : state.nodes;
    for (const [parentType, expectedTypes] of Object.entries(lvl.subRequired)) {
        const node = topNodes.find(n => n.type === parentType);
        if (!node) continue;
        const presentTypes = node.children ? node.children.nodes.map(n => n.type) : [];
        const missing = expectedTypes.filter(t => !presentTypes.includes(t));
        if (missing.length) {
            return tt('subMissingMsg').replace('{block}', tx(NODE_DEFS[parentType].label))
                + ' (' + missing.map(t => tx(NODE_DEFS[t].label)).join(', ') + ')';
        }
    }
    return null;
}

function checkAnswer() {
    if (state.task) return checkTask();
    const lvl = LEVELS[state.currentLevel];
    if (lvl.expectedGraph) return checkAnswerGraph(lvl.expectedGraph);

    const order = topologicalChain();
    const expected = lvl.expected;
    if (!state.nodes.length) {
        showToast(tt('emptyFlow'), tt('emptyFlowMsg'), 'warning');
        return;
    }
    if (!order) {
        showToast(tt('notLinear'), tt('notLinearMsg'), 'warning');
        return;
    }
    if (order.length !== state.nodes.length) {
        showToast(tt('unconnected'), tt('unconnectedMsg'), 'warning');
        return;
    }
    const types = order.map(id => state.nodes.find(n => n.id === id).type);
    const matches = types.length === expected.length && types.every((t, i) => t === expected[i]);
    if (matches) {
        const subProblem = checkSubAnswers(lvl);
        if (subProblem) {
            showToast(tt('notQuite'), subProblem, 'warning');
            appendLog(subProblem, 'warning');
            return;
        }
        state.completed.add(state.currentLevel);
        showToast(tt('correct'), tt('correctMsg'), 'success');
        appendLog(tt('answerOk'), 'success');
        renderLevelsMenu();
    } else {
        const firstWrong = types.findIndex((t, i) => t !== expected[i]);
        let msg;
        if (firstWrong === -1) {
            msg = types.length < expected.length
                ? `${tt('almostMissing')} ${types.length + 1}.`
                : `${tt('extraAfter')} ${expected.length}.`;
        } else {
            msg = `${tt('position')} ${firstWrong + 1}: ${tt('expectedWord')} <strong>${escapeHtml(tx(NODE_DEFS[expected[firstWrong]].label))}</strong>, ${tt('butFound')} <strong>${escapeHtml(tx(NODE_DEFS[types[firstWrong]].label))}</strong>.`;
        }
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
    }
}

function multisetEqual(a, b) {
    if (a.length !== b.length) return false;
    const counts = new Map();
    for (const x of a) counts.set(x, (counts.get(x) || 0) + 1);
    for (const x of b) {
        if (!counts.has(x)) return false;
        const n = counts.get(x) - 1;
        if (n < 0) return false;
        counts.set(x, n);
    }
    return [...counts.values()].every(v => v === 0);
}

function checkAnswerGraph(expectedGraph) {
    if (!state.nodes.length) {
        showToast(tt('emptyFlow'), tt('emptyFlowMsg'), 'warning');
        return;
    }
    const types = state.nodes.map(n => n.type);
    if (!multisetEqual(types, expectedGraph.nodes)) {
        const missing = expectedGraph.nodes.filter(t => !types.includes(t));
        const extra = types.filter(t => !expectedGraph.nodes.includes(t));
        let msg = tt('notQuite');
        if (missing.length) msg = `${tt('expectedWord')} <strong>${escapeHtml(tx(NODE_DEFS[missing[0]].label))}</strong>.`;
        else if (extra.length) msg = `${tt('extraAfter')} — <strong>${escapeHtml(tx(NODE_DEFS[extra[0]].label))}</strong>.`;
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
        return;
    }
    const typeOf = new Map(state.nodes.map(n => [n.id, n.type]));
    const userEdges = state.connections.map(c => typeOf.get(c.from) + '→' + typeOf.get(c.to));
    const expectedEdges = expectedGraph.edges.map(([a, b]) => a + '→' + b);
    if (!multisetEqual(userEdges, expectedEdges)) {
        const missing = expectedEdges.filter(e => !userEdges.includes(e));
        let msg = tt('notQuite');
        if (missing.length) {
            const [a, b] = missing[0].split('→');
            msg = `${tt('expectedWord')} <strong>${escapeHtml(tx(NODE_DEFS[a].label))}</strong> → <strong>${escapeHtml(tx(NODE_DEFS[b].label))}</strong>.`;
        }
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
        return;
    }
    if (!flowGraph().acyclic) {
        showToast(tt('notQuite'), tt('notLinearMsg'), 'error');
        return;
    }
    state.completed.add(state.currentLevel);
    showToast(tt('correct'), tt('correctMsg'), 'success');
    appendLog(tt('answerOk'), 'success');
    renderLevelsMenu();
}

// ============================================================
// RUN FLOW — real values move through the blocks you connected
// ============================================================
function newRunContext(order) {
    // A flow that starts from what the user typed gets search results back.
    const useSearch = (order || []).some(id => (state.nodes.find(n => n.id === id) || {}).type === 'userInput');
    return {
        api: state.api,
        console: [],
        useSearch,
        payload: clone(currentMockData(useSearch)),
        payloadLoaded: false,
        requestUrl: DS().api,
        status: 200,
        live: false,
        target: '#list',
        value: undefined,
        lastArray: null,
        renderArray: null,
        html: ''
    };
}
function currentMockData(useSearch) {
    const d = DS();
    return useSearch && d.search ? d.search : d.rows;
}

// Maps whatever an API returns onto the fields the current dataset uses
// (name / price / inStock for products), so real data flows through the
// same .filter() / .map() / template blocks.
function normalizeItems(arr) {
    const f = DS().f;
    return arr.slice(0, 40).map((p, i) => {
        if (!p || typeof p !== 'object') return { id: i + 1, [f.name]: String(p), [f.num]: 0, [f.ok]: true };
        const num = p[f.num] ?? p.price ?? p.cost ?? p.amount ?? 0;
        const ok = p[f.ok] ?? p.inStock ?? p.available ?? (typeof p.stock === 'number' ? p.stock > 0 : undefined);
        return {
            id: p.id ?? i + 1,
            [f.name]: String(p[f.name] ?? p.name ?? p.title ?? p.label ?? ('item ' + (i + 1))),
            [f.num]: typeof num === 'number' ? num : Number(String(num).replace(/[^0-9.]/g, '')) || 0,
            [f.ok]: ok === undefined ? true : !!ok
        };
    });
}

// Called by fetch(): does the real request when a URL is configured.
async function loadPayload(c) {
    if (c.payloadLoaded) return;
    c.payloadLoaded = true;
    const url = buildUrl(c.api);
    if (!url) {
        c.payload = clone(currentMockData(c.useSearch));
        return;
    }
    c.requestUrl = url;
    try {
        const res = await fetch(url, { headers: buildHeaders(c.api, false) });
        c.status = res.status;
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        const arr = pickArray(json, c.api.path);
        if (Array.isArray(arr)) {
            c.payload = normalizeItems(arr);
            c.live = true;
            appendLog(tt('livePreview') + ' — ' + escapeHtml(shorten(url, 70)) + ' (' + c.payload.length + ' ' + tt('items') + ')', 'success');
        } else {
            c.payload = json;
            c.live = true;
            appendLog(tt('livePreview'), 'success');
        }
    } catch (err) {
        c.status = 0;
        c.payload = clone(currentMockData(c.useSearch));
        appendLog(tt('fetchFailed') + ' (' + escapeHtml(err.message) + ')', 'warning');
    }
}

async function runFlow() {
    if (state.running) return;
    const order = currentOrder();
    if (!state.connections.length || !order || order.length < 2) {
        const loop = order === null;
        showToast(tt('nothingRun'), loop ? tt('wouldLoopMsg') : tt('nothingRunMsg'), 'warning');
        return;
    }

    state.running = true;
    state.trace = [];
    Array.from(nodesContainer.querySelectorAll('.node')).forEach(el => {
        el.classList.remove('firing');
        const b = el.querySelector('[data-badge]');
        if (b) { b.classList.remove('show'); b.textContent = ''; }
    });
    renderExplainSteps(order.length);
    explainBodyEl.innerHTML = '';
    dataBodyEl.innerHTML = '';

    // Every block keeps its own output. A block reads its input from its
    // parent — in a branching flow each branch gets the right value.
    const ctx = newRunContext(order);
    const outputs = new Map();
    const firedAt = new Map();
    let firedBrowser = false;
    for (let i = 0; i < order.length; i++) {
        const id = order[i];
        const incoming = state.connections.filter(c => c.to === id && outputs.has(c.from));
        if (incoming.length) await Promise.all(incoming.map(c => animateParticle(c.from, c.to)));
        // Several inputs (fan-in): the value comes from the parent that fired last.
        const parent = incoming
            .map(c => c.from)
            .filter(p => outputs.get(p) !== undefined)
            .sort((a, b) => firedAt.get(b) - firedAt.get(a))[0];
        ctx.value = parent ? outputs.get(parent) : undefined;
        await fireNode(id, i, ctx);
        outputs.set(id, ctx.value);
        firedAt.set(id, i);
        if ((state.nodes.find(n => n.id === id) || {}).type === 'browser') firedBrowser = true;
        await sleep(i === 0 ? 380 : 200);
    }

    renderDataPanel();
    renderConsole(ctx);
    if (firedBrowser) {
        await sleep(120);
        showBrowserPreview(ctx);
    } else {
        appendLog(tt('flowComplete'), 'success');
        ctx.console.forEach(line => appendLog('<span style="font-family:var(--mono);font-size:11.5px;">&gt; ' + escapeHtml(line) + '</span>'));
    }

    await sleep(400);
    Array.from(nodesContainer.querySelectorAll('.node')).forEach(el => el.classList.remove('firing'));
    state.running = false;
}

// One block fires: run its real behaviour, record the value, narrate it.
async function fireNode(id, stepIndex, ctx) {
    const node = state.nodes.find(n => n.id === id);
    if (!node) return;
    const el = nodesContainer.querySelector(`.node[data-id="${id}"]`);
    if (el) el.classList.add('firing');
    markStep(stepIndex);

    const sim = SIM[node.type];
    const before = ctx.value;
    let error = null;
    if (sim && sim.run) {
        try {
            ctx.value = await sim.run(before, ctx);
        } catch (err) {
            error = err.message;
        }
    }
    if (Array.isArray(ctx.value)) ctx.lastArray = ctx.value;

    state.trace.push({
        type: node.type,
        op: sim ? opOf(node.type) : (NODE_DEFS[node.type] && NODE_DEFS[node.type].file) || '',
        before,
        after: ctx.value,
        error,
        changed: before !== ctx.value
    });
    if (el) {
        const badge = el.querySelector('[data-badge]');
        if (badge && (error || ctx.value !== undefined)) {
            badge.textContent = error ? '!' : sizeLabel(ctx.value);
            badge.classList.add('show');
        }
    }
    logForNode(node.type, stepIndex, ctx, error);
    if (state.panel === 'data') renderDataPanel();
}

function animateParticle(fromId, toId) {
    return new Promise(resolve => {
        const from = state.nodes.find(n => n.id === fromId);
        const to = state.nodes.find(n => n.id === toId);
        if (!from || !to) return resolve();
        const sp = portPos(from, 'out');
        const tp = portPos(to, 'in');
        const d = bezier(sp.x, sp.y, tp.x, tp.y);
        const conn = state.connections.find(c => c.from === fromId && c.to === toId);
        const connEl = conn ? svgEl.querySelector(`path.conn[data-id="${conn.id}"]`) : null;
        if (connEl) connEl.classList.add('active');
        const measure = document.createElementNS(SVG_NS, 'path');
        measure.setAttribute('d', d);
        measure.style.visibility = 'hidden';
        svgEl.appendChild(measure);
        const len = measure.getTotalLength();
        const halo = document.createElementNS(SVG_NS, 'circle');
        halo.setAttribute('r', '12');
        halo.setAttribute('class', 'particle-halo');
        svgEl.appendChild(halo);
        const particle = document.createElementNS(SVG_NS, 'circle');
        particle.setAttribute('r', '5');
        particle.setAttribute('class', 'particle');
        svgEl.appendChild(particle);
        const duration = 680;
        const start = performance.now();
        let done = false;
        const finish = () => {
            if (done) return;
            done = true;
            particle.remove(); halo.remove(); measure.remove();
            if (connEl) setTimeout(() => connEl.classList.remove('active'), 200);
            resolve();
        };
        // A background tab stops painting frames — never leave the run hanging.
        const failsafe = setTimeout(finish, duration + 400);
        function step(t) {
            const progress = Math.min((t - start) / duration, 1);
            const pt = measure.getPointAtLength(len * easeInOut(progress));
            particle.setAttribute('cx', pt.x);
            particle.setAttribute('cy', pt.y);
            halo.setAttribute('cx', pt.x);
            halo.setAttribute('cy', pt.y);
            if (done) return;
            if (progress < 1) requestAnimationFrame(step);
            else {
                clearTimeout(failsafe);
                finish();
            }
        }
        requestAnimationFrame(step);
    });
}

// ============================================================
// TRACE MESSAGES
// ============================================================
const LOG_MSGS = {
    dataArray:     ['<strong>Array</strong> is ready in memory — the objects are already there.', '<strong>მასივი</strong> მზადაა მეხსიერებაში — ობიექტები უკვე იქაა.'],
    apiEndpoint:   ['<strong>API endpoint</strong> is just a string so far — nothing has been sent.', '<strong>API მისამართი</strong> ჯერ მხოლოდ სტრიქონია — არაფერი გაგზავნილა.'],
    localStore:    ['<strong>localStorage</strong> returned a string, not an array.', '<strong>localStorage</strong>-მ დააბრუნა სტრიქონი და არა მასივი.'],
    userInput:     ['<strong>Input</strong> gave back what the user typed.', '<strong>ინფუთმა</strong> დააბრუნა ის, რაც აკრიფეს.'],
    fetchCall:     ['<strong>fetch()</strong> sent the request and handed back a Promise.', '<strong>fetch()</strong>-მა გააგზავნა მოთხოვნა და დააბრუნა Promise.'],
    apiKey:        ['<strong>Headers</strong> built — the key travels with the request.', '<strong>ჰედერები</strong> აეწყო — გასაღები მოთხოვნასთან ერთად მიდის.'],
    jsonParse:     ['<strong>res.json()</strong> parsed the body into real objects.', '<strong>res.json()</strong>-მა სხეული ნამდვილ ობიექტებად აქცია.'],
    httpGet:       ['<strong>GET</strong> options prepared — no body, nothing changes.', '<strong>GET</strong>-ის პარამეტრები მზადაა — body არ არის, არაფერი იცვლება.'],
    httpPost:      ['<strong>POST</strong> options prepared — the body is a JSON string.', '<strong>POST</strong>-ის პარამეტრები მზადაა — body არის JSON სტრიქონი.'],
    httpPut:       ['<strong>PUT</strong> options prepared — the whole object is being replaced.', '<strong>PUT</strong>-ის პარამეტრები მზადაა — მთელი ობიექტი იცვლება.'],
    httpDelete:    ['<strong>DELETE</strong> options prepared — the id is in the URL.', '<strong>DELETE</strong>-ის პარამეტრები მზადაა — id URL-შია.'],
    tryCatch:      ['<strong>try / catch</strong> is watching — a failure below will be caught.', '<strong>try / catch</strong> აკვირდება — ქვემოთ მომხდარი შეცდომა დაიჭირება.'],
    abortCtl:      ['<strong>AbortController</strong> cancelled the previous request.', '<strong>AbortController</strong>-მა გააუქმა წინა მოთხოვნა.'],
    asyncFn:       ['<strong>async function</strong> started — await is allowed from here on.', '<strong>async ფუნქცია</strong> დაიწყო — აქედან await დაშვებულია.'],
    awaitOp:       ['<strong>await</strong> unwrapped the Promise — this is real data now.', '<strong>await</strong>-მა გახსნა Promise — ახლა ეს ნამდვილი მონაცემია.'],
    promiseThen:   ['<strong>.then()</strong> received the value in a callback.', '<strong>.then()</strong>-მა მნიშვნელობა callback-ში მიიღო.'],
    setTimeoutBlk: ['<strong>setTimeout</strong> queued the work for after the current code.', '<strong>setTimeout</strong>-მა სამუშაო მიმდინარე კოდის შემდეგ დააყენა რიგში.'],
    debounceBlk:   ['<strong>Debounce</strong> waited 300ms — only the last keystroke got through.', '<strong>Debounce</strong>-მა დაიცადა 300მწმ — მხოლოდ ბოლო დარტყმა გავიდა.'],
    eventLoop:     ['<strong>Event loop</strong>: sync first, microtasks next, timers last.', '<strong>ივენთ ლუპი</strong>: ჯერ სინქრონული, მერე microtask, ბოლოს ტაიმერი.'],
    filterOp:      ['<strong>.filter()</strong> kept only the matching items.', '<strong>.filter()</strong>-მა დატოვა მხოლოდ შესაბამისი ერთეულები.'],
    mapOp:         ['<strong>.map()</strong> reshaped every item — same length, new shape.', '<strong>.map()</strong>-მა თითო ერთეული გარდაქმნა — იგივე რაოდენობა, ახალი ფორმა.'],
    sortOp:        ['<strong>.sort()</strong> reordered a copy of the array.', '<strong>.sort()</strong>-მა მასივის ასლი გადაალაგა.'],
    reduceOp:      ['<strong>.reduce()</strong> folded the array into one value.', '<strong>.reduce()</strong>-მა მასივი ერთ მნიშვნელობად აქცია.'],
    findOp:        ['<strong>.find()</strong> returned the first match only.', '<strong>.find()</strong>-მა მხოლოდ პირველი დამთხვევა დააბრუნა.'],
    destructure:   ['<strong>Destructuring</strong> pulled the fields out by name.', '<strong>დესტრუქტურიზაციამ</strong> ველები სახელით ამოიღო.'],
    spreadOp:      ['<strong>Spread</strong> copied the array and added one item.', '<strong>Spread</strong>-მა მასივი დააკოპირა და ერთი ერთეული დაამატა.'],
    templateLit:   ['<strong>Template string</strong> turned the array into one HTML string.', '<strong>შაბლონურმა სტრიქონმა</strong> მასივი ერთ HTML სტრიქონად აქცია.'],
    stateObj:      ['<strong>State</strong> now holds the items, plus loading and error.', '<strong>State</strong>-ში ახლა ერთეულებია, ასევე loading და error.'],
    closureBlk:    ['<strong>Closure</strong> captured the data privately.', '<strong>Closure</strong>-მა მონაცემი პრივატულად დაიჭირა.'],
    saveLocal:     ['<strong>localStorage</strong> saved it as a JSON string.', '<strong>localStorage</strong>-მა შეინახა JSON სტრიქონად.'],
    querySel:      ['<strong>querySelector</strong> found the container element.', '<strong>querySelector</strong>-მა იპოვა კონტეინერი.'],
    createEl:      ['<strong>createElement</strong> built the nodes in memory.', '<strong>createElement</strong>-მა კვანძები მეხსიერებაში ააწყო.'],
    appendChildBlk:['<strong>append</strong> attached everything in one repaint.', '<strong>append</strong>-მა ყველაფერი ერთ გადახატვაში მიაბა.'],
    renderDom:     ['<strong>innerHTML</strong> wrote the markup into the page.', '<strong>innerHTML</strong>-მა მარკაპი გვერდზე ჩაწერა.'],
    eventListener: ['<strong>Click</strong> received — the handler is running.', '<strong>დაწკაპუნება</strong> მიღებულია — handler მუშაობს.'],
    delegation:    ['<strong>Delegated click</strong> found the row through closest().', '<strong>დელეგირებულმა დაწკაპუნებამ</strong> სტრიქონი closest()-ით იპოვა.'],
    formSubmit:    ['<strong>Form submit</strong> collected the fields and blocked the reload.', '<strong>ფორმის გაგზავნამ</strong> ველები შეაგროვა და გადატვირთვა შეაჩერა.'],
    classToggle:   ['<strong>classList</strong> toggled the state class.', '<strong>classList</strong>-მა კლასი გადართო.'],
    exportBlk:     ['<strong>export</strong> made the value available to other files.', '<strong>export</strong>-მა მნიშვნელობა სხვა ფაილებისთვის ხელმისაწვდომი გახადა.'],
    importBlk:     ['<strong>import</strong> brought it into this file.', '<strong>import</strong>-მა ის ამ ფაილში შემოიტანა.'],
    consoleLog:    ['<strong>console.log</strong> printed the value.', '<strong>console.log</strong>-მა მნიშვნელობა დაბეჭდა.'],
    browser:       ['<strong>Browser</strong> painted the DOM — the user can see it now.', '<strong>ბრაუზერმა</strong> დახატა DOM — მომხმარებელი ახლა ხედავს.']
};

function logForNode(type, step, ctx, error) {
    const msg = LOG_MSGS[type] ? tx(LOG_MSGS[type]) : escapeHtml(tx((NODE_DEFS[type] || {}).short || type));
    const size = ctx && ctx.value !== undefined ? ' <span class="data-pill">' + escapeHtml(sizeLabel(ctx.value)) + '</span>' : '';
    appendLog(`${tt('step')} ${step + 1}: ${msg}${size}`, error ? 'error' : '');
    if (error) appendLog('<strong>' + escapeHtml(error) + '</strong>', 'error');
}

// ============================================================
// BROWSER PREVIEW + CONSOLE
// ============================================================
function renderConsole(ctx) {
    if (!consoleBodyEl) return;
    if (!ctx.console.length) {
        consoleBodyEl.innerHTML = `<div class="console-empty">${tt('consoleEmpty')}</div>`;
        return;
    }
    consoleBodyEl.innerHTML = ctx.console
        .map(line => `<div class="console-line"><span class="arrow">&gt;</span><span>${escapeHtml(line)}</span></div>`)
        .join('');
}

const OUTCOME_BANNERS = {
    list: 'bannerList', inStock: 'bannerInStock', mapped: 'bannerMapped', sorted: 'bannerSorted',
    total: 'bannerTotal', fetched: 'bannerFetched', awaited: 'bannerAwaited', caught: 'bannerCaught',
    keyed: 'bannerKeyed', clicked: 'bannerClicked', posted: 'bannerPosted', updated: 'bannerUpdated',
    deleted: 'bannerDeleted', saved: 'bannerSaved', loaded: 'bannerLoaded', search: 'bannerSearch',
    delegated: 'bannerDelegated', chained: 'bannerChained', loop: 'bannerLoop', module: 'bannerModule',
    aborted: 'bannerAborted', crud: 'bannerCrud'
};

function showBrowserPreview(ctx) {
    const lvl = LEVELS[state.currentLevel];
    const d = DS();
    const source = ctx.renderArray || ctx.lastArray;
    const items = Array.isArray(source) ? source : [];
    // Scenario datasets carry their own banner; the shop products use the level's.
    const bannerText = d.banner ? tx(d.banner) : (OUTCOME_BANNERS[lvl.outcome] ? tt(OUTCOME_BANNERS[lvl.outcome]) : '');
    const bannerClass = ctx.live ? 'info' : '';
    const banner = bannerText ? `<div class="preview-banner ${bannerClass}">${bannerText}</div>` : '';
    const liveNote = ctx.live ? `<div class="preview-banner info">${tt('livePreview')} — ${escapeHtml(shorten(ctx.requestUrl, 70))}</div>` : '';

    $('preview-url').textContent = ctx.live ? ctx.requestUrl : d.page;

    const cards = items.slice(0, 20).map(p => {
        const flag = p && p[d.f.ok];
        return `
        <div class="product-card">
            <div class="product-name">${escapeHtml(String(nameOf(p)))}</div>
            <div class="product-meta">
                <span class="product-price">${escapeHtml(fmtNum(numOf(p)))}</span>
                ${flag === undefined ? '' : `<span class="product-stock ${flag ? '' : 'out'}">${escapeHtml(tx(flag ? d.okLabel : d.noLabel))}</span>`}
            </div>
        </div>`;
    }).join('');

    previewBody.innerHTML = `
        <h1 class="preview-title">${escapeHtml(tx(d.title))}</h1>
        <div class="preview-sub">${items.length} ${tt('items')} — ${tt('renderedBy')}</div>
        ${liveNote}
        ${banner}
        <div class="preview-grid">${cards}</div>
    `;
    previewOverlay.classList.add('show');
    appendLog(tt('browserRendered'), 'success');
}

// ============================================================
// TOASTS
// ============================================================
function showToast(title, body, kind = 'info') {
    const t = document.createElement('div');
    t.className = 'toast ' + kind;
    const icon = kind === 'success' ? I.check : kind === 'info' ? I.info : I.warning;
    t.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-body">${title ? `<strong>${title}</strong>` : ''}${body}</div>
        <button class="toast-close">${I.x}</button>
    `;
    t.querySelector('.toast-close').addEventListener('click', () => t.remove());
    // Never more than three at once — the oldest makes room.
    while (toastWrap.children.length >= 3) toastWrap.firstElementChild.remove();
    toastWrap.appendChild(t);
    setTimeout(() => {
        t.style.transition = 'opacity 0.25s, transform 0.25s';
        t.style.opacity = '0';
        t.style.transform = 'translateY(8px)';
        setTimeout(() => t.remove(), 250);
    }, 5000);
}

// ============================================================
// LEVELS
// ============================================================
function loadLevel(idx) {
    state.canvasStack = [];
    state.task = null;
    state.dataset = 'products';
    exitExampleReadonly();
    renderBreadcrumb();
    renderLibrary();
    state.currentLevel = idx;
    state.nodes = [];
    state.connections = [];
    state.selectedNodeId = null;
    state.nextNodeId = 1;
    state.nextConnId = 1;
    state.trace = [];
    renderHeader();
    renderExplainSteps();
    renderEmptyExplain();
    renderDataPanel();
    renderCodePanel();
    renderLevelsMenu();
    renderAll();
    renderTaskPanel();
}

function resetCanvas() {
    if (state.nodes.length === 0 && state.connections.length === 0) return;
    state.nodes = [];
    state.connections = [];
    state.selectedNodeId = null;
    state.nextNodeId = 1;
    state.nextConnId = 1;
    if (!state.canvasStack.length) {
        state.trace = [];
        renderExplainSteps();
        explainBodyEl.innerHTML = `<div class="explain-empty">${tt('canvasCleared')}</div>`;
        renderDataPanel();
        renderCodePanel();
    }
    renderAll();
}

// ============================================================
// REFERENCE SCHEMAS
// ============================================================
const starsHtml = (n) => Array.from({ length: 5 }, (_, i) => `<span class="star ${i < n ? '' : 'dim'}">★</span>`).join('');
const taskForExample = (exId) => TASKS.find(t => t.example === exId);

function renderExamples() {
    const body = $('examples-body');
    if (!body) return;
    body.innerHTML = '';
    const section = (title, sub) => {
        const h = document.createElement('div');
        h.className = 'gallery-section';
        h.innerHTML = `<div class="gallery-section-title">${escapeHtml(title)}</div>${sub ? `<div class="gallery-section-sub">${escapeHtml(sub)}</div>` : ''}`;
        body.appendChild(h);
    };
    const card = (ex) => {
        const el = document.createElement('div');
        el.className = 'example-card' + (ex.real ? ' real' : '');
        const task = ex.real ? taskForExample(ex.id) : null;
        el.innerHTML = `
            <div class="example-thumb">${makeExampleThumb(ex)}</div>
            ${ex.real ? `<div class="example-scenario">${escapeHtml(tx(ex.scenario))}</div>` : ''}
            <div class="example-title">${escapeHtml(tx(ex.title))}</div>
            <div class="example-diff">${starsHtml(ex.diff)}</div>
            <div class="example-desc">${escapeHtml(tx(ex.desc))}</div>
            ${task ? `<button class="example-practice">${tt('practiceTask')} →</button>` : ''}
        `;
        el.addEventListener('click', (e) => {
            if (task && e.target.closest('.example-practice')) {
                examplesOverlay.classList.remove('show');
                startTask(task);
                return;
            }
            loadExample(ex, true);
        });
        body.appendChild(el);
    };
    section(tt('realWorld'), tt('realWorldSub'));
    EXAMPLES.filter(e => e.real && !e.project).forEach(card);
    section(tt('realProjects'), tt('realProjectsSub'));
    EXAMPLES.filter(e => e.project).forEach(card);
    section(tt('conceptSchemas'), '');
    EXAMPLES.filter(e => !e.real).forEach(card);
}

// A tiny picture of a flow: curved wires and one dot per block.
function makeExampleThumb(ex) {
    const xs = ex.nodes.map(n => n.x);
    const ys = ex.nodes.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const w = maxX - minX + 220, h = maxY - minY + 110;
    const pad = 18;
    const sx = (x) => ((x - minX + 20) / w) * (240 - 2 * pad) + pad;
    const sy = (y) => ((y - minY + 20) / h) * (100 - 2 * pad) + pad;
    const dots = ex.nodes.map(n => `<circle class="thumb-dot" cx="${sx(n.x)}" cy="${sy(n.y)}" r="3.2"/>`).join('');
    const lines = ex.connections.map(([a, b]) => {
        const A = ex.nodes[a], B = ex.nodes[b];
        const x1 = sx(A.x), y1 = sy(A.y), x2 = sx(B.x), y2 = sy(B.y);
        const dx = Math.max(6, Math.abs(x2 - x1) * 0.5);
        return `<path class="thumb-line" d="M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}"/>`;
    }).join('');
    return `<svg viewBox="0 0 240 100" preserveAspectRatio="xMidYMid meet">${lines}${dots}</svg>`;
}

// Puts a pre-built flow on the canvas (read-only until "Load to canvas (edit)").
function placeFlow(nodes, connections) {
    state.nodes = [];
    state.connections = [];
    state.nextNodeId = 1;
    state.nextConnId = 1;
    state.selectedNodeId = null;
    const idMap = [];
    nodes.forEach((n) => {
        const node = { id: 'n' + state.nextNodeId++, type: n.type, x: n.x, y: n.y, flipped: false };
        state.nodes.push(node);
        idMap.push(node.id);
    });
    connections.forEach(([a, b]) => {
        state.connections.push({ id: 'c' + state.nextConnId++, from: idMap[a], to: idMap[b] });
    });
}

let _currentExample = null;
function loadExample(ex, readonly) {
    _currentExample = ex;
    state.canvasStack = [];
    state.task = null;
    state.dataset = ex.dataset || 'products';
    state.trace = [];
    renderBreadcrumb();
    renderLibrary();
    placeFlow(ex.nodes, ex.connections);
    state.readonly = !!readonly;
    renderHeader();
    renderExplainSteps();
    renderAll();
    renderDataPanel();
    renderCodePanel();
    renderTaskPanel();
    examplesOverlay.classList.remove('show');
    tasksOverlay.classList.remove('show');
    const banner = $('example-readonly-banner');
    if (banner) banner.classList.toggle('show', !!readonly);
    requestAnimationFrame(fitView);
}

// ============================================================
// REAL-WORLD TASKS
// ============================================================
function loadTasksDone() {
    try {
        const raw = localStorage.getItem(TASKS_STORE_KEY);
        if (raw) state.tasksDone = new Set(JSON.parse(raw));
    } catch (_) {}
}
function saveTasksDone() {
    try { localStorage.setItem(TASKS_STORE_KEY, JSON.stringify([...state.tasksDone])); } catch (_) {}
}

// The gallery of tasks — one card per real-world brief.
function renderTasks() {
    const body = $('tasks-body');
    if (!body) return;
    body.innerHTML = '';
    TASKS.forEach((task, i) => {
        const ex = EXAMPLES.find(e => e.id === task.example);
        const done = state.tasksDone.has(task.id);
        const el = document.createElement('div');
        el.className = 'task-card' + (done ? ' done' : '') + (state.task === task ? ' current' : '');
        el.innerHTML = `
            <div class="task-card-top">
                <span class="task-card-num">${done ? '✓' : i + 1}</span>
                <span class="task-card-context">${escapeHtml(tx(task.context))}</span>
                ${done ? `<span class="task-card-badge">${tt('completedBadge')}</span>` : ''}
            </div>
            <div class="task-card-title">${escapeHtml(tx(task.title))}</div>
            <div class="task-card-story">${escapeHtml(tx(task.story))}</div>
            <div class="task-card-meta">
                <span class="example-diff">${starsHtml(task.diff)}</span>
                <span>${ex ? ex.nodes.length : '?'} ${tt('blocksCount')}</span>
                <span>${task.reqs.length + 1} ${tt('reqsCount')}</span>
            </div>
            <div class="task-card-actions">
                <button class="btn btn-primary btn-sm" data-act="start">${tt('startTask')}</button>
                <button class="btn btn-ghost btn-sm" data-act="solution">${tt('viewSolution')}</button>
            </div>
        `;
        el.querySelector('[data-act="start"]').addEventListener('click', () => startTask(task));
        el.querySelector('[data-act="solution"]').addEventListener('click', () => { if (ex) loadExample(ex, true); });
        body.appendChild(el);
    });
}

function startTask(task) {
    state.canvasStack = [];
    exitExampleReadonly();
    state.task = task;
    state.dataset = task.dataset;
    state.taskUi = { blocks: false, solution: false, collapsed: false, story: false };
    state.nodes = [];
    state.connections = [];
    state.selectedNodeId = null;
    state.nextNodeId = 1;
    state.nextConnId = 1;
    state.trace = [];
    state.undoStack.length = 0;
    state.redoStack.length = 0;
    tasksOverlay.classList.remove('show');
    renderBreadcrumb();
    renderLibrary();
    renderHeader();
    renderExplainSteps();
    explainBodyEl.innerHTML = `<div class="explain-empty"><strong>${escapeHtml(tx(task.title))}.</strong> ${escapeHtml(tx(task.story))}</div>`;
    renderDataPanel();
    renderCodePanel();
    renderAll();
    renderTaskPanel();
    state.zoom = 1;
    applyZoom();
    canvasWrapEl.scrollLeft = 0;
    canvasWrapEl.scrollTop = 0;
    showToast(tx(task.title), tt('taskTip'), 'info');
}

// Leaves task mode but keeps whatever the student built on the canvas.
function exitTask() {
    if (!state.task) return;
    state.task = null;
    renderHeader();
    renderExplainSteps();
    renderTaskPanel();
    renderLevelsMenu();
}

// The top-level graph, even while the student is inside a block.
function topGraph() {
    if (state.canvasStack.length) {
        const s = state.canvasStack[0].snapshot;
        return { nodes: s.nodes, connections: s.connections };
    }
    return { nodes: state.nodes, connections: state.connections };
}

// Facts about the student's graph that the task rules ask about.
function graphFacts(nodes, connections) {
    const typeOf = new Map(nodes.map(n => [n.id, n.type]));
    const adj = new Map(nodes.map(n => [n.id, []]));
    connections.forEach(c => { if (adj.has(c.from) && typeOf.has(c.to)) adj.get(c.from).push(c.to); });
    const idsOf = (t) => nodes.filter(n => n.type === t).map(n => n.id);
    const reachTypes = (startId) => {
        const seen = new Set();
        const queue = [...adj.get(startId)];
        while (queue.length) {
            const id = queue.shift();
            if (seen.has(id)) continue;
            seen.add(id);
            queue.push(...adj.get(id));
        }
        return new Set([...seen].map(id => typeOf.get(id)));
    };
    return {
        count: nodes.length,
        has: (t) => idsOf(t).length > 0,
        link: (a, b) => connections.some(c => typeOf.get(c.from) === a && typeOf.get(c.to) === b),
        path: (a, b) => idsOf(a).some(id => reachTypes(id).has(b)),
        out: (t) => Math.max(0, ...idsOf(t).map(id => adj.get(id).length)),
        connected: () => nodes.length > 1 && nodes.every(n => connections.some(c => c.from === n.id || c.to === n.id))
    };
}

function evalRule(rule, g) {
    switch (rule[0]) {
        case 'has':       return g.has(rule[1]);
        case 'not':       return !g.has(rule[1]);
        case 'link':      return g.link(rule[1], rule[2]);
        case 'path':      return g.path(rule[1], rule[2]);
        case 'out':       return g.out(rule[1]) >= rule[2];
        case 'connected': return g.connected();
        default:          return false;
    }
}

// One row per requirement, plus "every block is connected" at the end.
function evaluateTask(task) {
    const { nodes, connections } = topGraph();
    const g = graphFacts(nodes, connections);
    const reqs = task.reqs.concat([{ text: T.reqConnected, rules: [['connected']] }]);
    return reqs.map(r => {
        // A "do not use X" rule is only worth a tick once something is built.
        const onlyGuards = r.rules.every(x => x[0] === 'not' || x[0] === 'connected');
        const ok = r.rules.every(x => evalRule(x, g)) && (!onlyGuards || g.count >= 3);
        return { text: r.text, ok };
    });
}

// The reference flow, cut into readable chains: "A → B → C".
function solutionSegments(ex) {
    const outs = ex.nodes.map(() => []);
    const ins = ex.nodes.map(() => 0);
    ex.connections.forEach(([a, b]) => { outs[a].push(b); ins[b]++; });
    const used = new Set();
    const segs = [];
    ex.connections.forEach(([a, b]) => {
        if (used.has(a + '>' + b)) return;
        used.add(a + '>' + b);
        const seg = [a, b];
        let cur = b;
        while (outs[cur].length === 1 && ins[cur] === 1) {
            const next = outs[cur][0];
            if (used.has(cur + '>' + next)) break;
            used.add(cur + '>' + next);
            seg.push(next);
            cur = next;
        }
        segs.push(seg.map(i => ex.nodes[i].type));
    });
    return segs;
}

let _taskSig = '';
function renderTaskPanel() {
    if (!taskPanelEl) return;
    const task = state.task;
    if (!task) {
        taskPanelEl.classList.remove('show');
        taskPanelEl.innerHTML = '';
        _taskSig = '';
        return;
    }
    const results = evaluateTask(task);
    const ui = state.taskUi;
    const done = results.filter(r => r.ok).length;
    const total = results.length;
    const sig = [lang, task.id, ui.blocks, ui.solution, ui.collapsed, ui.story, state.tasksDone.has(task.id), results.map(r => (r.ok ? 1 : 0)).join('')].join('|');
    if (sig === _taskSig && taskPanelEl.classList.contains('show')) return;
    _taskSig = sig;

    const ex = EXAMPLES.find(e => e.id === task.example);
    const pct = Math.round((done / total) * 100);
    const label = (t) => escapeHtml(tx(NODE_DEFS[t].label));
    const groupIndex = (t) => LIBRARY_GROUPS.findIndex(g => g.items.includes(t));
    // Listed by library group, not by flow order — it should not give the answer away.
    const blockTypes = ex ? [...new Set(ex.nodes.map(n => n.type))].sort((a, b) => groupIndex(a) - groupIndex(b) || LIBRARY_GROUPS[groupIndex(a)].items.indexOf(a) - LIBRARY_GROUPS[groupIndex(b)].items.indexOf(b)) : [];
    const isDone = state.tasksDone.has(task.id);

    taskPanelEl.classList.add('show');
    taskPanelEl.classList.toggle('collapsed', ui.collapsed);
    taskPanelEl.classList.toggle('complete', done === total);
    taskPanelEl.innerHTML = `
        <div class="task-head">
            <div class="task-head-icon">${I.target}</div>
            <div class="task-head-text">
                <div class="task-eyebrow" title="${tt('taskEyebrow')}">${escapeHtml(tx(task.context))}</div>
                <div class="task-title">${escapeHtml(tx(task.title))}${isDone ? ' <span class="task-done-tick">✓</span>' : ''}</div>
            </div>
            <span class="task-mini">${done}/${total}</span>
            <button class="task-icon-btn" data-act="collapse" title="${tt(ui.collapsed ? 'expand' : 'collapse')}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="${ui.collapsed ? '6 9 12 15 18 9' : '18 15 12 9 6 15'}"/></svg>
            </button>
            <button class="task-icon-btn" data-act="exit" title="${tt('exitTask')}">${I.close}</button>
        </div>
        <div class="task-body">
            <p class="task-story ${ui.story ? 'expanded' : ''}" data-act="story" title="${tt(ui.story ? 'collapse' : 'expand')}">${escapeHtml(tx(task.story))}</p>
            <div class="task-progress">
                <div class="task-progress-bar"><span style="width:${pct}%"></span></div>
                <div class="task-progress-label">${done} / ${total} ${tt('taskProgress')}</div>
            </div>
            <ul class="task-reqs">
                ${results.map(r => `
                    <li class="${r.ok ? 'ok' : ''}">
                        <span class="task-check">${r.ok ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}</span>
                        <span class="task-req-text">${escapeHtml(tx(r.text))}</span>
                    </li>`).join('')}
            </ul>
            <div class="task-tools">
                <button class="task-chip-btn ${ui.blocks ? 'on' : ''}" data-act="blocks">${I.layers}<span>${tt(ui.blocks ? 'hideBlocks' : 'showBlocks')}</span></button>
                <button class="task-chip-btn ${ui.solution ? 'on' : ''}" data-act="solution">${I.info}<span>${tt(ui.solution ? 'hideSolution' : 'showSolution')}</span></button>
            </div>
            ${ui.blocks ? `
                <div class="task-sub-label">${tt('taskBlocks')}</div>
                <div class="task-blocks">
                    ${blockTypes.map(t => `<button class="task-block-chip" data-type="${t}" title="${tt('addToCanvas')}"><span class="lib-icon ${NODE_DEFS[t].color || ''}">${iconFor(t)}</span>${label(t)}</button>`).join('')}
                </div>` : ''}
            ${ui.solution && ex ? `
                <div class="task-sub-label">${tt('solutionLabel')}</div>
                <div class="task-solution">
                    ${solutionSegments(ex).map(seg => `<div class="task-seg">${seg.map(label).join(' <span class="arr">→</span> ')}</div>`).join('')}
                </div>` : ''}
            <button class="btn btn-accent task-check-btn" data-act="check">${I.check}<span>${tt('checkTask')}</span></button>
        </div>
    `;
}

function checkTask() {
    const task = state.task;
    if (!task) return;
    const results = evaluateTask(task);
    const missing = results.find(r => !r.ok);
    if (!missing) {
        const first = !state.tasksDone.has(task.id);
        state.tasksDone.add(task.id);
        saveTasksDone();
        showToast(tt('taskDone'), tt('taskDoneMsg'), 'success');
        appendLog('<strong>' + escapeHtml(tx(task.title)) + '</strong> — ' + tt('taskDone'), 'success');
        if (first) taskPanelEl.classList.add('celebrate');
        setTimeout(() => taskPanelEl.classList.remove('celebrate'), 1200);
        _taskSig = '';
        renderTaskPanel();
        return;
    }
    const msg = tt('taskNext') + ' <strong>' + escapeHtml(tx(missing.text)) + '</strong>';
    showToast(tt('taskMissing'), msg, 'warning');
    appendLog(msg, 'warning');
}

// Adds a block near the middle of what the student is looking at.
function addNodeAtView(type) {
    const r = canvasWrapEl.getBoundingClientRect();
    const cx = (canvasWrapEl.scrollLeft + r.width / 2) / state.zoom;
    const cy = (canvasWrapEl.scrollTop + r.height / 2) / state.zoom;
    const k = state.nodes.length % 6;
    addNode(type, cx + (k - 2.5) * 34, cy + (k - 2.5) * 26);
}

taskPanelEl.addEventListener('mousedown', (e) => e.stopPropagation());
taskPanelEl.addEventListener('click', (e) => {
    const chip = e.target.closest('.task-block-chip');
    if (chip) { addNodeAtView(chip.dataset.type); return; }
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === 'collapse') state.taskUi.collapsed = !state.taskUi.collapsed;
    if (act === 'story') state.taskUi.story = !state.taskUi.story;
    if (act === 'blocks') state.taskUi.blocks = !state.taskUi.blocks;
    if (act === 'solution') state.taskUi.solution = !state.taskUi.solution;
    if (act === 'check') { checkTask(); return; }
    if (act === 'exit') { exitTask(); return; }
    renderTaskPanel();
});

function exitExampleReadonly() {
    state.readonly = false;
    const banner = $('example-readonly-banner');
    if (banner) banner.classList.remove('show');
}

// ============================================================
// THEME + LANGUAGE
// ============================================================
function setTheme(theme, persist) {
    state.theme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
    if (persist) { try { localStorage.setItem(THEME_STORE_KEY, state.theme); } catch (_) {} }
}
// Dark is the default look; a theme is only remembered once someone picks one.
function loadTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_STORE_KEY); } catch (_) {}
    setTheme(saved || 'dark', false);
}
function setLanguage(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('jsl-lang', lang); } catch (_) {}
    renderUIStrings();
    renderHeader();
    renderLibrary();
    renderLevelsMenu();
    renderApiOverlay();
    renderAll();
    renderDataPanel();
    renderCodePanel();
    renderTaskPanel();
    if (tasksOverlay.classList.contains('show')) renderTasks();
    if (examplesOverlay.classList.contains('show')) renderExamples();
    if (explainBodyEl.querySelector('.explain-empty') && !state.task) renderEmptyExplain();
}

// ============================================================
// EVENT WIRING
// ============================================================
$('run-btn').addEventListener('click', runFlow);
$('check-btn').addEventListener('click', checkAnswer);
$('reset-btn').addEventListener('click', resetCanvas);

levelsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    levelsDropdown.classList.toggle('open');
});
document.addEventListener('click', (e) => {
    if (!levelsDropdown.contains(e.target)) levelsDropdown.classList.remove('open');
});

missionHintBtn.addEventListener('click', () => {
    const hint = state.task ? state.task.hint : LEVELS[state.currentLevel].hint;
    showToast(tt('hint'), escapeHtml(tx(hint)), 'info');
});

document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => setLanguage(b.dataset.lang));
});
$('theme-toggle').addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark', true));

document.querySelectorAll('.panel-tab').forEach(b => {
    b.addEventListener('click', () => setPanel(b.dataset.tab));
});

librarySearchEl.addEventListener('input', (e) => {
    state.librarySearch = e.target.value;
    renderLibrary();
});
librarySearchEl.addEventListener('keydown', (e) => e.stopPropagation());

const examplesOverlay = $('examples-overlay');
$('examples-toggle').addEventListener('click', () => {
    renderExamples();
    examplesOverlay.classList.add('show');
});
$('examples-close').addEventListener('click', () => examplesOverlay.classList.remove('show'));
examplesOverlay.addEventListener('click', (e) => {
    if (e.target === examplesOverlay) examplesOverlay.classList.remove('show');
});
$('example-load-editable').addEventListener('click', () => {
    if (_currentExample) loadExample(_currentExample, false);
    exitExampleReadonly();
});

$('tasks-toggle').addEventListener('click', () => {
    renderTasks();
    tasksOverlay.classList.add('show');
});
$('tasks-close').addEventListener('click', () => tasksOverlay.classList.remove('show'));
tasksOverlay.addEventListener('click', (e) => {
    if (e.target === tasksOverlay) tasksOverlay.classList.remove('show');
});

const apiOverlay = $('api-overlay');
$('api-toggle').addEventListener('click', () => {
    renderApiOverlay();
    apiOverlay.classList.add('show');
});
$('api-close').addEventListener('click', () => apiOverlay.classList.remove('show'));
apiOverlay.addEventListener('click', (e) => {
    if (e.target === apiOverlay) apiOverlay.classList.remove('show');
});

$('preview-close').addEventListener('click', () => previewOverlay.classList.remove('show'));
previewOverlay.addEventListener('click', (e) => {
    if (e.target === previewOverlay) previewOverlay.classList.remove('show');
});

$('zoom-in').addEventListener('click', () => setZoom(state.zoom + 0.1));
$('zoom-out').addEventListener('click', () => setZoom(state.zoom - 0.1));
$('zoom-level').addEventListener('click', () => setZoom(1));
$('fit-btn').addEventListener('click', fitView);
$('autolayout-btn').addEventListener('click', autoLayout);
$('snap-toggle').addEventListener('click', () => {
    state.snapToGrid = !state.snapToGrid;
    $('snap-toggle').classList.toggle('active', state.snapToGrid);
    showToast('', state.snapToGrid ? tt('snapOn') : tt('snapOff'), 'info');
});
$('undo-btn').addEventListener('click', undo);
$('redo-btn').addEventListener('click', redo);

document.addEventListener('keydown', (e) => {
    const inField = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT';
    if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) { e.preventDefault(); setZoom(state.zoom + 0.1); return; }
    if ((e.ctrlKey || e.metaKey) && e.key === '-') { e.preventDefault(); setZoom(state.zoom - 0.1); return; }
    if ((e.ctrlKey || e.metaKey) && e.key === '0') { e.preventDefault(); setZoom(1); return; }
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); if (!inField) undo(); return; }
    if ((e.ctrlKey || e.metaKey) && (e.shiftKey && (e.key === 'z' || e.key === 'Z') || e.key === 'y' || e.key === 'Y')) { e.preventDefault(); if (!inField) redo(); return; }
    if ((e.key === 'Delete' || e.key === 'Backspace') && state.selectedNodeId && !inField) removeNode(state.selectedNodeId);
    if (e.key === 'Escape') {
        previewOverlay.classList.remove('show');
        examplesOverlay.classList.remove('show');
        tasksOverlay.classList.remove('show');
        apiOverlay.classList.remove('show');
        levelsDropdown.classList.remove('open');
    }
});

canvasWrapEl.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        const r = canvasWrapEl.getBoundingClientRect();
        setZoom(state.zoom + (-Math.sign(e.deltaY) * 0.1), { x: e.clientX - r.left, y: e.clientY - r.top });
    }
}, { passive: false });

// ============================================================
// PAN (space + drag, or middle mouse)
// ============================================================
function inFormField(target) {
    return target && target.matches && target.matches('input, textarea, select, [contenteditable]');
}
window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    if (inFormField(e.target)) return;
    if (state.spacePressed) return;
    state.spacePressed = true;
    canvasWrapEl.classList.add('pan-ready');
    e.preventDefault();
});
window.addEventListener('keyup', (e) => {
    if (e.code !== 'Space') return;
    state.spacePressed = false;
    canvasWrapEl.classList.remove('pan-ready');
});
canvasWrapEl.addEventListener('mousedown', (e) => {
    const isMiddle = e.button === 1;
    const isSpaceDrag = state.spacePressed && e.button === 0;
    // Dragging the empty background pans too — a plain click still deselects.
    const isBackground = e.button === 0 && [canvasWrapEl, canvasStageEl, canvasEl, svgEl, nodesContainer].includes(e.target);
    if (!isMiddle && !isSpaceDrag && !isBackground) return;
    if (e.target.closest('.node-btn, .port, .lib-item')) return;
    e.preventDefault();
    state.panning = true;
    canvasWrapEl.classList.add('panning');
    const startX = e.clientX, startY = e.clientY;
    const startScrollLeft = canvasWrapEl.scrollLeft, startScrollTop = canvasWrapEl.scrollTop;
    let moved = false;
    const onMove = (ev) => {
        if (Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) > 3) moved = true;
        canvasWrapEl.scrollLeft = startScrollLeft - (ev.clientX - startX);
        canvasWrapEl.scrollTop = startScrollTop - (ev.clientY - startY);
    };
    const onUp = () => {
        state.panning = false;
        state.justPanned = moved;
        canvasWrapEl.classList.remove('panning');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
});
canvasWrapEl.addEventListener('auxclick', (e) => { if (e.button === 1) e.preventDefault(); });

// ============================================================
// PANELS: drag the strips between panels to resize them; fold the library
// into an icon rail; hide the inspector / bottom panel with the double arrow
// that appears on their edge. Sizes and collapsed state are remembered.
// ============================================================
const panels = { lib: false, insp: false, explain: false };
let railTipEl = null;

function applyPanels() {
    const app = document.querySelector('.app');
    if (!app) return;
    app.classList.toggle('lib-collapsed', panels.lib);
    app.classList.toggle('insp-collapsed', panels.insp);
    app.classList.toggle('explain-collapsed', panels.explain);
    // the collapsed bottom panel keeps exactly its header row
    const head = document.querySelector('.explain-header');
    if (head && head.offsetHeight) document.documentElement.style.setProperty('--explain-head-h', (head.offsetHeight + 2) + 'px');
    const setTitle = (id, key) => { const el = $(id); if (el) el.title = tt(key); };
    setTitle('library-collapse', panels.lib ? 'expandLibrary' : 'collapseLibrary');
    setTitle('inspector-collapse', panels.insp ? 'showInspector' : 'hideInspector');
    setTitle('explain-collapse', panels.explain ? 'showPanel' : 'hidePanel');
    setTitle('resizer-library', 'dragResize');
    setTitle('resizer-inspector', panels.insp ? 'showInspector' : 'dragResize');
    setTitle('resizer-explain', panels.explain ? 'showPanel' : 'dragResize');
}

function togglePanel(name, collapsed = !panels[name]) {
    panels[name] = collapsed;
    if (name === 'lib' && collapsed && state.librarySearch) {
        // the search box is hidden on the rail, so a leftover filter would hide icons for no visible reason
        state.librarySearch = '';
        $('library-search').value = '';
        renderLibrary();
    }
    hideRailTip();
    applyPanels();
    try { localStorage.setItem(PANELS_STORE_KEY, JSON.stringify(panels)); } catch (_) {}
}

function hideRailTip() { if (railTipEl) railTipEl.classList.remove('show'); }

function initPanels() {
    const root = document.documentElement;
    const app = document.querySelector('.app');
    const explainEl = document.querySelector('.explain');
    const libraryEl = document.querySelector('.library');
    const inspectorEl = document.querySelector('.inspector');
    const LIB_MIN = 180, LIB_MAX = 480;
    const INSP_MIN = 260, INSP_MAX = 560;
    const EXP_MIN = 90, EXP_MAX = 520;

    function saveLayout() {
        try {
            localStorage.setItem(LAYOUT_STORE_KEY, JSON.stringify({
                libraryW: parseInt(root.style.getPropertyValue('--library-w')) || undefined,
                inspectorW: parseInt(root.style.getPropertyValue('--inspector-w')) || undefined,
                explainH: parseInt(root.style.getPropertyValue('--explain-h')) || undefined,
            }));
        } catch (_) {}
    }

    function loadLayout() {
        try {
            const l = JSON.parse(localStorage.getItem(LAYOUT_STORE_KEY) || '{}');
            if (l.libraryW) root.style.setProperty('--library-w', l.libraryW + 'px');
            if (l.inspectorW) root.style.setProperty('--inspector-w', l.inspectorW + 'px');
            if (l.explainH) root.style.setProperty('--explain-h', l.explainH + 'px');
        } catch (_) {}
        try {
            const p = JSON.parse(localStorage.getItem(PANELS_STORE_KEY) || '{}');
            panels.lib = !!p.lib; panels.insp = !!p.insp; panels.explain = !!p.explain;
        } catch (_) {}
    }

    // A strip resizes on drag. Its arrow button toggles instead, and on a collapsed panel
    // any press on the strip just brings the panel back.
    function startDrag(e, resizerEl, panelName, bodyClass, onMove) {
        if (e.button !== 0 || e.target.closest('.edge-toggle')) return;
        e.preventDefault();
        if (panels[panelName]) { togglePanel(panelName, false); return; }
        resizerEl.classList.add('active');
        document.body.classList.add(bodyClass);
        const onUp = () => {
            resizerEl.classList.remove('active');
            document.body.classList.remove(bodyClass);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            saveLayout();
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    }

    function dragCol(resizerEl, varName, targetEl, min, max, fromRight, panelName) {
        if (!resizerEl) return;
        resizerEl.addEventListener('mousedown', (e) => {
            const startX = e.clientX;
            const startW = targetEl.getBoundingClientRect().width;
            startDrag(e, resizerEl, panelName, 'resizing-col', (ev) => {
                const delta = fromRight ? startX - ev.clientX : ev.clientX - startX;
                root.style.setProperty(varName, Math.min(max, Math.max(min, Math.round(startW + delta))) + 'px');
            });
        });
    }

    function dragRow(resizerEl) {
        if (!resizerEl) return;
        resizerEl.addEventListener('mousedown', (e) => {
            const startY = e.clientY;
            const startH = explainEl.getBoundingClientRect().height;
            startDrag(e, resizerEl, 'explain', 'resizing-row', (ev) => {
                root.style.setProperty('--explain-h', Math.min(EXP_MAX, Math.max(EXP_MIN, Math.round(startH + startY - ev.clientY))) + 'px');
            });
        });
    }

    // restore the saved state without playing the collapse animation on page load
    loadLayout();
    app.style.transition = explainEl.style.transition = 'none';
    applyPanels();
    requestAnimationFrame(() => requestAnimationFrame(() => { app.style.transition = explainEl.style.transition = ''; }));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(applyPanels);

    dragCol($('resizer-library'), '--library-w', libraryEl, LIB_MIN, LIB_MAX, false, 'lib');
    dragCol($('resizer-inspector'), '--inspector-w', inspectorEl, INSP_MIN, INSP_MAX, true, 'insp');
    dragRow($('resizer-explain'));

    $('library-collapse').addEventListener('click', () => togglePanel('lib'));
    $('inspector-collapse').addEventListener('click', () => togglePanel('insp'));
    $('explain-collapse').addEventListener('click', () => togglePanel('explain'));
    // the collapsed bottom panel is still a bar: clicking it (or one of its tabs) opens it
    document.querySelector('.explain-header').addEventListener('click', () => { if (panels.explain) togglePanel('explain', false); });

    // icon rail: show the block's name next to the hovered icon
    railTipEl = document.createElement('div');
    railTipEl.className = 'rail-tip';
    document.body.appendChild(railTipEl);
    libraryListEl.addEventListener('mouseover', (e) => {
        const item = e.target.closest('.lib-item');
        if (!panels.lib || !item) return;
        const r = item.getBoundingClientRect();
        const label = item.querySelector('.lib-label');
        railTipEl.textContent = label ? label.textContent.trim() : '';
        railTipEl.style.left = (r.right + 12) + 'px';
        railTipEl.style.top = (r.top + r.height / 2) + 'px';
        railTipEl.classList.add('show');
    });
    libraryListEl.addEventListener('mouseout', hideRailTip);
    libraryListEl.addEventListener('mousedown', hideRailTip);
    libraryListEl.addEventListener('scroll', hideRailTip);
}

// ============================================================
// BOOT
// ============================================================
function preloadStarter() {
    const a = addNode('dataArray', 220, 300);
    const b = addNode('templateLit', 520, 300);
    if (a && b) state.connections.push({ id: 'c' + state.nextConnId++, from: a.id, to: b.id });
    state.undoStack.length = 0;
    renderAll();
}

(function boot() {
    try {
        const savedLang = localStorage.getItem('jsl-lang');
        if (savedLang === 'ka') {
            lang = 'ka';
            document.documentElement.lang = 'ka';
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === 'ka'));
        }
    } catch (_) {}
    loadTheme();
    loadApiConfig();
    loadTasksDone();
    initPanels();
    renderUIStrings();
    renderLibrary();
    renderLevelsMenu();
    renderHeader();
    renderExplainSteps();
    renderEmptyExplain();
    renderDataPanel();
    renderApiOverlay();
    applyZoom();
    preloadStarter();
    renderCodePanel();
    setPanel('trace');
})();
