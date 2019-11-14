(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2iGO":function(n,e,a){"use strict";a.r(e),e.default='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarEventTitleFormatter,\n  CalendarView\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { CustomEventTitleFormatter } from <span class="hljs-string">\'./custom-event-title-formatter.provider\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter\n    }\n  ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'An event\'</span>,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      color: colors.red\n    }\n  ];\n}\n'},"5gQ1":function(n,e,a){"use strict";a.r(e),e.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},"6cKE":function(n,e,a){"use strict";a.r(e),e.default="import { LOCALE_ID, Inject, Injectable } from '@angular/core';\nimport { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\n@Injectable()\nexport class CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  constructor(@Inject(LOCALE_ID) private locale: string) {\n    super();\n  }\n\n  // you can override any of the methods defined in the parent class\n\n  month(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n\n  week(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n\n  day(event: CalendarEvent): string {\n    return `&lt;b&gt;${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}&lt;/b&gt; ${event.title}`;\n  }\n}\n"},Djkr:function(n,e,a){"use strict";a.r(e),e.default="import { LOCALE_ID, Inject, Injectable } from '@angular/core';\nimport { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\n@Injectable()\nexport class CustomEventTitleFormatter extends CalendarEventTitleFormatter {\n  constructor(@Inject(LOCALE_ID) private locale: string) {\n    super();\n  }\n\n  // you can override any of the methods defined in the parent class\n\n  month(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n\n  week(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n\n  day(event: CalendarEvent): string {\n    return `<b>${new DatePipe(this.locale).transform(\n      event.start,\n      'h:m a',\n      this.locale\n    )}</b> ${event.title}`;\n  }\n}\n"},JUQi:function(n,e,a){"use strict";a.r(e),e.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},R28d:function(n,e,a){"use strict";a.r(e),e.default='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="events"\n    [activeDayIsOpen]="true"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="events"\n  >\n  </mwl-calendar-day-view>\n</div>\n'},VZSj:function(n,e,a){"use strict";a.r(e),a.d(e,"sources",(function(){return s}));var s=[{filename:"component.ts",contents:{raw:a("a/+y"),highlighted:a("2iGO")}},{filename:"custom-event-title-formatter.provider.ts",contents:{raw:a("Djkr"),highlighted:a("6cKE")}},{filename:"template.html",contents:{raw:a("R28d"),highlighted:a("pxW/")}},{filename:"module.ts",contents:{raw:a("5gQ1"),highlighted:a("JUQi")}}]},"a/+y":function(n,e,a){"use strict";a.r(e),e.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarEventTitleFormatter,\n  CalendarView\n} from 'angular-calendar';\nimport { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarEventTitleFormatter,\n      useClass: CustomEventTitleFormatter\n    }\n  ]\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'An event',\n      start: new Date(),\n      color: colors.red\n    }\n  ];\n}\n"},"pxW/":function(n,e,a){"use strict";a.r(e),e.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n    [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'}}]);