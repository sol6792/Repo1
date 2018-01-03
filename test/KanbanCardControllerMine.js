/**
 * * @author Emilio
 * Copyright 2012-2015 Lucidsoft Inc. All rights reserved.
 * Controller/KanbanCardController.js
 */
Ext.define('RealTimeKanbanBoard.controller.KanbanCardController', {
	extend: 'Ext.app.Controller',
	xtype: 'kanbanCardController',
	config: {
		refs: {
			cardFanBtn: '#cardFanBtn',
			newCardBtn: '#newCardBtn',
			newPostSubscriberView: 'newPostSubscriber',
			searchBtn: '#searchBtn',
			newPostView: 'cardInfo',
			categoryTextBtn: 'cardInfo #categoryBtn',
			assignUserBtn: 'cardInfo #assignUserBtn',
			isDependencyCheck: 'cardInfo #isDependencyCheck',
			logAssignUserBtn: 'logTime #logAssignUserBtn',
			assignSubscribers: 'newPostSubscriber #assignSubscribers',
			linkView: 'linkView',
			linkProjectBoardBtn: 'linkView #assignProjectBoard',
			linkProjectBoard: 'linkView #linkProjectBoard',
			linkCard: 'linkView #linkCard',
			linkUrl: 'linkView #linkUrl',
			assignCard: 'linkView #assignCard',
			priorityBtn: 'cardInfo #priorityBtn',
			estimationNumberField: 'cardInfo #estimationNumberField',
			assignAccountBtn: 'linkView #assignAccountBtn',
			assignOpportunityBtn: 'linkView #assignOpportunityBtn',
			assignContactBtn: 'linkView #assignContactBtn',
			assignCaseBtn: 'linkView #assignCaseBtn',
			assignAccountHiddenField: 'cardInfo #assignAccountHiddenField',
			assignOppHiddenField: 'cardInfo #assignOppHiddenField',
			assignOppStageHiddenField: 'cardInfo #assignOppStageHiddenField',
			assignContactHiddenField: 'cardInfo #assignContactHiddenField',
			assignCaseHiddenField: 'cardInfo #assignCaseHiddenField',
			assignCaseStatusHiddenField: 'cardInfo #assignCaseStatusHiddenField',
			assignCasePriorityHiddenField: 'cardInfo #assignCasePriorityHiddenField',
			linkAccountBtn: 'linkView #linkAccountBtn',
			linkOpportunityBtn: 'linkView #linkOpportunityBtn',
			linkContactBtn: 'linkView #linkContactBtn',
			linkCaseBtn: 'linkView #linkCaseBtn',
			newPostTasksView: 'newPostTasks',
			descriptionTaskField: 'newPostTasks #descriptionTaskField',
			subjectTaskField: 'newPostTasks #subjectTaskField',
			assignUserBtnTask: 'newPostTasks #assignUserBtnTask',
			criticalBtnFieldsetTask: 'newPostTasks #criticalBtnFieldsetTask',
			priorityBtnTask: 'newPostTasks #priorityBtnTask',
			priorityTask: 'newPostTasks #priorityTask',
			assignUserHiddenFieldTask: 'newPostTasks #assignUserHiddenFieldTask',
			tasklistofKanban: 'newPostTasks list[itemId=TaskOfkanbanCardList]',
			subscriberListofKanban: 'list[itemId=subscriberkanbanCardList]',
			statusViewList: 'list[itemId=statusViewList]',
			newPostForceId: '#cardCmpForceId',
			newPostCopyUrl: 'panel #newPostCopyUrl',
			newPostDeleteBtn: 'panel #newPostDeleteBtn',
			newPostCancelBtn: 'panel #newPostCancelBtn',
			newPostSaveBtn: 'panel #newPostSaveBtn',
			newMultiPostSaveBtn: 'panel #newMultiPostSaveBtn',
			newPostCreateBtn: 'panel #newPostCreateBtn',
			newPostSaveTaskBtn: 'newPostTasks #addTaskCard',
			newPostSaveSubscriberBtn: 'newPostSubscriber #addSubscibers',
			assignSubscribersId: 'newPostSubscriber #assignSubscribersId',
			newPostToolbar: 'panel #newPostToolbar',
			newPostDurationUnits: 'cardInfo #durationUnitField',
			newPostStartDatePickerField: 'cardInfo #StartDatePickerField',
			newPostDueDatePickerField: 'cardInfo #dueDatePickerField',
			newPostStartDateField: 'cardInfo #StartDateField',
			newPostDueDateField: 'cardInfo #dueDateField',
			editCardMenuItem: 'editCardMenu>list[name=editCardMenuItem]',
			editMultiCardMenu: 'editMultiCardMenu>list[name=editMultiCardMenuItem]',
			editCardLayoutContainer: 'editCardLayoutContainer',
			editMultiCardLayoutContainer: 'editMultiCardLayoutContainer',
			cardAllStickerView: 'stickersView #cardAllStickerView',
			logTime: 'logTime',
			logTimeListView: 'logTime #logTimeListView',
			addLogTime: 'logTime #addLogTime',
			CustomFields: 'CustomFields',
			stickersView: 'stickersView',
			cardEditList: 'cardEditPopUp #cardEditList',
			filterSearchField: 'panel #filterSearchField',
			advanced_Filter: 'advanceFilter #advanced_Filter',
			advanced_FilterClear: 'advanceFilter #advanced_FilterClear'
		},
		control: {
			// --- sencha
			//@formatter:on
			kanbandataview: {
				kanbancarddynamictap: 'onLinkToIconTap',
				kanbancardchattertap: 'chatterKanbanCardCommand',
				kanbancardtasktap: function (dataview, record, index, event, e, eOpts) {
					// <debug>
					_LOG && console.info('kanbancardtasktap');
					// </debug>

					// this should rather be a real controller method,
					// but we need to wrap existing {#getAllTaskOnMouseOver} here

					this.getAllTaskOnMouseOver(record.get('ForceID'), event.target);
				},
				kanbancardedittap: function (dataview, record, index, event) {
					// <debug>
					_LOG && console.info('kanbancardedittap');
					// </debug>

					// this should rather be a real controller method,
					// but we need to wrap existing {#newPostBtnTap} here
					// tap event disable for now we firing event on mouse over
					// return false;

					this.sideMenuCardEditBtn(event.target);
				},
				kanbancardharveyballtap: function (dataview, record, index, event) {
					// <debug>
					_LOG && console.info('kanbancardedittap');
					// </debug>

					// this should rather be a real controller method,
					// but we need to wrap existing {#newPostBtnTap} here
					this.onHarveyballTap(event.target);
				},
				updatekanbancardrecord: 'updateKanbanCardCommand',
				// Sync kanban card order with force.com
				syncorder: 'syncKanbanCardOrder',
				synoldcorder: 'updateOrderLeavedZone',
				filterkanbanstorerecord: 'filterKanbanStoreData',
				checksecurity: 'onCheckSecurity'
			},
			'main': {
				kanbancardenter: 'onKanbanCardDrop'
			},
			//@formatter:off
			// sencha ---
			'advanceFilter': {
				advancefilter: 'onAdvanceFilter'
			},
			cardFanBtn: {
				initialize: 'onFloatingTabInitcrdbtnCard'
			},
			newCardBtn: {
				tap: 'newPostBtnTapSecurity',
				initialize: 'newPostBtnInit'
			},
			subscriberListofKanban: {
				itemtap: 'subscriberListItemtap'
			},
			newPostSubscriberView: {
				activate: 'newPostAddSubscriberBtnTap'
			},
			newPostTasksView: {
				activate: 'newPostTasksViewActivate'
			},
			searchBtn: {
				tap: 'onSearchBtn',
				hide: 'onSearchHideBtn',
				initialize: 'onSearchBtnInit'
			},
			tasklistofKanban: {
				itemtap: 'onKanbanTaskListItemtap'
			},
			descriptionTaskField: {
				blur: 'onNewPostFieldBlur'
			},
			subjectTaskField: {
				blur: 'onNewPostFieldBlur'
			},
			assignUserBtnTask: {
				tap: 'assignUserBtnTaskTap'
			},
			priorityBtnTask: {
				tap: 'priorityBtnTap'
			},
			priorityBtn: {
				tap: 'priorityBtnTap'
			},
			categoryTextBtn: {
				tap: 'categoryTextBtnTap'
			},
			assignUserBtn: {
				tap: 'assignUserBtnTap'
			},
			logAssignUserBtn: {
				tap: 'assignUserBtnTap'
			},
			assignSubscribers: {
				tap: 'assignUserBtnTap'
			},
			'linkView': {
				openproject: 'onOpenLinkProject'
			},
			linkProjectBoardBtn: {
				tap: 'linkProjectBoardBtnTap'
			},
			assignCard: {
				tap: 'assignCardBtnTap'
			},
			'cardInfo #titleTextField': {
				blur: 'onNewPostFieldBlur'
			},
			'cardInfo #descriptionTextAreaField': {
				blur: 'onNewPostFieldBlur'
			},
			'cardInfo #acceptanceCriteria': {
				blur: 'onNewPostFieldBlur'
			},
			'cardInfo #newCustomCardID': {
				blur: 'onNewPostFieldBlur'
			},
			estimationNumberField: {
				keyup: 'onEstimationNumberFieldKeyUp',
				blur: 'onChangeNewPostStartDateField'
			},
			'cardInfo #estimationEffortRemaining': {
				keyup: 'onEstimationNumberFieldKeyUp'
			},
			assignAccountBtn: {
				tap: 'assignAccountBtnTap'
			},
			assignOpportunityBtn: {
				tap: 'assignOpportunityBtnTap'
			},
			assignContactBtn: {
				tap: 'assignContactBtnTap'
			},
			assignCaseBtn: {
				tap: 'assignCaseBtnTap'
			},
			linkAccountBtn: {
				tap: 'linkAccountBtnTap'
			},
			linkOpportunityBtn: {
				tap: 'linkOpportunityBtnTap'
			},
			linkContactBtn: {
				tap: 'linkContactBtnTap'
			},
			linkCaseBtn: {
				tap: 'linkCaseBtnTap'
			},
			linkProjectBoard: {
				tap: 'linkProjectBoardTap'
			},
			linkCard: {
				tap: 'linkCardTap'
			},
			linkUrl: {
				tap: 'linkUrlTap'
			},
			newPostCopyUrl: {
				tap: 'newPostCopyUrlBtnTap'
			},
			newPostDeleteBtn: {
				tap: 'newPostDeleteBtnTap'
			},
			newPostCancelBtn: {
				tap: 'newPostCancelBtnTap'
			},
			newPostEditSubscriber: {
				tap: 'newPostEditSubscriberTap'
			},
			newPostSaveBtn: {
				tap: 'newPostSaveBtnTap'
			},
			newPostCreateBtn: {
				tap: 'newPostCreateBtnTap'
			},
			'panel #newPostCreateAndNewBtn': {
				tap: 'newPostCreateBtnTap'
			},
			newPostSaveTaskBtn: {
				tap: 'newPostSaveTaskBtnTap'
			},
			newPostSaveSubscriberBtn: {
				tap: 'newPostSaveSubscriberBtnTap'
			},
			newPostStartDateField: {
				blur: 'onChangeNewPostStartDateField'
			},
			newPostDueDateField: {
				blur: 'onChangeNewPostStartDateField'
			},
			newPostStartDatePickerField: {
				initialize: 'onInitNewpostSelectFld'
			},
			newPostDueDatePickerField: {
				initialize: 'onInitNewpostSelectFld'
			},
			editCardMenuItem: {
				itemtap: 'editCardMenuItemTap'
			},
			editMultiCardMenu: {
				itemtap: 'editMultiCardMenuItemTap'
			},
			'statusView': {
				timebtntap: 'onTimeBtntap',
				statusAddBtnTap: 'addStatusOnCard'
			},
			cardEditList: {
				itemtap: 'editMenuTap'
			},
			addLogTime: {
				tap: 'addLogTimeBtnTap'
			},
			logTimeListView: {
				itemtap: 'logTimeListViewTap'
			},
			statusViewList: {
				itemtap: 'statusViewListTap'
			},
			isDependencyCheck: {
				tap: 'openBoardDependency'
			},
			'inboundEmail #assignDefaultUserBtn': {
				tap: 'assignUserBtnTap'
			},
			/*'main #editMultiCard' : {
			tap : 'editMultiCardPopUp'
			},*/
			newMultiPostSaveBtn: {
				tap: 'newMultiPostSaveBtnTap'
			},
			'stickerUpload': {
				checkvalue: 'onNewPostFieldBlur'
			},
			advanced_Filter: {
				tap: 'saveAdvanceFilter'
			},
			advanced_FilterClear: {
				tap: 'clearAdvanceFilterData'
			}
		}
	},
	/**
	 * Initialize controller {Ext.controller.KanbanCardController}
	 */
	init: function () {
		_LOG && console.log('init');
		var me = this;
		me.getApplication().on({
			deletekanbancardcoreevent: me.deleteKanbanCardCore,
			updatebulkkanban: me.updateKanbanCardAuto,
			updatekanbancardcoreevent: me.updateKanbanCardCore,
			scope: me
		});
		me.mainControllerObj = me.getApplication().getController('MainController');
		this.callParent(arguments);
		// apply short key 	event open some special popup fast.
		document.onkeydown = function (e) {
			me.shortCutKeyPressed(e);
		};
		// prevent default right click popup menu and create custom popup on right cclick
		document.addEventListener('contextmenu', function (ev) {
			ev.preventDefault();
			me.customRightClikPopup(ev);
			return true;
		}, false);
		// we know this is where to get the glueConfigData, but issue is we use async events below
		// so if I cut/paste it above here, it will just fire after the view class constructors anyways
	},
	/**
	 * fanout button initialize
	 * @param {this}                cntr
	 */
	onFloatingTabInitcrdbtnCard: function (cntr) {
		_LOG && console.log('onFloatingTabInitcrdbtnCard');
		var drgble = cntr.draggableBehavior.getDraggable();
		// if you don't do this, the draggable component can never go higher or to the left...
		// ...from where it spawned originally; very strange quirk
		drgble.setConstraint({
			min: {
				x: -Infinity,
				y: -Infinity
			},
			max: {
				x: Infinity,
				y: Infinity
			}
		});
		// add tooltip on mouse over for this component
		this.mainControllerObj.onToolTipAddEvent(cntr, '');
		// all existing zones need to reset their draggable arrays
	},
	/**
	 * create new card button top/right corner
	 * @param {this button}     comp
	 * @param {Object}          option
	 */
	newPostBtnInit: function (comp, option) {
		this.mainControllerObj.onToolTipAddEvent(comp, option);
	},
	/**
	 * Search button initialize for board
	 * @param {Object} comp
	 * @param {Object} option
	 */
	onSearchBtnInit: function (comp, option) {
		this.mainControllerObj.onToolTipAddEvent(comp, option);
	},
	/** get all kanban templates during edit or create any card if any template changed or added before
	 * method : getAllTemplateForEditKanban
	 */
	getAllTemplateForEditKanban: function () {
		_LOG && console.log('getAllTemplateForEditKanban');
		glueforce.getKanbanCardTemplates(function (retval) {
			_LOG && console.log('getKanbanCardTemplates ', retval);
			// Category store to manage " My Preference" selected categories
			var categoryStore = Ext.getStore('Category'),
			derivedC,
			derivedR;
			categoryStore.removeAll();
			if (retval.length) {
				Ext.Array.forEach(retval, function (data) {
					derivedC = data.Lean__DerivedFrom__c;
					derivedR = data.Lean__DerivedFrom__r;
					if (typeof derivedR === "object" && derivedR.hasOwnProperty('Lean__ProjectRoom__c') && derivedR.Lean__ProjectRoom__c === glueforce.getWorkspaceConfig().projectRoomID) {

						data.EntireRoom = true;
						data.EntireORG = false;
						data.EntireBoard = false;

					} else if (derivedC && !derivedR.hasOwnProperty('Lean__ProjectRoom__c')) {
						data.EntireORG = true;
						data.EntireBoard = false;
						data.EntireRoom = false;
					} else {
						data.EntireRoom = false;
						data.EntireBoard = true;
						data.EntireORG = false;
						data.Lean__DerivedFrom__c = '';
						data.Lean__DerivedFrom__r = '';
					}
					categoryStore.add(data);
				});
				// categoryStore.sort('Name', 'ASC');
			}
		});
	},
	/**Security check function to check user can move/edit/hyper-jump/clone or not*/
	onCheckSecurity: function (dataview, verb) {
		_LOG && console.log('newPostBtnTapSecurity');
		var me = this,
		meMain = me.mainControllerObj,
		allUserStore,
		userAllRec,
		ownerName;
		// Deselct all card which was selected for multi feature.
		if (!meMain.canMoveCard || !meMain.canEditCard) {
			allUserStore = Ext.getStore('AllUsers');
			userAllRec = allUserStore.findRecord('Id', meMain.glueConfigData.valueStreamOwner);
			if (userAllRec) {
				ownerName = userAllRec.data.Name;
			}
			if (verb === 'harveyball' && meMain.canEditCard) {
				return false;
			}
			return meMain.alertMsgBox('The owner of this board, ' + Ext.htmlEncode(ownerName) + ', has locked the board.');
		}
		return false;
	},
	/** Update/Create popup card record
	 *@param {button we tap top right button of top toolbar || null}    cardcmp
	 *@param {Ext.Event  || null}                                       e
	 *@param {Object  || null}                                          eOpts
	 *@param {Object  || null}                                          view
	 *@param {Object  || null}                                          record
	 *@param {Store Record}                                             contData
	 *@param {Ext.View.KanbanCard}                                      cmp
	 */
	newPostBtnTapSecurity: function (btn, e, eOpts, textCheck, record, kanbanData) {
		_LOG && console.log('newPostBtnTapSecurity');
		var me = this,
		meMain = me.mainControllerObj,
		allUserStore,
		userAllRec,
		ownerName;
		// Deselct all card which was selected for multi feature.
		me.deselectMultiCard();
		if (!meMain.canMoveCard) {
			allUserStore = Ext.getStore('AllUsers');
			userAllRec = allUserStore.findRecord('Id', meMain.glueConfigData.valueStreamOwner);
			if (userAllRec) {
				ownerName = userAllRec.data.Name;
			}
			meMain.alertMsgBox('The owner of this board, ' + Ext.htmlEncode(ownerName) + ', has locked the board.');
		} else {
			me.newPostBtnTap(textCheck, kanbanData);
		}
	},
	/** called when tapped on New Post button on top - right to create new card and also called when to edit any card
	 *Update/Create popup card record
	 *@param {button we tap top right button of top toolbar || null}    cardcmp
	 *@param {view rende according index }                              index
	 *@param {Object  || null}                                          eOpts
	 *@param {Object  || null}                                          view
	 *@param {Object  || null}                                          record
	 *@param {Store Record}                                             contData
	 *@param {Ext.View.KanbanCard}                                      cmp
	 */
	newPostBtnTap: function (textCheck, kanbanData, index, eOpt) {
		_LOG && console.log('newPostBtnTap');

		var me = this,
		meMain = me.mainControllerObj,
		pointStore = Ext.getStore('Points'),
		checkSevenDayWorking = new Date();
		me.cardfan = textCheck;
		me.selectedStickerArray = [];
		if (kanbanData) {
			kanbanData = JSON.parse(JSON.stringify(kanbanData));
			me.getResourceAllocation(kanbanData.Id);
		}
		if (kanbanData) {
			me.lastModifiedDate = Ext.Date.format(new Date(kanbanData.LastModifiedDate), 'd/M/Y');
		} else {
			me.lastModifiedDate = Ext.Date.format(new Date(), 'd/M/Y');
			if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
				if (checkSevenDayWorking.getDay() == 6) {
					checkSevenDayWorking = Ext.Date.add(checkSevenDayWorking, Ext.Date.DAY, 2);
				} else if (checkSevenDayWorking.getDay() == 0) {
					checkSevenDayWorking = Ext.Date.add(checkSevenDayWorking, Ext.Date.DAY, 1);
				}

			}
		}
		me.getAllTemplateForEditKanban();

		// called to fetch all users once again if any new user is added in value stream related users
		me.newPostOverlay = "";
		if (me.newPostOverlay === "") {
			me.newPostOverlay = Ext.Viewport.add({
					xtype: 'panel',
					modal: true,
					centered: true,
					width: 720,
					floatingCls: 'overlayFloatingClsNew',
					height: '85%',
					maxHeight: 720,
					// zIndex:11,
					itemId: 'newPostOverlayPopUp',
					resourceAllocation: [],
					layout: 'hbox',
					scrollable: null,
					items: [{
							xtype: 'editCardMenu',
							cls: 'preferenceMenuCls'
						}, {
							xtype: 'editCardLayoutContainer',
							flex: 1
						}, {
							xtype: 'toolbar',
							docked: 'bottom',
							height: '45px',
							ui: 'greyToolbar',
							itemId: 'newPostToolbar' // adding items dynamically
						}
					],
					listeners: {
						hide: function () {
							this.destroy();
							me.newPostOverlay = null;
							meMain.fillPoinPickList(glueforce.getWorkspaceConfig().PointPicklist);
						},
						show: function () {
							Ext.getStore('TaskLogTime').removeAll();
							if (kanbanData) {
								_LOG && console.log('editKanbanBtn--kanbanData', kanbanData);
								me.newPostOverlay.setMasked({
									xtype: 'loadmask',
									indicator: true,
									message: 'Loading...'
								});
								var poinReco = pointStore.findExact('Point', kanbanData.Point);
								if (poinReco === -1) {
									pointStore.add({
										Point: kanbanData.Point
									});
								}

								me.getKanbanCardTaskList(kanbanData.ForceID);
								me.getKanbanCardSubscriberList(kanbanData.ForceID);
								// setting dynamic fields on pop up from jsondefinition
								if (Ext.getCmp('jsonDefinitionPanel').isHidden()) {
									if (kanbanData.JSONDefinition != "{}" && kanbanData.JSONDefinition) {
										var dynamicFields = JSON.parse(Ext.String.htmlDecode(kanbanData.JSONDefinition));
										Ext.getCmp('jsonDefinitionPanel').show();
										Ext.apply(dynamicFields.config, {
											defaults: {
												labelAlign: 'top',
												labelCls: 'fieldLabelCls',
												inputCls: 'selectBorderCls',
												clearIcon: false
											},
											cls: 'fieldSetCustomfld'
										});
										Ext.getCmp('jsonDefinitionPanel').add(dynamicFields.config);
									}
								}
								// to set values of link to project board
								var recordProjectBoard,
								projectRoom,
								vsStore = Ext.getStore('AllValueStreams');

								if (vsStore.isFiltered()) {
									vsStore.clearFilter();
								}
								if (kanbanData.ValueStreamLinkID && kanbanData.ValueStreamLinkID !== "") {
									recordProjectBoard = vsStore.findRecord('Id', kanbanData.ValueStreamLinkID);
									projectRoom = me.newPostOverlay.down('#assignLinkProject');
									if (recordProjectBoard) {

										if (projectRoom) {
											projectRoom.setConfig({
												text: Ext.htmlEncode(recordProjectBoard.data.Lean__ProjectRoom__r.Name),
												valueId: recordProjectBoard.data.Lean__ProjectRoom__r.Id
											});
										}
										kanbanData.ValueStreamLinkIDName = recordProjectBoard.data.Name;
										me.getLinkProjectBoardBtn().setText(Ext.htmlEncode(recordProjectBoard.data.Name));
										kanbanData.ValueStreamLinkBoardType = recordProjectBoard.data.Lean__BoardType__c;
									} else {
										glueforce.getValueStreams(kanbanData.ValueStreamLinkID, function (projectRecord) {
											_LOG && console.log('getValueStreams ', onSuccess);
											if (projectRecord.length) {

												if (projectRoom) {
													projectRoom.setConfig({
														text: Ext.htmlEncode(projectRecord[0].Lean__ProjectRoom__r.Name),
														valueId: projectRecord[0].Lean__ProjectRoom__r.Id
													});
												}
												kanbanData.ValueStreamLinkIDName = projectRecord[0].Name;
												me.getLinkProjectBoardBtn().setText(Ext.htmlEncode(projectRecord[0].Name));
												kanbanData.ValueStreamLinkBoardType = projectRecord[0].Lean__BoardType__c;
											}

										});
										// kanbanData.ValueStreamLinkIDName = "None";
										// kanbanData.ValueStreamLinkBoardType = '';
										// kanbanData.ValueStreamLinkID = '';
										// kanbanData.ValueStreamCardLink = '';
									}
								} else {
									kanbanData.ValueStreamLinkIDName = "None";
									kanbanData.ValueStreamLinkBoardType = '';
									kanbanData.ValueStreamCardLink = '';
								}
								var valueStreamAllCardsStore = Ext.getStore('ValueStreamAllCards'),
								recordCard;
								if (valueStreamAllCardsStore.isFiltered()) {
									valueStreamAllCardsStore.clearFilter();
								}
								if (kanbanData.ValueStreamLinkID && kanbanData.ValueStreamCardLink) {
									// to set values of link to project board + card
									glueforce.getKanbanCards(kanbanData.ValueStreamLinkID, function (onSuccess) {
										_LOG && console.log('getKanbanCards ', onSuccess);
										meMain.sortArrOfObjectsByParam(onSuccess, "Name");
										valueStreamAllCardsStore.removeAll();
										valueStreamAllCardsStore.add(onSuccess);
										recordCard = valueStreamAllCardsStore.findRecord('Id', kanbanData.ValueStreamCardLink);
										if (recordCard) {
											kanbanData.ValueStreamCardLinkName = recordCard.data.Name;
											me.getAssignCard().setText(Ext.htmlEncode(recordCard.data.Name));
											Ext.getCmp('projectBoardCardLinkKanban').setValue(recordCard.data.Name);
											Ext.getCmp('projectBoardCardLinkHiddenField').setValue(recordCard.data.Id);
										} else {
											Ext.getCmp('projectBoardCardLinkKanban').setValue("Project Board Only");
											kanbanData.ValueStreamCardLinkName = 'Project Board Only';
											Ext.getCmp('projectBoardCardLinkHiddenField').setValue("");
										}
									});
								}

								var dynField = Ext.getCmp('jsonDefinitionPanel').getComponent('formExtendPanelKanban');
								if (dynField) {
									Ext.Array.forEach(dynField.getItems().items, function (itm) {
										if (itm.getName) {
											var fieldName = itm.getName();
											if (itm.getItemId().split('-')[1] == "currencyField") {
												itm.on('blur', function (itm) {
													itm.showCurrency(itm, itm.config.currency);
												});
												itm.on('focus', function (itm) {
													itm.setValue(itm.valueToRaw(itm.rawToValue(itm.getValue())));
													// itm.showCurrency(itm,itm.config.currency);
												});
											}
										}
									});
								}

								if (kanbanData.JSONData !== '' && kanbanData.JSONData != '{}' && kanbanData.JSONData) {
									var jsonData = JSON.parse(kanbanData.JSONData),
									dynField,
									key;
									for (key in jsonData) {
										if (!(Ext.getCmp('jsonDefinitionPanel').isHidden())) {
											dynField = Ext.getCmp('jsonDefinitionPanel').getComponent('formExtendPanelKanban');
											if (dynField) {
												Ext.Array.forEach(dynField.getItems().items, function (itm) {
													if (itm.getName && itm.getValue) {
														var fieldName = itm.getName();
														if (key == fieldName) {
															if (itm.getItemId().split('-')[1] == "datepickerfield") {
																itm.setPicker({
																	yearFrom: new Date().getFullYear() - 1,
																	yearTo: new Date().getFullYear() + 15
																});
																var calcDate = new Date(jsonData[key]);
																// calcDate = new Date(calcDate.setDate(calcDate.getDate()));
																itm.setValue(calcDate);
															} else
																if (itm.getItemId().split('-')[1] == "checkboxfield" || itm.getItemId().split('-')[1] == "radiofield") {
																	if (jsonData[key]) {
																		itm.check();
																	}
																} else
																	if (itm.getItemId().split('-')[1] == "currencyField") {
																		if (jsonData[key]) {
																			itm.setValue(jsonData[key]);
																		} else {
																			itm.setValue(itm.config.currency + '00.00');
																		}

																	} else {
																		itm.setValue(jsonData[key]);
																	}
														}
													}
												});
											}
										}
									}
								}
								Ext.getCmp('kanabacardTitle').setHtml('<div class="label_priority_cls preferencesMenuTitle">' + Ext.htmlEncode(kanbanData.Title) + '</div>');
								Ext.getCmp('categoryTextBtn').setText(Ext.htmlEncode(kanbanData.Title));
								// set Title
								if (kanbanData.TemplateID) {
									Ext.getCmp('categoryTextHiddenField').setValue(kanbanData.TemplateID);
								}
								if (kanbanData.ForceID) {
									Ext.getCmp('cardCmpForceId').setValue(kanbanData.ForceID);
								}
								me.allStickerViewActivate();
								me.allLogTime();
								switch (kanbanData.Priority) {
								case 1:
									Ext.getCmp('priorityBtn').setText('Critical');
									break;
								case 2:
									Ext.getCmp('priorityBtn').setText('Medium');
									break;
								case 3:
									Ext.getCmp('priorityBtn').setText('Low');
									break;
								case 4:
									Ext.getCmp('priorityBtn').setText('None');
									break;
								default:
									break;
								}
								Ext.getCmp('harveyBallOneBtn').setValue(kanbanData.HarveyBall);
								if (kanbanData.OwnerID) {
									var userRecAll = Ext.getStore('AllUsers').findRecord('Id', kanbanData.OwnerID);
									if (userRecAll) {
										Ext.getCmp('assignUserBtn').setText(Ext.htmlEncode(userRecAll.data.Name));
										Ext.getCmp('assignUserHiddenField').setValue(userRecAll.data.Id);
									}
								}

								if (kanbanData.Account && kanbanData.AccountName) {
									me.getAssignAccountBtn().setText(Ext.htmlEncode(kanbanData.AccountName));
									me.getAssignAccountHiddenField().setValue(kanbanData.Account);
								}

								if (kanbanData.Contact && kanbanData.ContactName) {
									me.getAssignContactBtn().setText(Ext.htmlEncode(kanbanData.ContactName));
									me.getAssignContactHiddenField().setValue(kanbanData.Contact);
								}
								if (kanbanData.Opportunity && kanbanData.OpportunityName) {
									me.getAssignOpportunityBtn().setText(Ext.htmlEncode(kanbanData.OpportunityName));
									me.getAssignOppHiddenField().setValue(kanbanData.Opportunity);
									me.getAssignOppStageHiddenField().setValue(kanbanData.OpportunityStage);
								}
								if (kanbanData.CaseID && kanbanData.CaseSubject && kanbanData.CaseStatus && kanbanData.CasePriority) {
									me.getAssignCaseBtn().setText(Ext.htmlEncode(kanbanData.CaseSubject));
									me.getAssignCaseHiddenField().setValue(kanbanData.CaseID);
									me.getAssignCaseStatusHiddenField().setValue(kanbanData.CaseStatus);
									me.getAssignCasePriorityHiddenField().setValue(kanbanData.CasePriority);
								}
								if (!kanbanData.DateCreated) {
									kanbanData.DateCreated = kanbanData.StartDate;
								}
								// called view activate method to remove / add bottom toolbar buttons when creating a new card or editing existing one
								me.newPostViewActivate();
								setTimeout(function () {
									me.newPostOverlay && me.newPostOverlay.setMasked(false);
								}, 2000);
								me.newPostOverlay.down('#addLogTime').enable();
								me.newPostOverlay.down('#statusAdd').enable();
								me.newPostOverlay.down('#addTaskCard').enable();
								me.newPostOverlay.down('#addSubscibers').enable();
							} else {
								var categoryStore = Ext.getStore('Category');
								if (categoryStore.data.length) {
									Ext.getCmp('categoryTextBtn').setText(Ext.htmlEncode(categoryStore.first().data.Name));
									Ext.getCmp('categoryTextHiddenField').setValue(categoryStore.first().data.Id);
									Ext.getCmp('kanabacardTitle').setHtml('<div class="label_priority_cls preferencesMenuTitle">' + Ext.htmlEncode(categoryStore.first().data.Name) + '</div>');

									// setting dynamic fields on pop up from jsondefinition on new create of kanban
									var jsonDef = categoryStore.first().data.Lean__JSONDefinition__c;
									if (jsonDef) {
										var dynamicFields = JSON.parse(Ext.String.htmlDecode(jsonDef));
										Ext.getCmp('jsonDefinitionPanel').show();
										Ext.Array.forEach(dynamicFields.config.items, function (fldJ) {
											if (fldJ.xtype == "datepickerfield") {
												fldJ.value = new Date();
												fldJ.picker = {
													yearFrom: new Date().getFullYear() - 1,
													yearTo: new Date().getFullYear() + 15
												};
											}
										});
										Ext.getCmp('jsonDefinitionPanel').removeAll();
										Ext.apply(dynamicFields.config, {
											defaults: {
												labelAlign: 'top',
												labelCls: 'fieldLabelCls',
												inputCls: 'selectBorderCls',
												clearIcon: false
											},
											cls: 'fieldSetCustomfld'
										});
										Ext.getCmp('jsonDefinitionPanel').add(dynamicFields.config);
									}
								}
								me.newPostOverlay.down('#addLogTime').disable();
								me.newPostOverlay.down('#statusAdd').disable();
								me.newPostOverlay.down('#addTaskCard').disable();
								me.newPostOverlay.down('#addSubscibers').disable();
								Ext.getStore('TaskListArray').removeAll();
								Ext.getStore('LogTime').removeAll();
								Ext.getStore('StatusLog').removeAll();
								Ext.getStore('SubscriberListArray').removeAll();
								me.newPostViewActivate();
							}
							var isDependency = false;
							if (kanbanData) {
								var dependencyStore = Ext.getStore('DependencyKanabanCards');
								var recordDependencyFrom = dependencyStore.findRecord('FromId', kanbanData.Id);
								var recordDependencyTo = dependencyStore.findRecord('To', kanbanData.Id);
								if (recordDependencyFrom || recordDependencyTo) {
									isDependency = true;
									me.getNewPostView().down('#estimationNumberField').disable(true);
									me.getNewPostView().down('#durationUnitField').disable(true);
								}
							}
							if (!glueforce.getWorkspaceConfig().DisableCalendarView) {
								isDependency && Ext.getCmp('isDependency').setHidden(false);
								isDependency && Ext.getCmp('isDependencyCheck').setHidden(false);
							}
							var dueDateFld = me.getNewPostView().down('#dueDateField'),
							duedatePickerFld = me.getNewPostView().down('#dueDatePickerField');
							if (dueDateFld && duedatePickerFld) {
								if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
									// hidden for chrome / safari
									dueDateFld.hide();
									duedatePickerFld.show();
									duedatePickerFld.setName('DueDate');
									duedatePickerFld.unAfter('change', me.onChangeNewPostStartDateField, duedatePickerFld);
									if (kanbanData) {
										isDependency && duedatePickerFld.disable();
										duedatePickerFld.setValue(new Date(kanbanData.DueDate));
										duedatePickerFld.setLabel('Due Date (' + Ext.Date.format(new Date(kanbanData.DueDate), 'd/M/Y') + ')');
									} else {
										duedatePickerFld.setValue(checkSevenDayWorking);
										duedatePickerFld.setLabel('Due Date (' + Ext.Date.format(Ext.Date.add(checkSevenDayWorking, Ext.Date.DAY, 1), 'd/M/Y') + ')');
									}
									duedatePickerFld.onAfter('change', me.onChangeNewPostStartDateField, duedatePickerFld);
								} else {
									// hidden for IE / Firefox
									duedatePickerFld.hide();
									dueDateFld.show();
									dueDateFld.setName('DueDate');
									var defaultDueDate;
									if (kanbanData) {
										defaultDueDate = Ext.Date.format(new Date(kanbanData.DueDate), 'Y-m-d');
										dueDateFld.setValue(defaultDueDate);
										dueDateFld.setLabel('Due Date (' + Ext.Date.format(new Date(kanbanData.DueDate), 'd/M/Y') + ')');
										kanbanData.DueDate = defaultDueDate;
										isDependency && dueDateFld.disable();
									} else {
										defaultDueDate = Ext.Date.format(checkSevenDayWorking, 'Y-m-d');
										dueDateFld.setValue(defaultDueDate);
										dueDateFld.setLabel('Due Date (' + Ext.Date.format(new Date(defaultDueDate), 'd/M/Y') + ')');
									}
								}
							}
							var startDateFld = me.getNewPostView().down('#StartDateField'),
							startdatePickerFld = me.getNewPostView().down('#StartDatePickerField');
							if (startDateFld && startdatePickerFld) {
								if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
									// hidden for chrome / safari
									startDateFld.hide();
									startdatePickerFld.show();
									startdatePickerFld.setName('StartDate');
									startdatePickerFld.unAfter('change', me.onChangeNewPostStartDateField, startdatePickerFld);
									if (kanbanData) {
										startdatePickerFld.setValue(new Date(kanbanData.StartDate));
										startdatePickerFld.setLabel('Start Date (' + Ext.Date.format(new Date(kanbanData.StartDate), 'd/M/Y') + ')');
										isDependency && startdatePickerFld.disable();
									} else {
										startdatePickerFld.setValue(checkSevenDayWorking);
										startdatePickerFld.setLabel('Start Date (' + Ext.Date.format(checkSevenDayWorking, 'd/M/Y') + ')');
									}
									startdatePickerFld.onAfter('change', me.onChangeNewPostStartDateField, startdatePickerFld);
								} else {
									// hidden for IE / Firefox
									startdatePickerFld.hide();
									startDateFld.show();
									startDateFld.setName('StartDate');
									var defaultStartDate;
									if (kanbanData) {
										defaultStartDate = Ext.Date.format(new Date(kanbanData.StartDate), 'Y-m-d');
										startDateFld.setValue(defaultStartDate);
										startDateFld.setLabel('Start Date (' + Ext.Date.format(new Date(kanbanData.StartDate), 'd/M/Y') + ')');
										kanbanData.StartDate = defaultStartDate;
										isDependency && startDateFld.disable();
									} else {
										defaultStartDate = Ext.Date.format(checkSevenDayWorking, 'Y-m-d');
										startDateFld.setValue(defaultStartDate);
										startDateFld.setLabel('Start Date (' + Ext.Date.format(new Date(defaultStartDate), 'd/M/Y') + ')');
									}
								}
							}
							kanbanData && delete kanbanData.DueDate;
							kanbanData && delete kanbanData.StartDate;

							me.getNewPostView().down('#durationUnitField').unAfter('change', me.onChangeNewPostStartDateField, me.getNewPostView().down('#durationUnitField'));
							kanbanData && me.getNewPostView().setValues(kanbanData);
							me.getNewPostView().down('#durationUnitField').onAfter('change', me.onChangeNewPostStartDateField, me.getNewPostView().down('#durationUnitField'));
							kanbanData && me.newPostOverlay.down('#urlLinkmarker').setValue(kanbanData.UrlLink);
							me.newPostOverlay.down('#onTimeBtn').setHtml(kanbanData ? Ext.htmlEncode(kanbanData.OnTime) : 'Green');
							me.newPostOverlay.down('#onQualityBtn').setHtml(kanbanData ? Ext.htmlEncode(kanbanData.OnQuality) : 'Green');
							me.newPostOverlay.down('#onBudgetBtn').setHtml(kanbanData ? Ext.htmlEncode(kanbanData.OnBudget) : 'Green');
							me.newPostOverlay.down('#onTimeBtn').setCls((kanbanData ? Ext.htmlEncode(kanbanData.OnTime) : 'Green') + ' btn_down');
							me.newPostOverlay.down('#onQualityBtn').setCls((kanbanData ? Ext.htmlEncode(kanbanData.OnQuality) : 'Green') + ' btn_down');
							me.newPostOverlay.down('#onBudgetBtn').setCls((kanbanData ? Ext.htmlEncode(kanbanData.OnBudget) : 'Green') + ' btn_down');
							var card = me.getEditCardLayoutContainer();
							if (index) {
								me.getEditCardMenuItem().select(index);
							} else {
								me.getEditCardMenuItem().select(0);
							}
							var taskArray = Ext.getStore('TaskListArray');
							var logTaskArray = Ext.getStore('TaskLogTime');
							logTaskArray.removeAll();
							logTaskArray.add({
								'Subject': 'None',
								'Id': '',
								'OwnerId': '',
								'ActivityDate': new Date().toISOString()
							});
							logTaskArray.add(taskArray.getData().items);

							card.animateActiveItem(index, {
								type: 'slide',
								direction: 'right'
							});
						}
					}
				});
		}
		me.newPostOverlay.show();
	},
	/** set visible scroll on new post pop up
	 * method : methodTosetScrollAllTime calls on view activate
	 * @param {Ext.Panel}						scroll_obj
	 * @param {String} 							pnl_status
	 */
	methodTosetScrollAllTime: function (scroll_obj, pnl_status) {
		_LOG && console.log('methodTosetScrollAllTime');
		var scrollPnl = scroll_obj.getScrollable();
		if (pnl_status == "activate") {
			scrollPnl.showIndicators();
			scrollPnl.setIndicatorsHidingDelay(1800000);
		} else {
			scrollPnl.setIndicatorsHidingDelay(0);
			scrollPnl.hideIndicators();
		}
	},
	/**called at the time when user edits any card and New Post pop up opens up to fetch all tasks related to this particular card method: getKanbanCardTaskList
	 * @param {force id unique id for that card}			ForceID
	 */
	getKanbanCardTaskList: function (ForceID) {
		_LOG && console.log('getKanbanCardTaskList');
		var me = this;
		if (ForceID) {
			glueforce.getTasks(ForceID, function (onSuccess) {
				_LOG && console.log('getTasks ', onSuccess);
				// load task on initialize
				var storeTask = Ext.getStore('TaskListArray');
				storeTask.removeAll();
				if (onSuccess.length) {
					Ext.Array.forEach(onSuccess, function (task) {
						if (task.ActivityDate) {
							task.ActivityDate = new Date(task.ActivityDate.split('-')[0], task.ActivityDate.split('-')[1] - 1, task.ActivityDate.split('-')[2], 00, 00, 00);
							task.CreatedDate = JSON.parse(task.CreatedDate);
							storeTask.add(task);
						}
					});
					if (me.getTasklistofKanban()) {
						me.getTasklistofKanban().setStyle('background-color : none !important');
						me.getTasklistofKanban().setHtml('');
					}
					var logTaskArray = Ext.getStore('TaskLogTime');
					logTaskArray.removeAll();
					logTaskArray.add({
						'Subject': 'None',
						'Id': '',
						'OwnerId': '',
						'ActivityDate': new Date().toISOString()
					});
					logTaskArray.add(storeTask.getData().items);

				} else {
					if (me.getTasklistofKanban()) {
						me.getTasklistofKanban().setHtml('<div style="padding: 10px;font-size: 14px;">No Task added</div>');
						me.getTasklistofKanban().setStyle('background : #fff !important');
					}
				}
				storeTask.sort([{
							property: 'ActivityDate',
							direction: 'ASC'
						}, {
							property: 'CreatedDate',
							direction: 'ASC'
						}
					]);
			});
		}
	},

	/**
	 * called at the time when user edits any card and New Post pop up opens up to fetch all users subscribe to this particular card
	 * @param {Object}				ForceID
	 */
	getKanbanCardSubscriberList: function (ForceID) {
		_LOG && console.log('getKanbanCardSubscriberList');
		var me = this;
		if (ForceID) {
			glueforce.getSubscribers(ForceID, function (onSuccess) {
				_LOG && console.log('getSubscribers ', onSuccess);
				// load subscriber on initialize
				var storeSubs = Ext.getStore('SubscriberListArray'),
				allUsersStore = Ext.getStore('AllUsers');
				storeSubs.removeAll();
				if (onSuccess.length) {
					Ext.Array.forEach(onSuccess, function (subs) {
						var allUserRecord = allUsersStore.findRecord('Id', subs.Lean__SubscriberID__c);
						if (allUserRecord) {
							subs['ownerImage'] = allUserRecord.data.SmallPhotoUrl;
							subs['ownerName'] = allUserRecord.data.Name;
						}
						storeSubs.add(subs);
					});
				} else {
					me.getSubscriberListofKanban().up().items.items[0].hide();
					me.getSubscriberListofKanban().setStyle('background : #fff !important');
					me.getSubscriberListofKanban().setHtml('<div style="padding: 10px;font-size: 14px;">No Subscriber added</div>');
					me.getSubscriberListofKanban().refresh();
				}
			});
		}
	},

	/**
	 * called when any subscriber tapped from subscriber list of a particular card
	 * @param {Ext.List}												list
	 * @param {number}													index
	 * @param {Ext.dom}													target
	 * @param {RealTimeKanbanBoard.model.SubscriberListArray}			record
	 * @param {Ext.event.Touch}											e
	 * @param {Object}													eOpts
	 */
	subscriberListItemtap: function (list, index, target, record, e, eOpts) {
		_LOG && console.log('subscriberListItemtap');
		var me = this;
		if (e.target.title == "Delete Subscriber") {
			Ext.Msg.show({
				message: '<div class="popUpCls">Delete Subscriber?</div>',
				buttons: [{
						iconMask: true,
						text: 'OK',
						ui: 'actionBtn',
						margin: 4,
						handler: function () {
							var kanbanid = Ext.getCmp('cardCmpForceId').getValue(),
							subscribeid = Ext.getStore('SubscriberListArray').getAt(index).data.Lean__SubscriberID__c;
							glueforce.removeSubscriber(kanbanid, subscribeid, function (onSuccess) {
								_LOG && console.log('removeSubscriber ', onSuccess);
								Ext.getStore('SubscriberListArray').removeAt(index);

								if (Ext.getStore('SubscriberListArray').data.length === 0) {
									// header
									list.up().items.items[0].hide();
									list.setStyle('background : #fff !important');
									list.setHtml('<div style="padding: 10px;font-size: 14px;">No Subscriber added</div>');
									list.refresh();
								}
							});
							this.hide();
						}
					}, {
						iconMask: true,
						text: 'Cancel',
						ui: 'normal',
						cls: 'cancelBtn',
						margin: 4,
						handler: function () {
							this.hide();
						}
					}
				]
			});
		} else
			if (e.target.title == "Edit Subscriber") {
				me.subscriberEditOverlay(record.data);
			}
	},

	/**
	 * called when any task tapped from task list of a particular card
	 * @param {Ext.List}										list
	 * @param {number}											index
	 * @param {Ext.dom}											target
	 * @param {RealTimeKanbanBoard.model.TaskListArray}			record
	 * @param {Ext.event.Touch}									e
	 * @param {Object}											eOpts
	 */
	onKanbanTaskListItemtap: function (list, index, target, record, e, eOpts) {
		_LOG && console.log('onKanbanTaskListItemtap');
		var me = this,
		storeTask = Ext.getStore('TaskListArray'),
		oldRecord;
		if (e.target.title == "Delete Task") {
			Ext.Msg.show({
				message: '<div class="popUpCls">Delete task?</div>',
				buttons: [{
						iconMask: true,
						text: 'OK',
						ui: 'actionBtn',
						margin: 4,
						handler: function () {
							oldRecord = storeTask.getAt(index);
							if (oldRecord) {
								oldRecord = oldRecord.data;
							}
							storeTask.removeAt(index);

							var taskId = [],
							kanbanId = Ext.getCmp('cardCmpForceId').getValue(),
							storeTaskCount = Ext.getStore('AllTaskListArrayCount'),
							recordData = storeTaskCount.findRecord('ID', kanbanId),
							tskInd = glueforce.getWorkspaceConfig().TaskIndicator,
							lengthTask = storeTask.data.items.length,
							undoneTask = 0;

							storeTask.filter('Status', 'Completed');
							undoneTask = Math.abs(lengthTask - storeTask.getData().length);

							storeTask.clearFilter();
							taskId.push(record.data.Id);
							glueforce.removeTask(taskId, kanbanId, function (onSuccess) {
								_LOG && console.log('removeTask ', onSuccess);
								var st = Ext.getStore('KanbanCards'),
								recordKanban = st.findRecord('ForceID', kanbanId),
								objectData,
								taskToBeDeleted;
								if (onSuccess.type == 'exception') {
									storeTask.add(oldRecord);
									storeTask.sort([{
												property: 'ActivityDate',
												direction: 'ASC'
											}, {
												property: 'CreatedDate',
												direction: 'ASC'
											}
										]);
									me.mainControllerObj.alertMsgBox(onSuccess.message);
									return;
								}
								if (storeTask.data.items.length === 0) {
									if (me.getTasklistofKanban()) {
										me.getTasklistofKanban().setHtml('<div style="padding: 10px;font-size: 14px;">No Task added</div>');
										me.getTasklistofKanban().setStyle('background : #fff !important');
										me.getTasklistofKanban().refresh();
									}
								}
								if (recordData) {
									recordData.set('TaskCount', lengthTask);
									recordData.set('CountUnDoneTask', undoneTask);
								}
								if (tskInd == 'true' || tskInd === true) {
									recordKanban.set('TaskComments', undoneTask);
								} else {
									recordKanban.set('TaskComments', lengthTask);
								}
								for (var count = 0; count < recordKanban.data.TaskUserNames.length; count++) {
									if (recordKanban.data.TaskUserNames[count].ID == record.data.Id) {
										recordKanban.data.TaskUserNames.splice(count, 1);
										break;
									}
								}
								st.sync();
								// onAdvanceFilterByString call due to filter feature in kanban controller

								objectData = {
									'Id': kanbanId,
									'GUID': recordKanban.data.GUID,
									'TaskComments': recordKanban.data.TaskComments,
									'ChatterComments': recordKanban.data.ChatterComments,
									'TaskCount': recordData && recordData.data.TaskCount,
									'CountUnDoneTask': recordData && recordData.data.CountUnDoneTask
								};
								glueforce.kanbanStateChange('NewChatterComments', JSON.stringify(objectData));
								taskToBeDeleted = {
									"Id": record.data.Id,
									"WhatId": kanbanId
								};
								me.onAdvanceFilterByString();
								glueforce.kanbanStateChange("DeleteTask", JSON.stringify(taskToBeDeleted));
							});
							this.hide();
						}
					}, {
						iconMask: true,
						text: 'Cancel',
						ui: 'normal',
						margin: 4,
						cls: 'cancelBtn',
						handler: function () {
							this.hide();
						}
					}
				]
			});
		} else
			if (e.target.title == "Edit Task") {
				me.taskEditOverlay(record.data);
			}
	},
	/**
	 * called to hide show respective buttons of bottom toolbar of New Post pop up, on view activate
	 *@param {component}              cmp
	 */
	newPostViewActivate: function (cmp) {
		_LOG && console.log('newPostViewActivate');
		var me = this,
		meMain = me.mainControllerObj;
		me.getNewPostToolbar().removeAll();
		if (me.getNewPostForceId().getValue()) {
			// move in while editing existing card

			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostLastUpdated',
				border: 0,
				text: 'Last Updated - ' + me.lastModifiedDate,
				style: {
					'background': 'transparent',
					'color': '#D9D9D9'
				}
			});
			me.getNewPostToolbar().add({
				xtype: 'spacer'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCopyUrl',
				text: 'Copy URL',
				cls: 'cancelBtn',
				listeners: {
					initialize: function (dis, e, opt) {
						if (!browser && navigator.platform != 'iPad') {
							var el = Ext.get(dis.element),
							cardid = me.getNewPostForceId().getValue(),
							client = new ZeroClipboard(el.dom),
							kanbanurl = meMain.glueConfigData.BaseURL;
							kanbanurl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
							kanbanurl += meMain.glueConfigData.valueStreamID;
							kanbanurl += '&cardid=' + cardid;
							client.on('copy', function (event) {
								_LOG && console.log('_mo     useover');
								event.clipboardData.setData('text/plain', kanbanurl);
								me.afterCopyUrl(event.target);
							});
						}
					}
				}
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCancelBtn',
				border: 0,
				cls: 'cancelBtn',
				text: 'Cancel'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostDeleteBtn',
				text: 'Delete',
				cls: 'cancelBtn',
				border: 0,
				ui: 'normal'
			});

			me.getNewPostToolbar().add({
				xtype: 'button',
				border: 0,
				itemId: 'newPostSaveBtn',
				text: 'Save',
				ui: 'actionBtn'
			});

			// applying the settings on the edit pop up, when "only owner can edit cards" option is set on for the logged in user of current project board
			if (!meMain.canEditCard) {
				me.getNewPostDeleteBtn().disable();
				//Delete Button
				me.getNewPostSaveBtn().disable();
				//Save Button
			}

			// if "only owner can move the cards" option is set as settings for logged in user then Delete of particular card should be disabled
			if (!meMain.canMoveCard) {
				me.getNewPostDeleteBtn().disable();
				//Delete Button
			}
		} else if (cmp == "MultiSelect") {

			me.getNewPostToolbar().add({
				xtype: 'spacer'
			});

			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCancelBtn',
				border: 0,
				cls: 'cancelBtn',
				text: 'Cancel'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				border: 0,
				itemId: 'newMultiPostSaveBtn',
				text: 'Save',
				ui: 'actionBtn'
			});
		} else {
			// while creating new card
			me.getNewPostToolbar().add({
				xtype: 'spacer'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCancelBtn',
				ui: 'normal',
				cls: 'cancelBtn',
				style: 'min-width: 58px',
				text: 'Cancel'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCreateAndNewBtn',
				text: 'Create & New',
				ui: 'actionBtn'
			});
			me.getNewPostToolbar().add({
				xtype: 'button',
				itemId: 'newPostCreateBtn',
				text: 'Create',
				ui: 'actionBtn'
			});
		}
	},

	/**
	 * called to hide show respective buttons of bottom toolbar of New Post pop up, on view activate
	 * @param {Ext.view.NewPostTask}					view
	 * @param {text}									string
	 */
	newPostTasksViewActivate: function (view, string) {
		_LOG && console.log('newPostTasksViewActivate');
		var me = this,
		cardDueDate;
		view.reset();
		// applying the settings on the edit pop up, when "only owner can edit cards" option is set on for the logged in user of current project board
		if (view.down('#dueDateFieldTask') && view.down('#dueDatePickerFieldTask')) {
			if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
				if (me.getNewPostView()) {
					cardDueDate = me.getNewPostView().getFields('DueDate')[1].getValue();
				}
				// hidden for chrome / safari
				view.down('#dueDateFieldTask').hide();
				view.down('#dueDatePickerFieldTask').show();
				view.down('#dueDatePickerFieldTask').setName('dueDateTask');
				// var dueDate = recValue.dueDateTask;
				// view.down('#dueDatePickerFieldTask').setValue(new Date());
				view.down('#dueDatePickerFieldTask').setValue(new Date(cardDueDate));
			} else {
				if (me.getNewPostView()) {
					cardDueDate = me.getNewPostView().getFields('DueDate').getValue();
				}
				// hidden for IE / Firefox
				view.down('#dueDatePickerFieldTask').hide();
				view.down('#dueDateFieldTask').show();
				view.down('#dueDateFieldTask').setName('dueDateTask');
				// view.down('#dueDateFieldTask').setValue(Ext.Date.format(new Date(), "m/d/Y"));
				view.down('#dueDateFieldTask').setValue(Ext.Date.format(new Date(me.getDateTime(cardDueDate)), 'Y-m-d'));
			}
		}
		view.down('#assignUserBtnTask').setText('Assign a User');
		view.down('#criticalBtnFieldsetTask').items.items[0].setText('None');
		me.arrayTask.length = 0;
	},

	/**
	 * applying main settings of Project Board to task list, if not allowed then hiding task delete button from task list
	 * @param {user ID}					subscriberID
	 */
	applySettingsForTaskDelete: function (subscriberID) {
		_LOG && console.log('applySettingsForTaskDelete');
		var meMain = this.mainControllerObj;
		if (meMain.canMoveCard) {
			return '30px';
		}
		return '0px';

	},

	/**
	 * hiding delete button from subscriber list on the basis of authorized user so that other user can not delete other subscription
	 * @param {user ID}				subscriberID
	 */
	getValidUserForSubsToDelete: function (subscriberID) {
		_LOG && console.log('getValidUserForSubsToDelete');
		if (this.mainControllerObj.glueConfigData.UserID == subscriberID || this.mainControllerObj.glueConfigData.UserID == Ext.getCmp('assignUserHiddenField').getValue()) {
			return '15px';
		}
		return '0px';
	},

	/**
	 * hiding edit button from subscriber list on the basis of authorized user so that other user can not modify other subscriber's details
	 * @param {user ID} subscriberID
	 */
	getValidUserForSubsToEdit: function (subscriberID) {
		_LOG && console.log('getValidUserForSubs');
		if (this.mainControllerObj.glueConfigData.UserID == subscriberID || this.mainControllerObj.glueConfigData.UserID == Ext.getCmp('assignUserHiddenField').getValue()) {
			return '30px';
		}
		return '0px';

	},

	/**
	 * called on blur of almost every text / textarea fields on pop up of board to avoid html tags / special characters in the text
	 * @param {Ext.field}					field
	 * @param {Ext.event.Touch}				e
	 * @param {Object}						eOpts
	 */
	onNewPostFieldBlur: function (field, e, eOpts) {
		_LOG && console.log('onNewPostFieldBlur');
		var currVal = field.getValue() || '',
		newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
		field.setValue(newVal.trim());
	},
	/**
	 *
	 * @param {Ext.button}				btn
	 */
	assignUserBtnTaskTap: function (btn) {
		_LOG && console.log('assignUserBtnTaskTap');
		var me = this;
		me.allUsersOverlay(btn, btn, me.getAssignUserHiddenFieldTask());
	},

	/**
	 * navigating to method , which will open pop up to Assign user to card
	 * @param {Ext.button}			btn
	 */
	assignUserBtnTap: function (btn) {
		_LOG && console.log('assignUserBtnTap');
		var me = this;
		me.allUsersOverlay(btn, btn, Ext.getCmp('assignUserHiddenField'));
	},

	/**
	 * pop up for choosing owner to card, fetching data from force.com every time, on either keyword search or blank search
	 * initailly pop up will be empty with zero records
	 * @param {Ext.button}				btn
	 * @param {Ext.field}				ownerField
	 * @param {Ext.hiddenfield}			ownerIdHiddenField
	 */
	allUsersOverlay: function (btn, ownerField, ownerIdHiddenField) {
		_LOG && console.log('allUsersOverlay');
		var me = this,
		meMain = me.mainControllerObj,
		allUsersStore = Ext.getStore('TempAllUsers'),
		alluserStore = Ext.getStore('AllUsers');
		me.assignUserOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 350,
				floatingCls: 'overlayFloatingClsNew',
				height: 350,
				// zIndex : 50,
				layout: 'vbox',
				centered: true,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: (btn.getItemId() == "assignSubscribers" ? 'Select Subscriber' : 'Assign an Owner'),
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.assignUserOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '0px 10px 0px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Name...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								itemId: 'allUserSearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
										return true;
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchAllUsersBtnTap(me, me.assignUserOverlay, this);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									var searchValue = this.up().getComponent('allUserSearchField');
									me.searchAllUsersBtnTap(me, me.assignUserOverlay, searchValue);
								}
							}
						]
					}, {
						xtype: 'list',
						margin: '-14px 10px 0px 10px',
						itemTpl: '{Name:htmlEncode}',
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						flex: 1,
						store: 'TempAllUsers',
						listeners: {
							itemtap: function (list, index, view, record) {
								if (btn.getItemId() == "logAssignUserBtn") {
									btn.setText(Ext.htmlEncode(record.data.Name));
									Ext.getCmp('LogUserAssignId').setValue(record.data.Id);
								} else if (btn.getItemId() == "assignSubscribers") {
									btn.setText(Ext.htmlEncode(record.data.Name));
									if (me.EditSubcriber) {
										me.EditSubcriber.down('#assignSubscribersId').setValue(record.data.Id);
									} else {
										me.getAssignSubscribersId().setValue(record.data.Id);
									}
								} else {
									if (me.EditTaskRecord) {
										me.EditTaskRecord.down('#assignUserHiddenFieldTask').setValue(record.data.Id);
									} else {
										ownerIdHiddenField && ownerIdHiddenField.setValue(record.data.Id);
									}
									btn.setText(Ext.htmlEncode(record.data.Name));
									Ext.apply(btn.config, {
										OwnerId: record.data.Id
									});

								}
								var tempRec = alluserStore.findRecord('Id', record.data.Id);
								if (!tempRec) {
									alluserStore.add(record.data);
								}
								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignOwnerBottomToolbar',
						height: 35,
						ui: 'greyToolbar',
						items: [{
								xtype: 'button',
								width: 35,
								cls: 'previousBtnDisabledCls',
								itemId: 'allUsersPrevBtn',
								ui: 'topBarBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_allUser > 0) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_allUser -= 10;
										me.assignUserOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_allUser) {
											me.searchString_allUser = "";
										}
										var nextBtn = this.up().getComponent('allUsersNextBtn');
										meMain.getAllUsers(me.offsetSize_allUser, me.searchString_allUser, me.assignUserOverlay, this, nextBtn);
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'nextBtnDisabledCls',
								itemId: 'allUsersNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_allUser < me.count_allUser) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_allUser += 10;
										me.assignUserOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_allUser) {
											me.searchString_allUser = "";
										}
										var prevBtn = this.up().getComponent('allUsersPrevBtn');
										meMain.getAllUsers(me.offsetSize_allUser, me.searchString_allUser, me.assignUserOverlay, prevBtn, this);
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (me.assignUserOverlay) {
							me.assignUserOverlay.destroy();
							me.assignUserOverlay = null;
						}
					},
					show: function () {
						allUsersStore.removeAll();
						if (btn.getItemId() === "assignSubscribers") {
							me.assignUserOverlay[btn.getItemId()] = "assignSubscribers";
						}
						//add all User data in store using localstorage first time when list is open
						if (localStorage.getItem(glueforce.getWorkspaceConfig().UserID)) {
							var tempStoreUsers = localStorage.getItem(glueforce.getWorkspaceConfig().UserID);
							allUsersStore.add(JSON.parse(tempStoreUsers).reverse());
						}
					}
				}
			});
		if (me.assignUserOverlay.isHidden()) {
			me.assignUserOverlay.show();
		} else {
			me.assignUserOverlay.hide();
		}
	},
	/**
	 * Priority button tap on new post edit/create popup
	 * @param {Ext.Button}				btn
	 * @param {Ext.event.Touch}			e
	 * @param {Object}					eOpts
	 */
	priorityBtnTap: function (btn, e, eOpts) {
		_LOG && console.log('priorityBtnTap');
		var meKanban = RealTimeKanbanBoard.app.application.getController('KanbanCardController');
		btn.setText('None');
		if (btn.getItemId() == 'priorityBtnTask') {
			meKanban.getPriorityNewPostTask('Normal');
			meKanban.selectPriorityTask(btn);
		} else {
			meKanban.getPriorityNewPost(4);
			meKanban.selectPriority(btn);
		}
	},
	/**
	 * set priority by value
	 * @param {value}				priority
	 */
	getPriorityNewPost: function (priority) {
		_LOG && console.log('getPriorityNewPost');
		Ext.getCmp('priority').setValue(priority);
	},
	getPriorityNewPostTask: function (priority) {
		_LOG && console.log('getPriorityNewPostTask');
		if (this.getPriorityTask()) {
			if (this.EditTaskRecord) {
				this.EditTaskRecord.down('#priorityTask').setValue(priority);
			} else {
				this.getPriorityTask().setValue(priority);
			}
		}
	},

	/**
	 * Choose priority pop up, on New Post pop up
	 * @param {Ext.Button}				 btn
	 */
	selectPriority: function (btn) {
		_LOG && console.log('selectPriority');
		var me = this;
		me.priorityOverlay = Ext.Viewport.add({
				xtype: 'panel',
				left: 0,
				margin: '-12px -3px 0 5',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 150,
				height: 105,
				style: {
					'background': 'transparent'
				},
				items: [{
						xtype: 'button',
						text: 'Low',
						height: 35,
						style: 'background: #669E20;border-radius: 0px;font-size:14px',
						handler: function (btn) {
							var criticalBtn = Ext.getCmp('criticalBtnFieldset').items.items[0];
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPost(3);
							me.priorityOverlay.hide();
						}
					}, {
						xtype: 'button',
						text: 'Medium',
						height: 35,
						style: 'background: #0A7FE9;border-radius: 0px;font-size:14px',
						handler: function (btn) {
							var criticalBtn = Ext.getCmp('criticalBtnFieldset').items.items[0];
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPost(2);
							me.priorityOverlay.hide();
						}
					}, {
						xtype: 'button',
						text: 'Critical',
						style: 'background: #E34848;border-radius: 0px;font-size:14px',
						height: 35,
						handler: function (btn) {
							var criticalBtn = Ext.getCmp('criticalBtnFieldset').items.items[0];
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPost(1);
							me.priorityOverlay.hide();
						}
					}
				],
				listeners: {
					hide: function () {
						Ext.getCmp('criticalBtnFieldset').items.items[0].setCls('prority_lbl_white');
						if (me.priorityOverlay) {
							me.priorityOverlay.destroy();
							me.priorityOverlay = null;
						}
						if (!(Ext.getCmp('priority').getValue())) {
							Ext.getCmp('priority').setValue('1');
						}
					},
					show: function () {
						Ext.getCmp('criticalBtnFieldset').items.items[0].setCls('prority_lbl_white');
					}
				}
			});
		if (me.priorityOverlay.isHidden()) {
			me.priorityOverlay.showBy(btn);
		} else {
			me.priorityOverlay.hide();
		}
	},

	/**
	 * choose priority for task of particular card
	 * @param {Ext.Button}				btn
	 */
	selectPriorityTask: function (btn) {
		_LOG && console.log('selectPriorityTask');
		var me = this,
		criticalBtn;
		me.taskPriorityOverlay = Ext.Viewport.add({
				xtype: 'panel',
				left: 0,
				margin: '-11px -3px 0 5',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				// zIndex : 50,
				width: 150,
				height: 105,
				items: [{
						xtype: 'button',
						text: 'Low',
						height: 35,
						style: 'background: #669E20;border-radius: 0px;font-size:14px',
						handler: function (btn) {
							if (me.EditTaskRecord) {
								criticalBtn = me.EditTaskRecord.down('#priorityBtnTask');
							} else {
								criticalBtn = me.getCriticalBtnFieldsetTask().items.items[0];
							}
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPostTask('Low');
							me.taskPriorityOverlay.hide();
						}
					}, {
						xtype: 'button',
						text: 'Normal',
						height: 35,
						style: 'background: #0A7FE9;border-radius: 0px;font-size:14px',
						handler: function (btn) {
							if (me.EditTaskRecord) {
								criticalBtn = me.EditTaskRecord.down('#priorityBtnTask');
							} else {
								criticalBtn = me.getCriticalBtnFieldsetTask().items.items[0];
							}
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPostTask('Normal');
							me.taskPriorityOverlay.hide();
						}
					}, {
						xtype: 'button',
						text: 'High',
						height: 35,
						style: 'background: #E34848;border-radius: 0px;font-size:14px',
						handler: function (btn) {
							if (me.EditTaskRecord) {
								criticalBtn = me.EditTaskRecord.down('#priorityBtnTask');
							} else {
								criticalBtn = me.getCriticalBtnFieldsetTask().items.items[0];
							}
							criticalBtn.setText(Ext.htmlEncode(btn._text));
							criticalBtn.setStyle('background: white;border-radius: 0px;');
							me.getPriorityNewPostTask('High');
							me.taskPriorityOverlay.hide();
						}
					}
				],
				listeners: {
					hide: function () {
						if (me.EditTaskRecord) {
							me.EditTaskRecord.down('#priorityBtnTask').setCls('prority_lbl_white');
						} else {
							me.getCriticalBtnFieldsetTask().items.items[0].setCls('prority_lbl_white');
						}
						if (me.taskPriorityOverlay) {
							me.taskPriorityOverlay.destroy();
							me.taskPriorityOverlay = null;
						}
					}
				}
			});
		if (me.taskPriorityOverlay.isHidden()) {
			me.taskPriorityOverlay.showBy(btn);
		} else {
			me.taskPriorityOverlay.hide();
		}
	},

	/**
	 * called when Copy URL button is tapped, to copy the URL of respective card with ref to VS
	 * @param {Ext.dom.Element}						el
	 */
	afterCopyUrl: function (el) {
		_LOG && console.log('afterCopyUrl');
		var meMain = this.mainControllerObj;
		if (Ext.ux.Config.getIsChrome()) {
			el.style.backgroundImage = "-webkit-linear-gradient(top, #60B654, #60B654 3%, #60B654)";
			setTimeout(function () {
				el.style.backgroundImage = "";
			}, 500);
		}
		if (meMain.toolTipTimeout) {
			window.clearTimeout(meMain.toolTipTimeout);
		}
		if (Ext.getCmp('toolTipPnl')) {
			Ext.getCmp('toolTipPnl').destroy();
		}
		/**
		 * @class {Ext.ux.Tooltip}
		 */
		Ext.create('Ext.ux.Tooltip', {
			html: 'URL copied to clipboard',
			element: el
		});

		meMain.toolTipTimeout = setTimeout(function () {
				if (Ext.getCmp('toolTipPnl')) {
					Ext.getCmp('toolTipPnl').destroy();
				}
			}, 3000);
	},

	/**
	 * choose category pop up
	 * @param {Ext.Button}				btn
	 * @param {Ext.event.Touch}			e
	 * @param {Object}					opts
	 */
	categoryTextBtnTap: function (btn, e, opts) {
		_LOG && console.log('categoryTextBtnTap');
		var me = this,
		categoryStore = Ext.getStore('Category'),
		ExtMain = RealTimeKanbanBoard.app.application.getController('ExtendedMainController');
		ExtMain.getUserPreferencesClone();
		me.categoryOverlay = Ext.Viewport.add({
				xtype: 'panel',
				left: 0,
				cls: 'sidemenuCls',
				margin: '-11px 0 0 0px',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 280,
				height: 320,
				layout: 'vbox',
				items: [{
						xtype: 'panel',
						layout: 'hbox',
						docked: 'top',
						height: '30',
						margin: '5px 5px 0px 5px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Name..',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								listeners: {
									keyup: function (field, e) {
										categoryStore.clearFilter();
										var thisRegEx = new RegExp(field.getValue(), "i");
										categoryStore.filterBy(function (record) {
											if (thisRegEx.test(record.get('Name'))) {
												return true;
											}
											return false;
										});
										me.categoryOverlay.layout.redrawContainer();
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								disabled: true,
								height: 33
							}
						]
					}, {
						xtype: 'list',
						variableHeights: true,
						style: {
							'background': 'transparent',
							'margin-top': '-13px'
						},
						itemCls: 'categoryListCls',
						flex: 1,
						itemHeight: 35,
						store: 'Category',
						scrollToTopOnRefresh: false,
						itemTpl: new Ext.XTemplate('<div style="width: 100%;display: inline;"><div style="margin-top: 0px;width:100%;"><div style="width: 180px;overflow:hidden; white-space:nowrap;text-overflow:ellipsis;">{[Ext.htmlEncode(values.Name)]}</div>' + '{[RealTimeKanbanBoard.app.getApplication().getController("KanbanCardController").isDeleteIconDisabled(values.Lean__DerivedFrom__c, values.Lean__DerivedFrom__r)]}' + '{[this.getEditIcon(values.Lean__DerivedFrom__c, values.Lean__DerivedFrom__r)]}' + '</div></div>', {
							getEditIcon: function (derivedFrom, derivedFromObj) {
								if ((!derivedFrom && !derivedFromObj) || me.categoryPermissionSet == true) {
									return '<img title="Edit Category" style="margin-top: -14px; height:20px;width:20px;float: right;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTMtMTEtMjZUMTU6Mjg6MDYrMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDEzLTExLTI2VDE3OjQyOjQxKzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDEzLTExLTI2VDE3OjQyOjQxKzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzUwQURDNDU2OTQxMUUzOEM1Q0ZBRDZBNkI5MjgyNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzUwQURDNTU2OTQxMUUzOEM1Q0ZBRDZBNkI5MjgyNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNTBBREMyNTY5NDExRTM4QzVDRkFENkE2QjkyODI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDNTBBREMzNTY5NDExRTM4QzVDRkFENkE2QjkyODI0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+U8I2iwAAAOtJREFUeNrM1DELAWEcx3GHDEgM3oFNyWRSFmGQUuJlyHaL/TZMJhajQdkMx0AZbCZ5BUopCZvzVU96Bp08LvnVp+6e4Vd397+/ZlmWy8l45Rtd15VKDMN4XrtdDkelMIo24k4VNlHHHLFvCkOYYoIZImjYfhSb+DFGBimUcUZXpdCHkSh7JIAWErh9+siPsiFy0tkelVdl7wo9GKAknR2QxebTsdHQQ1U6O6KAtcocJnGS7i8oYqUy2EExHlv0cRWPvVD9U2oIo4Ml0jCVloNIXrw/UwzwTnnbiFR/vRxsozm9YP9iH9rmLsAAYCIrXomANmMAAAAASUVORK5CYII="/>';
								}
							}
						}),
						listeners: {
							itemtap: function (list, index, view, record, e) {
								var meMain = me.mainControllerObj,
								cat,
								PreferencesUsed = false,
								followChatter,
								subscribeCard,
								kanbanStore,
								TemplateRec;
								if (e.target.title == "Delete Category") {
									if (!record.data.Lean__DerivedFrom__c) {
										// load Prefrences Value and making sure that deleting category not contain with preferences
										followChatter = meMain.glueConfigData.Preferences.followonchatter;
										subscribeCard = meMain.glueConfigData.Preferences.subscribetocard;
										if (followChatter != "all" && followChatter != "none") {
											followChatter = JSON.parse(followChatter);
											if (followChatter.length) {
												for (cat = 0; cat < followChatter.length; cat++) {
													if (followChatter[cat] == record.data.Id) {
														PreferencesUsed = true;
													}
												}
											}
										}
										if (subscribeCard != "all" && subscribeCard != "none") {
											subscribeCard = JSON.parse(subscribeCard);
											if (subscribeCard.length) {
												for (cat = 0; cat < subscribeCard.length; cat++) {
													if (subscribeCard[cat] == record.data.Id) {
														PreferencesUsed = true;
													}
												}
											}
										}
										kanbanStore = Ext.getStore('KanbanCards');
										TemplateRec = kanbanStore.findRecord('TemplateID', record.data.Id);
										if (!TemplateRec) {
											TemplateRec = kanbanStore.findRecord('TemplateID', record.data.Id.substr(0, 15));
										}
										if (TemplateRec) {
											meMain.alertMsgBox('Cards exist on the board with category "' + Ext.htmlEncode(record.data.Name) + '". Change categories of cards first.');
										} else
											if (glueforce.getWorkspaceConfig().caseCardCategory == record.data.Id) {
												meMain.alertMsgBox('This category is used for Case syncing. You cannot delete it until another is selected in the preferences dialog.');
											} else
												if (glueforce.getWorkspaceConfig().OpportunityCardCategory == record.data.Id) {
													meMain.alertMsgBox('This category is used for Opportunity syncing. You cannot delete it until another is selected in the preferences dialog.');
												} else
													if (categoryStore.data.length === 1) {
														meMain.alertMsgBox('Only category on board, can not delete it.');
													} else
														if (PreferencesUsed === true) {
															meMain.alertMsgBox('Category "' + Ext.htmlEncode(record.data.Name) + '" used in Preferences settings. please change Preferences for delete this.');
														} else if (glueforce.getWorkspaceConfig().DefaultCategory === record.data.Id) {
															meMain.alertMsgBox('This category is used for "Inbound Email" setting. You cannot delete it until another is selected in the preferences dialog.');
														} else {
															Ext.Msg.show({
																message: '<div class="popUpCls" style="font-size:15px;">Delete category ' + Ext.htmlEncode(record.data.Name) + ' ?</div>',
																buttons: [{
																		iconMask: true,
																		text: 'OK',
																		margin: 4,
																		ui: 'actionBtn',
																		handler: function () {
																			var kanbanTemplate = {
																				'id': record.data.Id,
																				'name': record.data.Name,
																				'title': record.data.Lean__Title__c,
																				'color': record.data.Lean__Color__c,
																				'csslayout': '',
																				'height': record.data.Lean__Height__c,
																				'width': record.data.Lean__Width__c,
																				'jsondata': '',
																				'jsondefinition': '',
																				'valuestream': meMain.glueConfigData.valueStreamID
																			};
																			glueforce.removeKanbanCardTemplate(kanbanTemplate, function (onSuccess) {
																				_LOG && console.log('removeKanbanCardTemplate ', onSuccess);
																				if (Ext.getStore('categoryFilterList')) {
																					var filterCategoryRecord = Ext.getStore('categoryFilterList').findRecord('Id', kanbanTemplate.id);
																					filterCategoryRecord && Ext.getStore('categoryFilterList').remove(filterCategoryRecord);
																				}
																				categoryStore.removeAt(index);
																				categoryStore.sync();
																				if (browser) { // dynamic scroll update for IE 11
																					me.categoryOverlay.layout.redrawContainer();
																				}
																			});
																			this.hide();
																		}
																	}, {
																		iconMask: true,
																		text: 'Cancel',
																		ui: 'normal',
																		margin: 4,
																		cls: 'cancelBtn',
																		handler: function () {
																			this.hide();
																		}
																	}
																]
															});
														}
									}
								} else
									if (e.target.title == "Edit Category") {
										me.createNewCategory('disclose', record.data);
									} else {
										Ext.getCmp('categoryTextBtn').setText(Ext.htmlEncode(record.data.Name));
										Ext.getCmp('categoryTextHiddenField').setValue(record.data.Id);
										Ext.getCmp('kanabacardTitle').setHtml('<div class="label_priority_cls preferencesMenuTitle">' + Ext.htmlEncode(record.data.Name) + '</div>');

										var catRecord = categoryStore.getAt(index),
										jsonDef,
										jsonDefPanel,
										dynamicFields;
										if (catRecord) {
											jsonDef = catRecord.data.Lean__JSONDefinition__c;
											jsonDefPanel = Ext.getCmp('jsonDefinitionPanel');
											if (jsonDef && jsonDefPanel) {
												dynamicFields = JSON.parse(Ext.String.htmlDecode(jsonDef));
												jsonDefPanel.show();
												jsonDefPanel.removeAll();
												/**@Bhupendra */
												Ext.Array.forEach(dynamicFields.config.items, function (fldJ) {
													if (fldJ.xtype == "datepickerfield") {
														fldJ.value = new Date();
														fldJ.picker = {
															yearFrom: new Date().getFullYear() - 1,
															yearTo: new Date().getFullYear() + 15
														};
													}
												});
												Ext.apply(dynamicFields.config, {
													defaults: {
														labelAlign: 'top',
														labelCls: 'fieldLabelCls',
														inputCls: 'selectBorderCls',
														clearIcon: false
													},
													cls: 'fieldSetCustomfld'
												});
												jsonDefPanel.add(dynamicFields.config);
												var dynField = jsonDefPanel.getComponent('formExtendPanelKanban');
												if (dynField) {
													Ext.Array.forEach(dynField.getItems().items, function (itm) {
														if (itm.getName) {
															var fieldName = itm.getName();
															if (itm.getItemId().split('-')[1] == "currencyField") {
																itm.on('blur', function (itm) {
																	itm.showCurrency(itm, itm.config.currency);
																});
																itm.on('focus', function (itm) {
																	itm.setValue(itm.valueToRaw(itm.rawToValue(itm.getValue())));
																	// itm.showCurrency(itm,itm.config.currency);
																});
															}
														}
													});
												}

											} else {
												jsonDefPanel && jsonDefPanel.hide();
											}
											if (browser) {
												me.categoryOverlay.layout.redrawContainer();
											}
										}
										setTimeout(function () {
											list.up().hide();
										}, 100);
									}
							}
						}
					}, {
						xtype: 'toolbar',
						height: 45,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom',
						items: [{
								xtype: 'spacer'
							}, {
								xtype: 'button',
								ui: 'actionBtn',
								text: 'Create',
								handler: function () {
									me.createNewCategory('create', '', me.categoryOverlay);
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						categoryStore.clearFilter();
						if (me.categoryOverlay) {
							me.categoryOverlay.destroy();
							me.categoryOverlay = null;
						}
					}
				}
			});
		if (me.categoryOverlay.isHidden()) {
			me.categoryOverlay.showBy(btn);
		} else {
			me.categoryOverlay.hide();
		}
	},
	/**
	 * Here we can create new category for this valuestream
	 * @param {Identifire}					fromMethod
	 * @param {Ext.model.Category}			categoryRecord
	 * @param {Ext.Overlay}					catOverlay
	 */
	createNewCategory: function (fromMethod, categoryRecord, catOverlay) {
		_LOG && console.log('createNewCategory');
		var me = this,
		defaultColor = '#fcfabd',
		categoryName,
		categoryStore = Ext.getStore('Category'),
		categoryHeight = 120,
		categoryWidth = 170,
		categoryColor,
		applyEntireRoom = false,
		entireORG = false,
		entireBoard = false,
		meMain = me.mainControllerObj,
		kanbanTemplate,
		checkName,
		duplicateString = false;
		if (!categoryRecord || categoryRecord === '') {
			entireBoard = true;
		}
		me.addCategoryOverlay = Ext.Viewport.add({
				xtype: 'panel',
				left: 0,
				margin: '-11px 0 0 0px',
				style: {
					'border-radius': '0px'
				},
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 260,
				height: 370,
				cls: 'sidemenuCls',
				layout: 'vbox',
				scrollable: null,
				items: [{
						html: '<div class="categoryHeadingCls">New Category</div>',
						itemId: 'headingCategoryHml'
					}, {
						xtype: 'textfield',
						name: 'categoryName',
						label: 'Category Name',
						itemId: 'categoryNameField',
						labelAlign: 'top',
						inputCls: 'selectBorderCls',
						maxLength: 80,
						labelCls: 'fieldLabelCls',
						margin: '1 10 2 10',
						clearIcon: false,
						listeners: {
							blur: function (field, e, eOpts) {
								var currVal = field.getValue() || '',
								newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
								field.setValue(newVal.trim());

							}
						}
					}, {
						xtype: 'label',
						cls: 'colorFormLabelCls',
						html: 'Color',
						style: 'padding-left: 9px;'
					}, {
						xtype: 'button',
						cls: 'categoryEditCls',
						height: 34,
						itemId: 'categoryColorField',
						text: '<table width="100%"><tr><td><div style="height:20px;width:83%;background-color:' + Ext.htmlEncode(defaultColor) + '"></div></td></tr></table>',
						handler: function () {
							var meBtn = this;
							me.colorPickerOverlay = "";
							me.colorPickerOverlay = Ext.Viewport.add({
									xtype: 'panel',
									left: 0,
									margin: '-11px 0 0 0px',
									style: {
										'border-radius': '0px'
									},
									showAnimation: {
										type: 'popIn',
										duration: 250,
										easing: 'ease-out'
									},
									hideAnimation: {
										type: 'popOut',
										duration: 250,
										easing: 'ease-out'
									},
									modal: true,
									hideOnMaskTap: true,
									hidden: true,
									width: 233,
									height: 184,
									layout: 'vbox',
									items: [{
											xtype: 'panel',
											height: 22,
											width: 213,
											layout: 'hbox',
											style: 'border-bottom:1px solid #ededed; margin: 10px 10px 0px 10px;',
											items: [{
													xtype: 'label',
													html: '<p style="font-size:12px">SELECT A COLOR</p>',
													height: 20
												}, {
													xtype: 'button',
													height: 20,
													top: -9,
													right: 0,
													cls: 'removeSwimlaneCls',
													docked: 'right',
													style: 'background:transparent;border:0',
													handler: function () {
														me.colorPickerOverlay.destroy();
														me.colorPickerOverlay = null;
													}
												}
											]
										}, {
											xtype: 'dataview',
											flex: 1,
											itemId: 'colorPickerDataview',
											store: 'ColorPicker',
											selectedCls: 'checkIcon',
											margin: 5,
											inline: {
												wrap: true
											},
											itemTpl: '<div class="colorPickerDataViewCls" style="background-color: {color}"></div><div class="checkIconslt"></div>',
											listeners: {
												itemtap: function (list, index, target, record, e, eOpts) {
													meBtn.setText('<table width="100%"><tr><td><div style="height:20px;width:83%;background-color:' + Ext.htmlEncode(record.data.color) + '"></div></td></tr></table>');
													Ext.getCmp('categoryColor').setValue(record.data.color);
													setTimeout(function () {
														me.colorPickerOverlay.hide();
													}, 100);
												},
												painted: function (list, eOpts) {
													var strec = Ext.getStore('ColorPicker').findRecord('color', Ext.getCmp('categoryColor').getValue());
													if (strec) {
														this.select(strec, false, true);
													}
												}
											}
										}
									],
									listeners: {
										hide: function () {
											if (me.colorPickerOverlay) {
												me.colorPickerOverlay.destroy();
												me.colorPickerOverlay = null;
											}
										}
									}
								});
							if (me.colorPickerOverlay.isHidden()) {
								me.colorPickerOverlay.showBy(meBtn);
							} else {
								me.colorPickerOverlay.hide();
							}
						}
					}, {
						xtype: 'fieldset',
						layout: 'vbox',
						hidden: (!me.categoryPermissionSet),
						cls: 'statusradiofieldset',
						margin: 0,
						items: [{
								xtype: 'radiofield',
								cls: 'radio_btn',
								labelAlign: 'right',
								inputCls: 'radioinput',
								label: 'Apply to This Board',
								name: 'CategoryType',
								labelWidth: '85%',
								minHeight: 36,
								maxHeight: 36,
								checked: categoryRecord.EntireBoard || entireBoard,
								itemId: 'entireBoard'
							}, {
								xtype: 'radiofield',
								cls: 'radio_btn',
								labelAlign: 'right',
								inputCls: 'radioinput',
								minHeight: 36,
								maxHeight: 36,
								checked: categoryRecord.EntireRoom || false,
								label: 'Apply to Entire Project',
								name: 'CategoryType',
								itemId: 'entireRoom',
								labelWidth: '85%'
							}, {
								xtype: 'radiofield',
								cls: 'radio_btn',
								labelAlign: 'right',
								inputCls: 'radioinput',
								minHeight: 36,
								maxHeight: 36,
								checked: categoryRecord.EntireORG || false,
								label: 'Apply to All Projects',
								name: 'CategoryType',
								itemId: 'entireORG',
								labelWidth: '85%'
							}
						]
					}, {
						xtype: 'hiddenfield',
						id: 'categoryColor',
						name: 'categoryColor',
						value: '#FFFF33'
					}, {
						xtype: 'toolbar',
						height: 45,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom',
						items: [{
								xtype: 'spacer'
							}, {
								xtype: 'button',
								text: 'Save', // Create Save
								itemId: 'categorySaveBtn',
								minWidth: 65,
								ui: 'actionBtn',
								handler: function () {
									categoryName = this.up().up().getComponent('categoryNameField').getValue();
									categoryColor = Ext.getCmp('categoryColor').getValue();
									applyEntireRoom = me.addCategoryOverlay.down('#entireRoom').getChecked();
									entireORG = me.addCategoryOverlay.down('#entireORG').getChecked();
									entireBoard = me.addCategoryOverlay.down('#entireBoard').getChecked();
									kanbanTemplate = [];
									categoryStore.each(function (catRecord) {
										// To check if any Duplicate string found in store
										checkName = categoryName.toLowerCase().trim();
										if (catRecord.data.Name.toLowerCase().trim() == checkName) {
											duplicateString = true;
										}
									});
									if (categoryName && !duplicateString) {
										kanbanTemplate.push({
											'name': categoryName,
											'title': categoryName,
											'color': categoryColor,
											'EntireRoom': applyEntireRoom,
											'EntireORG': entireORG,
											'EntireBoard': entireBoard,
											'RoomID': glueforce.getWorkspaceConfig().projectRoomID,
											'csslayout': '',
											'height': categoryHeight,
											'width': categoryWidth,
											'jsondata': '',
											'jsondefinition': '',
											'valuestream': meMain.glueConfigData.valueStreamID
										});
										glueforce.createKanbanCardTemplate(kanbanTemplate, function (categorySuccess) {
											_LOG && console.log('createKanbanCardTemplate ', categorySuccess);
											categorySuccess[0].EntireRoom = applyEntireRoom;
											categorySuccess[0].EntireORG = entireORG;
											categorySuccess[0].EntireBoard = entireBoard;
											categorySuccess[0].Lean__Title__c = categoryName;
											categorySuccess[0].Name = categoryName;

											Ext.getStore('categoryFilterList') && Ext.getStore('categoryFilterList').add(categorySuccess);
											categoryStore.add(categorySuccess);
											if (browser && catOverlay) { // dynamic scroll update for IE 11
												catOverlay.layout.redrawContainer();
											}
										});
										me.addCategoryOverlay.hide();
									} else if (duplicateString) {
										duplicateString = false;
										meMain.alertMsgBox('A category with this same name already exists on this board.');
									} else {
										meMain.alertMsgBox('Please enter category name.');
									}
								}
							}, {
								xtype: 'button',
								text: 'Save', // edit save
								itemId: 'categoryEditBtn',
								hidden: true,
								minWidth: 65,
								ui: 'actionBtn',
								handler: function () {
									var msgString = '';
									categoryName = this.up().up().getComponent('categoryNameField').getValue();
									categoryColor = Ext.getCmp('categoryColor').getValue();
									applyEntireRoom = me.addCategoryOverlay.down('#entireRoom').getChecked();
									entireORG = me.addCategoryOverlay.down('#entireORG').getChecked();
									entireBoard = me.addCategoryOverlay.down('#entireBoard').getChecked();

									categoryStore.each(function (catRecord) {
										// To check if any Duplicate string found in store
										checkName = categoryName.toLowerCase().trim();
										if (catRecord.data.Name.toLowerCase().trim() == checkName && catRecord.data.Id != categoryRecord.Id) {
											duplicateString = true;
										}
									});
									if (categoryName && !duplicateString) {
										var callbacfunction = function () {
											var catRecord = categoryStore.findRecord('Id', categoryRecord.Id),
											catPiclist = Ext.getCmp('categoryTextBtn'),
											catId = Ext.getCmp('categoryTextHiddenField'),
											sideMenuTtl = Ext.getCmp('kanabacardTitle');
											if (catId.getValue() == categoryRecord.Id) {
												catPiclist.setText(Ext.htmlEncode(categoryName));
												sideMenuTtl.setHtml('<div class="label_priority_cls preferencesMenuTitle">' + Ext.htmlEncode(categoryName) + '</div>');
											}

											if (catRecord) {
												categoryHeight = catRecord.get('Lean__Height__c');
												categoryWidth = catRecord.get('Lean__Width__c');
												catRecord.set('Name', categoryName);
												catRecord.set('Lean__Title__c', categoryName);
												catRecord.set('Lean__Height__c', categoryHeight);
												catRecord.set('Lean__Width__c', categoryWidth);
												catRecord.set('Lean__Color__c', categoryColor);
												catRecord.set('EntireRoom', applyEntireRoom);
												catRecord.set('EntireORG', entireORG);
												catRecord.set('EntireBoard', entireBoard);
												if (entireBoard) {
													catRecord.set('Lean__DerivedFrom__c', null);
												}
												categoryStore.sync();
											}
											kanbanTemplate = {
												'id': categoryRecord.Id,
												'name': categoryName,
												'title': categoryName,
												'color': (categoryColor || '#fcfabd'),
												'EntireRoom': applyEntireRoom,
												'EntireORG': entireORG,
												'EntireBoard': entireBoard,
												'RoomID': glueforce.getWorkspaceConfig().projectRoomID,
												'DerivedFrom': catRecord.get('Lean__DerivedFrom__c') || null,
												'csslayout': '',
												'height': categoryHeight,
												'width': categoryWidth,
												'jsondata': '',
												'jsondefinition': '',
												'valuestream': meMain.glueConfigData.valueStreamID
											};
											glueforce.updateKanbanCardTemplate(kanbanTemplate, function (categoryRecord) {
												_LOG && console.log('updateKanbanCardTemplate ', categoryRecord);
												catRecord.set('Lean__DerivedFrom__r', categoryRecord.Lean__DerivedFrom__r);
												catRecord.set('Lean__DerivedFrom__c', categoryRecord.Lean__DerivedFrom__c);
												/**If user edit any category title then it will reflect to other card also*/
												me.applyCategoryChange(kanbanTemplate);
											});
											me.addCategoryOverlay.hide();
										};
										if (categoryRecord.EntireRoom) {
											msgString = 'This operation will update all cards with this category in this Project.';
										} else
											if (categoryRecord.EntireORG) {
												msgString = 'This operation will update all cards with this category in all Projects.';
											} else {
												callbacfunction();
											}
										msgString && Ext.Msg.show({
											message: '<div class="popUpCls" style="font-size:15px;">' + Ext.htmlEncode(msgString) + '</div>',
											buttons: [{
													iconMask: true,
													text: 'OK',
													margin: 4,
													ui: 'actionBtn',
													handler: function () {
														this.hide();
														callbacfunction();
													}
												}, {
													iconMask: true,
													text: 'Cancel',
													ui: 'normal',
													margin: 4,
													cls: 'cancelBtn',
													handler: function () {
														this.hide();
														return;
													}
												}
											]
										});

									} else if (duplicateString) {
										duplicateString = false;
										meMain.alertMsgBox('A category with this same name already exists on this board.');
									} else {
										meMain.alertMsgBox('Please enter category name.');
									}
								}
							}, {
								xtype: 'button',
								border: 0,
								cls: 'cancelBtn',
								text: 'Cancel',
								handler: function () {
									me.addCategoryOverlay.hide();
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (me.addCategoryOverlay) {
							me.addCategoryOverlay.destroy();
							me.addCategoryOverlay = null;
						}
					}
				}
			});
		if (me.addCategoryOverlay.isHidden()) {
			me.addCategoryOverlay.showBy(Ext.getCmp('categoryTextBtn'));
			if (fromMethod == "disclose") {
				var formFields = me.addCategoryOverlay;
				formFields.getComponent('headingCategoryHml').setHtml('<div class="categoryHeadingCls">Edit Category</div>');
				// decoded name to decode special characters like, &amp; etc...
				formFields.getComponent("categoryNameField").setValue(Ext.htmlDecode(categoryRecord.Name));
				formFields.getComponent("categoryColorField").setText('<table width="100%"><tr><td><div style="height:20px;width:83%;background-color:' + Ext.htmlEncode(categoryRecord.Lean__Color__c) + '"></div></td></tr></table>');
				Ext.getCmp('categoryColor').setValue(categoryRecord.Lean__Color__c);
				formFields.down("#categorySaveBtn").hide();
				formFields.down("#categoryEditBtn").show();
			}
		} else {
			me.addCategoryOverlay.hide();
		}
	},

	/**
	 * called when tapped on Link Project Board button on New POst pop up
	 * @param {Ext.Button}									linkBtn
	 * @param {kanban card id for clone}					kanabanCardId
	 * @param {index number edit card menu item}			index
	 */
	linkProjectBoardBtnTap: function (linkBtn, kanabanCardId, indexNo) {
		_LOG && console.log('linkProjectBoardBtnTap');
		var me = this,
		recordDataHyper,
		cardRecord,
		templetDerviedId,
		projectfld = Ext.ComponentQuery.query('#assignLinkProject')[0],
		v = 0,
		kanbanStore,
		templetData;
		//vsStore = Ext.getStore('AllValueStreams');
		if (projectfld && !projectfld.config.valueId) {
			return me.mainControllerObj.alertMsgBox('Please select project first!.');
		}
		me.linkToOverlay = Ext.Viewport.add({
				xtype: 'formpanel',
				modal: true,
				// hideOnMaskTap : true,
				hidden: true,
				width: 350,
				floatingCls: 'overlayFloatingClsNew',
				height: 380,
				layout: 'vbox',
				centered: true,
				scrollable: null,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Link to Project Board',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.linkToOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Board...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								listeners: {
									keyup: function (field, e) {
										var thisRegEx = new RegExp(field.getValue(), "i");
										me.tempVSStore.clearFilter();
										me.tempVSStore.filterBy(function (record) {
											if (thisRegEx.test(record.get('Name'))) {
												return true;
											}
											return false;
										});
										me.linkToOverlay.layout.redrawContainer();
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls'
							}
						]
					}, {
						xtype: 'list',
						itemTpl: '<tpl>{[Ext.htmlEncode(values.Name)]}</tpl>',
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						flex: 1,
						margin: '-14px 10px 0px 10px',
						store: 'AllValueStreams',
						listeners: {
							itemtap: function (list, index, view, record) {

								me.getLinkProjectBoardBtn().setText(Ext.htmlEncode(record.data.Name));
								Ext.getCmp('projectBoardLinkKanban').setValue(record.data.Name);
								Ext.getCmp('projectBoardLinkHiddenField').setValue(record.data.Id);
								Ext.getCmp('projectValueStreamLinkBoardType').setValue(record.data.Lean__BoardType__c);
								Ext.getCmp('projectBoardCardLinkKanban').setValue('');
								Ext.getCmp('projectBoardCardLinkHiddenField').setValue('');
								me.getAssignCard().setText('');
								setTimeout(function () {
									me.linkToOverlay.hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignContactBottomToolbar',
						height: 45,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom'
					}
				],
				listeners: {
					hide: function () {
						if (me.linkToOverlay) {
							me.linkToOverlay.destroy();
							me.linkToOverlay = null;
						}
						if (me.tempVSStore) {
							me.tempVSStore.removeAll();
							me.tempVSStore.destroy();
							me.tempVSStore = null;
						}
						//vsStore.clearFilter();
					},
					show: function () {
						/**get all value streams record*/
						me.linkToOverlay.setMasked({
							xtype: 'loadmask',
							message: 'Loading...'
						});
						//vsStore.removeAll();
						glueforce.getValueStreams(projectfld.config.valueId, function (onSuccess) {
							if (onSuccess.length) {
								//vsStore.add(onSuccess);
								//vsStore.filter('Lean__ProjectRoom__c', projectfld.config.valueId);
								if (!me.tempVSStore) {
									me.tempVSStore = Ext.create("Ext.data.Store", {
											model: "RealTimeKanbanBoard.model.AllValueStreams"
										});
								} else {
									me.tempVSStore.removeAll();
								}
								me.tempVSStore.add(onSuccess);
								me.tempVSStore.sort('Name', 'ASC');
								me.linkToOverlay.down('list').setStore(me.tempVSStore);
							}
							me.linkToOverlay && me.linkToOverlay.setMasked(false);
						});
					}
				}
			});
		me.linkToOverlay.show();
	},
	/**
	 * called when tapped on Link Project Board button on New POst pop up
	 * @param {Ext.Button}							linkBtn
	 */
	assignCardBtnTap: function (linkBtn) {
		_LOG && console.log('assignCardBtnTap');
		var me = this,
		valueStreamAllCardsStore = Ext.getStore('ValueStreamAllCards');
		if (Ext.getCmp('projectBoardLinkHiddenField').getValue()) {
			me.linkCardToOverlay = Ext.Viewport.add({
					xtype: 'formpanel',
					modal: true,
					hideOnMaskTap: true,
					hidden: true,
					width: 350,
					floatingCls: 'overlayFloatingClsNew',
					height: 350,
					layout: 'vbox',
					centered: true,
					scrollable: null,
					items: [{
							xtype: 'toolbar',
							docked: 'top',
							height: 35,
							margin: 10,
							minHeight: 30,
							ui: 'topToolBar',
							items: [{
									html: 'Link to Card',
									ui: 'topBarBtnNew',
									labelCls: 'btntitlelblCls'
								}, {
									xtype: 'spacer'
								}, {
									cls: 'removeSwimlaneCls',
									ui: 'topBarBtnNew',
									handler: function () {
										me.linkCardToOverlay.hide();
									}
								}
							]
						}, {
							xtype: 'panel',
							layout: 'hbox',
							margin: '10px 10px 0px 10px',
							items: [{
									xtype: 'textfield',
									placeHolder: 'Search by Card...',
									clearIcon: false,
									flex: 1,
									cls: 'searchFieldPopUp',
									inputCls: 'searchFieldCls',
									listeners: {
										keyup: function (field, e) {
											valueStreamAllCardsStore.clearFilter();
											var thisRegEx = new RegExp(field.getValue(), "i");
											valueStreamAllCardsStore.filterBy(function (record) {
												if (thisRegEx.test(record.get('Name'))) {
													return true;
												}
												return false;
											});
											me.linkCardToOverlay.layout.redrawContainer();
										}
									}
								}, {
									xtype: 'button',
									cls: 'searchBtnCls'
								}
							]
						}, {
							xtype: 'list',
							itemTpl: '<tpl>{[Ext.htmlEncode(values.Name)]}</tpl>',
							style: {
								'background': 'transparent'
							},
							itemCls: 'assignUserItemCls',
							flex: 1,
							margin: '-14px 10px 0px 10px',
							store: valueStreamAllCardsStore,
							listeners: {
								itemtap: function (list, index, view, record) {
									me.getAssignCard().setText(Ext.htmlEncode(record.data.Name));
									Ext.getCmp('projectBoardCardLinkKanban').setValue(record.data.Name);
									Ext.getCmp('projectBoardCardLinkHiddenField').setValue(record.data.Id);
									setTimeout(function () {
										list.up().hide();
									}, 100);
								}
							}
						}, {
							xtype: 'toolbar',
							itemId: 'assignContactBottomToolbar',
							height: 35,
							minHeight: 30,
							ui: 'greyToolbar',
							docked: 'bottom'
						}
					],
					listeners: {
						hide: function () {
							if (me.linkCardToOverlay) {
								me.linkCardToOverlay.destroy();
								me.linkCardToOverlay = null;
							}
						},
						show: function () {
							valueStreamAllCardsStore.clearFilter();
							valueStreamAllCardsStore.sort('Name', 'ASC');
							me.linkCardToOverlay.setMasked({
								xtype: 'loadmask',
								message: 'Loading...'
							});
							glueforce.getKanbanCards(Ext.getCmp('projectBoardLinkHiddenField').getValue(), function (onSuccess) {
								_LOG && console.log('getKanbanCards ', onSuccess);
								valueStreamAllCardsStore.removeAll();
								if (onSuccess) {
									valueStreamAllCardsStore.add(onSuccess);
								}
								me.linkCardToOverlay && me.linkCardToOverlay.setMasked(false);
							});
						}
					}
				});
			me.linkCardToOverlay.show();
		} else {
			me.mainControllerObj.alertMsgBox('Please select project board first!.');
		}
	},

	/**
	 * called to show / hide delete icon from category list
	 * hence to show globe instead of delete icon for global categories to not allow user to delete them
	 * @param {Identifire}					derivedFrom
	 */
	isDeleteIconDisabled: function (derivedFrom, derivedFromObj) {
		_LOG && console.log('isDeleteIconDisabled');

		var globalIcon = null;
		if (typeof derivedFromObj === "object" && derivedFromObj.hasOwnProperty('Lean__ProjectRoom__c')) {
			if (derivedFromObj.Lean__ProjectRoom__c === glueforce.getWorkspaceConfig().projectRoomID) {
				globalIcon = true;
			} else {
				globalIcon = false;
			}
		}
		if ((derivedFrom && globalIcon == null) || globalIcon) {
			// global icon
			return '<img style="margin-top:-14px; margin-left: 8px;height:15px;width:15px;float: right;" src="data:image/png;base64,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"/>';
		}

		//delete icon
		return '<img title="Delete Category" style="margin-top:-14px; margin-left: 8px;height:15px;width:15px;float: right;" src="data:image/jpg;base64,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"/>';

	},

	/**
	 * to allow user to tap only numbers in estimation field
	 * @param {Ext.Button}				btn
	 * @param {Ext.event.Touch}			e
	 * @param {Object}					eOpts
	 */
	onEstimationNumberFieldKeyUp: function (fld, e, eOpts) {
		_LOG && console.log('onEstimationNumberFieldKeyUp');
		var val = fld.getValue(),
		charCode = (e.event.which) ? e.event.which : e.event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			fld.setValue(val);
			return false;
		}
		fld.setValue(val);

	},

	/**
	 * called when tapped on Assign an Account field on New Post pop up
	 * @param {Ext.Button}					btn
	 */
	assignAccountBtnTap: function (btn) {
		_LOG && console.log('assignAccountBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		accountStore = Ext.getStore('Accounts');
		me.accountStoreData = [];
		me.offsetSize_account = 0;
		me.assignAccountOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 350,
				floatingCls: 'overlayFloatingClsNew',
				height: 350,
				layout: 'vbox',
				centered: true,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						minHeight: 30,
						margin: 10,
						ui: 'topToolBar',
						items: [{
								html: (btn.getItemId() === 'assignAccountBtn' ? 'Assign Account' : 'Select Account'),
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.assignAccountOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Name...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								id: 'accountsSearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchAccountBtnTap(me);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									me.searchAccountBtnTap(me);
								}
							}
						]
					}, {
						xtype: 'list',
						itemTpl: '<tpl>{[Ext.htmlEncode(values.Name)]}</tpl>',
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						flex: 1,
						margin: '-14px 10px 0px 10px',
						store: 'Accounts',
						listeners: {
							itemtap: function (list, index, view, record) {
								// btn.setText(record.data.Name);
								btn.setConfig({
									text: Ext.htmlEncode(record.data.Name),
									valueId: record.data.Id
								});
								if (btn.getItemId() === 'assignAccountBtn') {
									me.getAssignAccountHiddenField().setValue(record.data.Id);
								}
								/**We will disable checkbox when we filtering oportunities/cases/contacts through "Other" account
								 * because in that case we can not filter through any account ragardin "My Record Only"  checkbox
								 **/
								var pnlCmp = btn.up('panel');
								if (pnlCmp && pnlCmp.down('#myRecordsOnly')) {
									var checkFld = pnlCmp.down('#myRecordsOnly');
									if (record.data.Name == "Other") {
										checkFld.setStyle('opacity:.5');
										checkFld.setDisabled(true);
									} else {
										checkFld.setStyle('opacity:1');
										checkFld.setDisabled(false);
									}

								}

								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignAccountBottomToolbar',
						height: 35,
						docked: 'bottom',
						minHeight: 30,
						ui: 'greyToolbar',
						items: [{
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'previousBtnDisabledCls',
								itemId: 'accountPrevBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_account > 0) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_account -= 10;
										me.assignAccountOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_account) {
											me.searchString_account = "";
										}
										meMain.getAllAccounts(me.offsetSize_account, me.searchString_account);
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'nextBtnDisabledCls',
								itemId: 'accountNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_account < me.count_account) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_account += 10;
										me.assignAccountOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_account) {
											me.searchString_account = "";
										}
										meMain.getAllAccounts(me.offsetSize_account, me.searchString_account);
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (!me.accountStoreData.length) {
							Ext.Array.forEach(accountStore.data.items, function (accountRec) {
								me.accountStoreData.push(accountRec.data);
							});
						}
						accountStore.removeAll();
						if (me.assignAccountOverlay) {
							if (me.accountStoreData.length) {
								accountStore.add(me.accountStoreData);
							}
							me.assignAccountOverlay.destroy();
							me.assignAccountOverlay = null;
						}
					},
					show: function () {
						accountStore.removeAll();
						if (btn.getItemId() !== 'assignAccountBtn') {
							accountStore.insert(0, {
								Name: 'All Accounts',
								Id: 'All_Accounts'
							});
							accountStore.insert(1, {
								Name: 'Other',
								Id: 'Other'
							});
						} else {
							me.MyRecord = false;
						}
					}
				}
			});
		if (me.assignAccountOverlay.isHidden()) {
			me.assignAccountOverlay.show();
		} else {
			me.assignAccountOverlay.hide();
		}
	},

	/**
	 * called when search button tapped on Assign an Account pop up
	 * @param {Ext.controller.KanbanCardController}				me
	 */
	searchAccountBtnTap: function (me) {
		_LOG && console.log('searchAccountBtnTap');
		var searchString = Ext.getCmp('accountsSearchField').getValue();
		if (!searchString) {
			searchString = "";
		}
		me.searchString_account = searchString;
		me.offsetSize_account = 0;
		me.assignAccountOverlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		// mehotd caought in MainController.js
		me.mainControllerObj.getAllAccounts(me.offsetSize_account, me.searchString_account);
	},

	/**
	 * called when tapped on Assign a Contact field on New Post pop up
	 * @param {Ext.Button}			 btn
	 */
	assignContactBtnTap: function (btn) {
		_LOG && console.log('assignContactBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		contactStore = Ext.getStore('Contacts');
		me.contactStoreData = [];
		me.assignContactOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				width: 550,
				floatingCls: 'overlayFloatingClsNew',
				height: 430,
				layout: 'vbox',
				centered: true,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Assign Contact',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtn',
								handler: function () {
									me.assignContactOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'checkboxfield',
								label: 'My Records Only',
								itemId: 'myRecordsOnly',
								labelWidth: '85%',
								checked: true,
								flex: 1,
								cls: 'preferencesCheckboxcls',
								labelCls: 'preferencesCheckboxLabel',
								listeners: {
									change: function (field, newValue, oldValue, eOpts) {
										me.MyRecord = newValue;
									}
								}
							}, {
								xtype: 'fieldset',
								layout: 'hbox',
								height: 37,
								flex: 1,
								cls: 'fieldSetCls',
								items: [{
										xtype: 'button',
										ui: 'topBarBtn',
										labelCls: 'btn_lbl_cls',
										itemId: 'accountPickList',
										text: 'All Accounts',
										valueId: 'All_Accounts',
										cls: 'prority_lbl_white',
										width: '100%',
										padding: 0,
										handler: function (dis) {
											me.assignAccountBtnTap(dis);
										}
									}
								]
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Contact Name, Account Name...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								itemId: 'contactsSearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchContactBtnTap(me);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									me.searchContactBtnTap(me);
								}
							}
						]
					}, {
						margin: '-13px 10px 0px 10px',
						html: '<table width="100%" style="font-size: 13px;margin: 10px auto;">' + '<th width="50%" style="    padding-left: 15px;">Contact Name</th>' + '<th width="50%">Account Name</th>' + '</table>',
						height: 35,
						style: {
							'background': '#F2F2F2'
						}
					}, {
						xtype: 'list',
						// itemTpl : '{Name}',
						itemTpl: new Ext.XTemplate('<tpl><table width="100%" style="font-size: 12px;">' + '<tr>' + '<td width="50%" style="white-space:normal;">{Name:htmlEncode}</td>' + '<td width="50%">{AccountName:htmlEncode}</td></tr>' +
							'</table></tpl>'),
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						flex: 1,
						margin: '0px 10px 0px 10px',
						store: 'Contacts',
						listeners: {
							itemtap: function (list, index, view, record) {
								me.getAssignContactBtn().setText(Ext.htmlEncode(record.data.Name));
								me.getAssignContactHiddenField().setValue(record.data.Id);
								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignContactBottomToolbar',
						height: 35,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom',
						items: [{
								xtype: 'button',
								width: 35,
								cls: 'previousBtnDisabledCls',
								itemId: 'contactPrevBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_contact > 0) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_contact -= 10;
										me.assignContactOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_contact) {
											me.searchString_contact = "";
										}
										// var accountId = me.assignContactOverlay.down('#accountPickList').getValue();
										var accountId = me.assignContactOverlay.down('#accountPickList').config.valueId || 'All_Accounts';

										if (accountId === 'Other') {
											accountId = null; // to pick record which are not linked with account
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllContacts(me.offsetSize_contact, me.searchString_contact, accountId, me.assignContactOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								cls: 'nextBtnDisabledCls',
								itemId: 'contactNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_contact < me.count_contact) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_contact += 10;
										me.assignContactOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_contact) {
											me.searchString_contact = "";
										}
										// var accountId = me.assignContactOverlay.down('#accountPickList').getValue();
										var accountId = me.assignContactOverlay.down('#accountPickList').config.valueId || 'Other';

										if (accountId === 'Other') {
											accountId = null; // to pick record which are not linked with account
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllContacts(me.offsetSize_contact, me.searchString_contact, accountId, me.assignContactOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (!me.contactStoreData.length) {
							Ext.Array.forEach(contactStore.data.items, function (ContactRec) {
								me.contactStoreData.push(ContactRec.data);
							});
						}
						contactStore.removeAll();
						if (me.assignContactOverlay) {
							if (me.contactStoreData.length) {
								contactStore.add(me.contactStoreData);
							}
							me.assignContactOverlay.destroy();
							me.assignContactOverlay = null;
						}
					},
					show: function () {
						contactStore.removeAll();
					}
				}
			});
		if (me.assignContactOverlay.isHidden()) {
			me.assignContactOverlay.show();
			me.MyRecord = true;
		} else {
			me.assignContactOverlay.hide();
		}
	},
	/**
	 * called when search button tapped on Assign a Contact pop up
	 * @param {Ext.controller.KanbanCardController}				me
	 */
	searchContactBtnTap: function (me) {
		_LOG && console.log('searchContactBtnTap');
		var searchString = me.assignContactOverlay.down('#contactsSearchField').getValue(),
		accountId = me.assignContactOverlay.down('#accountPickList').config.valueId || 'All_Accounts';
		if (!searchString) {
			searchString = "";
		}

		if (accountId === 'Other') {
			accountId = null; // to pick record which are not linked with account
		}
		if (accountId === 'All_Accounts') {
			accountId = 'All'; // to pick record which are linked with any account
		}
		me.searchString_contact = searchString;
		me.offsetSize_contact = 0;
		me.assignContactOverlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		me.mainControllerObj.getAllContacts(me.offsetSize_contact, me.searchString_contact, accountId, me.assignContactOverlay.down('#myRecordsOnly').getChecked());
	},
	/**
	 * called when tapped on Assign an Opportunity field on New Post pop up
	 * @param {Ext.Button}					btn
	 */
	assignOpportunityBtnTap: function (btn) {
		_LOG && console.log('assignOpportunityBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		OpportunityStore = Ext.getStore('Opportunity');
		me.OpportunityStoreData = [];
		me.assignOpportunityOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				centered: true,
				hideOnMaskTap: false,
				hidden: true,
				width: 550,
				floatingCls: 'overlayFloatingClsNew',
				height: 430,
				layout: 'vbox',
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Assign Opportunity',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.assignOpportunityOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'checkboxfield',
								label: 'My Records Only',
								itemId: 'myRecordsOnly',
								checked: true,
								labelWidth: '85%',
								flex: 1,
								cls: 'preferencesCheckboxcls',
								labelCls: 'preferencesCheckboxLabel',
								listeners: {
									change: function (field, newValue, oldValue, eOpts) {
										me.MyRecord = newValue;
									}
								}
							}, {
								xtype: 'fieldset',
								layout: 'hbox',
								height: 37,
								flex: 1,
								cls: 'fieldSetCls',
								items: [{
										xtype: 'button',
										ui: 'topBarBtn',
										labelCls: 'btn_lbl_cls',
										itemId: 'accountPickList',
										text: 'All Accounts',
										valueId: 'All_Accounts',
										cls: 'prority_lbl_white',
										width: '100%',
										padding: 0,
										handler: function (dis) {
											me.assignAccountBtnTap(dis);
										}
									}
								]
							}
						]

					}, {
						xtype: 'panel',
						margin: '10px 10px 0px 10px',
						layout: 'hbox',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Opportunity Name, Account Name...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								itemId: 'OpportunitySearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchOpportunityBtnTap(me, this.getValue(), me.assignOpportunityOverlay);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									me.searchOpportunityBtnTap(me, me.assignOpportunityOverlay.down('#OpportunitySearchField').getValue(), me.assignOpportunityOverlay);
								}
							}
						]
					}, {
						margin: '-13px 10px 0px 10px',
						html: '<table width="100%" style="font-size: 13px;margin: 10px;">' + '<th width="35%">Opportunity Name</th>' + '<th width="35%">Account Name</th>' + '<th width="30%">Stage</th>' + '</table>',
						height: 35,
						style: {
							'background': '#F2F2F2'
						}
					}, {
						margin: '0px 10px 0px 10px',
						xtype: 'list',
						itemTpl: new Ext.XTemplate('<tpl><table width="100%" cellpadding="5" style="font-size: 12px;">' + '<tr>' + '<td style="padding: 5px;" width="35%">{Name:htmlEncode}</td>' + '<td style="padding: 5px;" width="35%">{AccountName:htmlEncode}</td>' + '<td style="padding: 5px;" width="28%">{StageName:htmlEncode}</td>' + '</tr>' + '</table></tpl>'),
						itemCls: 'assignUserItemCls',
						cls: 'opportunityCls',
						itemId: 'OpportunityDetailList',
						flex: 1,
						store: OpportunityStore,
						listeners: {
							itemtap: function (list, index, view, record) {
								var subj = '',
								subjText = (record.data.Name ? record.data.Name : 'Opportunity: ' + record.data.Id);
								if (subjText.length > 65) {
									subj = subjText.substring(0, 65) + '...';
								} else {
									subj = subjText;
								}
								me.getAssignOpportunityBtn().setText(Ext.htmlEncode(subj));
								me.getAssignOppHiddenField().setValue(record.data.Id);
								me.getAssignOppStageHiddenField().setValue(record.data.StageName);
								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignOpportunityBottomToolbar',
						ui: 'greyToolbar',
						minHeight: 30,
						height: 35,
						items: [{
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'previousBtnDisabledCls',
								itemId: 'OpportunityPrevBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_Opportunity > 0) {
										// 5 is the number count of list items / Opportunity to show at a time on single page
										me.offsetSize_Opportunity -= 10;
										me.assignOpportunityOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_Opportunity) {
											me.searchString_Opportunity = "";
										}
										var accountId = me.assignOpportunityOverlay.down('#accountPickList').config.valueId || 'All_Accounts';

										if (accountId === 'Other') {
											accountId = null; // to pick record which are not linked with account
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllOpportunity(me, me.offsetSize_Opportunity, me.searchString_Opportunity, me.assignOpportunityOverlay, accountId, me.assignOpportunityOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'nextBtnDisabledCls',
								itemId: 'OpportunityNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_Opportunity < me.count_Opportunity) {
										// 5 is the number count of list items / Opportunity to show at a time on single page
										me.offsetSize_Opportunity += 10;
										me.assignOpportunityOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_Opportunity) {
											me.searchString_Opportunity = "";
										}
										var accountId = me.assignOpportunityOverlay.down('#accountPickList').config.valueId || 'All_Accounts';

										if (accountId === 'Other') {
											accountId = null; // to pick record which are not linked with account
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllOpportunity(me, me.offsetSize_Opportunity, me.searchString_Opportunity, me.assignOpportunityOverlay, accountId, me.assignOpportunityOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (!me.OpportunityStoreData.length) {
							Ext.Array.forEach(OpportunityStore.data.items, function (OpportunityRec) {
								me.OpportunityStoreData.push(OpportunityRec.data);
							});
						}
						OpportunityStore.removeAll();
						if (me.assignOpportunityOverlay) {
							if (me.OpportunityStoreData.length) {
								OpportunityStore.add(me.OpportunityStoreData);
							}
							me.assignOpportunityOverlay.destroy();
							me.assignOpportunityOverlay = null;
						}
					},
					show: function () {
						OpportunityStore.removeAll();
					}
				}
			});
		me.MyRecord = true; // a flag to manage get account according to login user
		me.assignOpportunityOverlay.show();
	},
	/**
	 * search Opportunity by string
	 * @param {Ext,controller.KanbanCardController}					me
	 * @param {value}												searchString
	 * @param {Ext.Overlay}											overlay
	 */
	searchOpportunityBtnTap: function (me, searchString, overlay) {
		_LOG && console.log('searchOpportunityBtnTap');
		if (!searchString) {
			searchString = "";
		}
		var accountId = overlay.down('#accountPickList').config.valueId || 'All_Accounts';

		if (accountId === 'Other') {
			accountId = null; // to pick record which are not linked with account
		}
		if (accountId === 'All_Accounts') {
			accountId = 'All'; // to pick record which are linked with any account
		}
		me.searchString_Opportunity = searchString;
		me.offsetSize_Opportunity = 0;
		overlay && overlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		me.mainControllerObj.getAllOpportunity(me, me.offsetSize_Opportunity, me.searchString_Opportunity, overlay, accountId, overlay.down('#myRecordsOnly').getChecked());
	},

	/**
	 * called when tapped on Assign a Case field on New Post pop up
	 * @param {Ext.Button}					btn
	 */
	assignCaseBtnTap: function (btn) {
		_LOG && console.log('assignCaseBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		caseStore = Ext.getStore('Cases');
		me.caseStoreData = [];
		me.assignCaseOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				centered: true,
				hideOnMaskTap: false,
				hidden: true,
				width: 550,
				floatingCls: 'overlayFloatingClsNew',
				height: 430,
				layout: 'vbox',
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Assign Case',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.assignCaseOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'checkboxfield',
								label: 'My Records Only',
								itemId: 'myRecordsOnly',
								labelWidth: '85%',
								checked: true,
								flex: 1,
								cls: 'preferencesCheckboxcls',
								labelCls: 'preferencesCheckboxLabel',
								listeners: {
									change: function (field, newValue, oldValue, eOpts) {
										me.MyRecord = newValue;
									}
								}
							}, {
								xtype: 'fieldset',
								layout: 'hbox',
								height: 37,
								flex: 1,
								cls: 'fieldSetCls',
								items: [{
										xtype: 'button',
										ui: 'topBarBtn',
										labelCls: 'btn_lbl_cls',
										itemId: 'accountPickList',
										text: 'All Accounts',
										valueId: 'All_Accounts',
										cls: 'prority_lbl_white',
										width: '100%',
										padding: 0,
										handler: function (dis) {
											me.assignAccountBtnTap(dis);
										}
									}
								]
							}
						]

					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '10px 10px 0px 10px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Case Number, Account Name, Contact Name, Subject...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								itemId: 'caseSearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchCaseBtnTap(me, this.getValue(), me.assignCaseOverlay);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									me.searchCaseBtnTap(me, me.assignCaseOverlay.down('#caseSearchField').getValue(), me.assignCaseOverlay);
								}
							}
						]
					}, {
						margin: '-13px 10px 0px 10px',
						html: '<table width="100%" style="font-size: 13px;margin: 10px;">' + '<th width="15%" style="text-align:center;">Case Number</th>' + '<th width="25%" style="text-align:center;">Account Name</th>' + '<th width="25%" style="text-align:center;">Contact Name</th>' + '<th width="35%" style="text-align:center;">Subject of Case</th>' + '</table>',
						height: 35,
						style: {
							'background': '#F2F2F2'
						}
					}, {
						xtype: 'list',
						margin: '0px 10px 0px 10px',
						itemTpl: new Ext.XTemplate('<tpl><table width="100%" style="font-size: 12px;">' + '<tr>' + '<td width="20%" style="white-space:normal;padding-left: 8px;">{CaseNumber:htmlEncode}</td>' + '<td width="25%" style="padding-right: 10px;">{AccountName:htmlEncode}</td>' + '<td width="25%" style="padding: 0 10px 0 10px;">{ContactName:htmlEncode}</td>' + '<td width="35%" style="white-space:normal;padding-left: 12px;">{Subject:htmlEncode}</td>' + '</tr>' + '</table></tpl>'),
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						itemId: 'caseDetailList',
						flex: 1,
						store: 'Cases',
						listeners: {
							itemtap: function (list, index, view, record) {
								var subj = '',
								subjText = (record.data.Subject ? record.data.Subject : 'Case: ' + record.data.CaseNumber);
								if (subjText.length > 65) {
									subj = subjText.substring(0, 65) + '...';
								} else {
									subj = subjText;
								}
								me.getAssignCaseBtn().setText(Ext.htmlEncode(subj));
								me.getAssignCaseHiddenField().setValue(record.data.Id);
								me.getAssignCaseStatusHiddenField().setValue(record.data.Status);
								me.getAssignCasePriorityHiddenField().setValue(record.data.Priority);
								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignCaseBottomToolbar',
						ui: 'greyToolbar',
						minHeight: 30,
						height: 35,
						items: [{
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'previousBtnDisabledCls',
								itemId: 'casePrevBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_case > 0) {
										// 5 is the number count of list items / cases to show at a time on single page
										me.offsetSize_case -= 10;
										me.assignCaseOverlay && me.assignCaseOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_case) {
											me.searchString_case = "";
										}
										var accountId = me.assignCaseOverlay.down('#accountPickList').config.valueId || 'All_Accounts';
										if (accountId === 'Other') {
											accountId = null;
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllCases(me, me.offsetSize_case, me.searchString_case, me.assignCaseOverlay, accountId, me.assignCaseOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'nextBtnDisabledCls',
								itemId: 'caseNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_case < me.count_case) {
										// 5 is the number count of list items / cases to show at a time on single page
										me.offsetSize_case += 10;
										me.assignCaseOverlay && me.assignCaseOverlay.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_case) {
											me.searchString_case = "";
										}
										var accountId = me.assignCaseOverlay.down('#accountPickList').config.valueId || 'All_Accounts';
										if (accountId === 'Other') {
											accountId = null;
										}
										if (accountId === 'All_Accounts') {
											accountId = 'All'; // to pick record which are linked with any account
										}
										meMain.getAllCases(me, me.offsetSize_case, me.searchString_case, me.assignCaseOverlay, accountId, me.assignCaseOverlay.down('#myRecordsOnly').getChecked());
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (!me.caseStoreData.length) {
							Ext.Array.forEach(caseStore.data.items, function (caseRec) {
								me.caseStoreData.push(caseRec.data);
							});
						}
						caseStore.removeAll();
						if (me.assignCaseOverlay) {
							if (me.caseStoreData.length) {
								caseStore.add(me.caseStoreData);
							}
							me.assignCaseOverlay.destroy();
							me.assignCaseOverlay = null;
						}
					},
					show: function () {
						caseStore.removeAll();
					}
				}
			});

		me.assignCaseOverlay.show();
		me.MyRecord = true;
	},
	/**
	 * search Case by string
	 * @param {Ext,controller.KanbanCardController}				me
	 * @param {value}											searchString
	 * @param {Ext.Overlay}										overlay
	 */
	searchCaseBtnTap: function (me, searchString, overlay) {
		_LOG && console.log('searchCaseBtnTap');
		var accountId = overlay.down('#accountPickList').config.valueId || 'All_Accounts';
		if (!searchString) {
			searchString = "";
		}
		me.searchString_case = searchString;
		me.offsetSize_case = 0;
		overlay && overlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		if (accountId === 'Other') {
			accountId = null; // to pick record which are not linked with account
		}
		if (accountId === 'All_Accounts') {
			accountId = 'All'; // to pick record which are linked with any account
		}
		// get all Cases trough pagging
		me.mainControllerObj.getAllCases(me, me.offsetSize_case, me.searchString_case, overlay, accountId, overlay.down('#myRecordsOnly').getChecked());
	},
	/**
	 * link icon tap to open force.com page
	 */
	linkAccountBtnTap: function () {
		_LOG && console.log('linkAccountBtnTap');
		var meMain = this.mainControllerObj,
		accountUrl = meMain.glueConfigData.BaseURL,
		accountId = this.getAssignAccountHiddenField().getValue();
		if (accountId) {
			accountUrl += Ext.htmlEncode(accountId);
			window.open(Ext.htmlEncode(this.sanitizURL(accountUrl)), '_blank');
		} else {
			meMain.alertMsgBox('Select Account first.');
		}
	},
	/**
	 * link icon tap to open force.com page for specific apportunity
	 */
	linkOpportunityBtnTap: function () {
		_LOG && console.log('linkOpportunityBtnTap');
		var meMain = this.mainControllerObj,
		oppUrl = meMain.glueConfigData.BaseURL,
		oppId = this.getAssignOppHiddenField().getValue();
		if (oppId) {
			oppUrl += Ext.htmlEncode(oppId);
			window.open(Ext.htmlEncode(this.sanitizURL(oppUrl)), '_blank');
		} else {
			meMain.alertMsgBox('Select Opportunity first.');
		}
	},
	/**
	 * link icon tap to open force.com page for specific Contact page
	 */
	linkContactBtnTap: function () {
		_LOG && console.log('linkContactBtnTap');
		var meMain = this.mainControllerObj,
		contactUrl = meMain.glueConfigData.BaseURL,
		contactId = this.getAssignContactHiddenField().getValue();
		if (contactId) {
			contactUrl += Ext.htmlEncode(contactId);
			window.open(Ext.htmlEncode(this.sanitizURL(contactUrl)), '_blank');
		} else {
			meMain.alertMsgBox('Select Contact first.');
		}
	},
	/**
	 * link icon tap to open force.com page for specific case page we can also update and delete case from force.com end
	 */
	linkCaseBtnTap: function () { // later Sprint
		_LOG && console.log('linkCaseBtnTap');
		var meMain = this.mainControllerObj,
		caseUrl = meMain.glueConfigData.BaseURL,
		caseId = this.getAssignCaseHiddenField().getValue();
		if (caseId) {
			caseUrl += Ext.htmlEncode(caseId);
			window.open(Ext.htmlEncode(this.sanitizURL(caseUrl)), '_blank');
		} else {
			meMain.alertMsgBox('Select Case first.');
		}
	},
	/**
	 * link icon tap to open force.com page for specific case page we can also update and delete case from force.com end
	 */
	linkProjectBoardTap: function () { // later Sprint
		_LOG && console.log('linkProjectBoardTap');
		var meMain = this.mainControllerObj,
		me = this,
		kanbanUrl;
		if (Ext.getCmp('projectBoardLinkHiddenField').getValue()) {
			// generate URL of card to send the chatter feed message, but without appending forceid, it will be concatenated at force.com end.
			kanbanUrl = meMain.glueConfigData.BaseURL;
			switch (Ext.getCmp('projectValueStreamLinkBoardType').getValue()) {
			case "Kanban Board":
			case "Plan Board":
				kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
				break;
			case "Whiteboard":
				kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
				break;
			case "Portfolio View":
				kanbanUrl += meMain.glueConfigData.PortfolioViewURL.replace('/', '') + '?Id=';
				break;
			case "UberBoard":
				//change
				var storeAllValueStreams = Ext.getStore('AllValueStreams'),
				recordData,
				mainId;
				if (record.ValueStreamLinkID) {
					recordData = storeAllValueStreams.findRecord('Id', record.ValueStreamLinkID);
					if (recordData) {
						mainId = recordData.data.Lean__ProjectRoom__c;
						kanbanUrl += meMain.glueConfigData.pageGanttView.replace('/', '') + '?fid=' + Ext.htmlEncode(mainId) + '&btype=projectgantt&Id=';
						kanbanUrl += Ext.htmlEncode(Ext.getCmp('projectBoardLinkHiddenField').getValue());
						window.open(me.sanitizURL(kanbanUrl), '_blank');
					} else {
						/**get all value streams record*/
						glueforce.getValueStreamsOnLoad(function (onSuccess) {
							_LOG && console.log('getValueStreamsOnLoad ', onSuccess);
							var v;
							storeAllValueStreams.removeAll();
							if (onSuccess.length) {
								// adding blank item in store first as None
								storeAllValueStreams.add({
									'Id': '',
									'Lean__ProjectRoom__c': '',
									'Name': 'None',
									'Lean__ProjectRoom__r_Id': '',
									'Lean__ProjectRoom__r_Name': '',
									'Lean__BoardType__c': ''
								});
								for (v = 0; v < onSuccess.length; v++) {
									if (onSuccess[v].Lean__ProjectRoom__r) {
										storeAllValueStreams.add(onSuccess[v]);
									}
								}
								recordData = storeAllValueStreams.findRecord('Id', record.ValueStreamLinkID);
								mainId = recordData.data.Lean__ProjectRoom__c;
								kanbanUrl += meMain.glueConfigData.pageGanttView.replace('/', '') + '?fid=' + Ext.htmlEncode(mainId) + '&btype=projectgantt&Id=';
								kanbanUrl += Ext.htmlEncode(Ext.getCmp('projectBoardLinkHiddenField').getValue());
								window.open(me.sanitizURL(kanbanUrl), '_blank');
							}
						});
					}
				}
				break;
			default:
				kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
				break;
			}
			if ((Ext.getCmp('projectValueStreamLinkBoardType').getValue()) !== "UberBoard") {
				kanbanUrl += Ext.htmlEncode(Ext.getCmp('projectBoardLinkHiddenField').getValue());
				window.open(this.sanitizURL(kanbanUrl), '_blank');
			}
		} else {
			meMain.alertMsgBox('Select Project Board first!');
		}
	},
	/**
	 * link icon tap to open force.com page for specific card page we can also update and delete card from force.com end
	 */
	linkCardTap: function () { // later Sprint
		_LOG && console.log('linkCardTap');
		var meMain = this.mainControllerObj,
		kanbanUrl;
		if (Ext.getCmp('projectBoardLinkHiddenField').getValue() && Ext.getCmp('projectBoardCardLinkHiddenField').getValue()) {
			// generate URL of card to send the chatter feed message, but without appending forceid, it will be concatenated at force.com end.
			kanbanUrl = meMain.glueConfigData.BaseURL;
			switch (Ext.getCmp('projectValueStreamLinkBoardType').getValue()) {
			case "Plan Board":
			case "Kanban Board":
				kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
				break;
			case "Whiteboard":
				kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
				break;
			case "Portfolio View":
				kanbanUrl += meMain.glueConfigData.PortfolioViewURL.replace('/', '') + '?Id=';
				break;
			case "UberBoard":
				var store = Ext.getStore('AllValueStreams'),
				recordData,
				mainId;
				recordData = store.findRecord('Id', Ext.getCmp('projectBoardLinkHiddenField').getValue());
				if (recordData) {
					mainId = recordData.data.Lean__ProjectRoom__c;
				}
				kanbanUrl += meMain.glueConfigData.pageGanttView.replace('/', '') + '?fid=' + Ext.htmlEncode(mainId) + '&btype=projectgantt&Id=';
				break;
			default:
				kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
				break;
			}
			kanbanUrl += Ext.htmlEncode(Ext.getCmp('projectBoardLinkHiddenField').getValue()) + '&cardid=' + Ext.htmlEncode(Ext.getCmp('projectBoardCardLinkHiddenField').getValue());
			window.open(this.sanitizURL(kanbanUrl), '_blank');
		} else {
			meMain.alertMsgBox('Select Card first!');
		}
	},
	/**
	 * link icon tap to open force.com page for specific Url onthe card
	 */
	linkUrlTap: function () { // later Sprint
		_LOG && console.log('linkUrlTap');
		var meMain = this.mainControllerObj,
		me = this;
		if (me.newPostOverlay.down('#urlLinkmarker') && me.newPostOverlay.down('#urlLinkmarker').getValue()) {
			window.open(me.sanitizURL(me.newPostOverlay.down('#urlLinkmarker').getValue()), '_blank');
		} else {
			meMain.alertMsgBox('Enter URL first!');
		}
	},
	/**
	 * Copy url for the specific kanban card we can paste any where
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	newPostCopyUrlBtnTap: function (btn, e, opt) {
		_LOG && console.log('newPostCopyUrlBtnTap');
		var me = this,
		meBtn = btn,
		textContent,
		cont = me.mainControllerObj,
		kanbanurl = cont.glueConfigData.BaseURL;

		kanbanurl += cont.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
		kanbanurl += Ext.htmlEncode(cont.glueConfigData.valueStreamID);
		textContent = kanbanurl + '&cardid=' + Ext.htmlEncode(me.getNewPostForceId().getValue());
		// for ios devices to show pop up and use standard copy of device
		if (navigator.platform === 'iPad' || ('ontouchstart' in window) || window.navigator.userAgent.indexOf("Edge") > -1) {
			me.urlCopyOverlay = "";
			me.urlCopyOverlay = Ext.Viewport.add({
					xtype: 'panel',
					left: 0,
					margin: '-3px 0 0 200px',
					style: {
						'border-radius': '0px',
						'-webkit-user-select': 'text'
					},
					modal: true,
					hideOnMaskTap: true,
					hidden: true,
					width: 710,
					height: 30,
					items: [{
							html: '<div style="-webkit-user-select: text;height: 30px;width: 710px;font-size: 12px;padding: 7px 10px 7px 10px;">' + me.sanitizURL(textContent) + '</div>'
						}
					],
					listeners: {
						hide: function () {
							if (me.urlCopyOverlay) {
								me.urlCopyOverlay.destroy();
								me.urlCopyOverlay = null;
							}
						}
					}
				});
			if (me.urlCopyOverlay.isHidden()) {
				me.urlCopyOverlay.showBy(meBtn);
			} else {
				me.urlCopyOverlay.hide();
			}
		} else
			if (browser && window.clipboardData && clipboardData.setData) {
				_LOG && console.log('clipboardData');
				me.afterCopyUrl(btn);
				clipboardData.clearData("text");
				clipboardData.setData("text", textContent);
			}
	},
	/**
	 * Remove Card from board
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					cmpEvent
	 * @param {Object}						kanbancardForceID
	 */
	newPostDeleteBtnTap: function (dis, cmpEvent, kanbancardForceID) {
		_LOG && console.log('newPostDeleteBtnTap');
		var me = this,
		kanbanId = (cmpEvent == true ? kanbancardForceID : me.getNewPostForceId().getValue());
		Ext.Msg.show({
			message: '<div class="popUpCls">Are you sure you want to delete this kanban card ?</div>',
			buttons: [{
					iconMask: true,
					text: 'Yes',
					margin: 4,
					ui: 'actionBtn',
					handler: function () {
						var kanbanRecord = Ext.getStore('KanbanCards').findRecord('ForceID', kanbanId),
						taskListArray = Ext.getStore('TaskListArray');
						if (taskListArray.getData().length || kanbanRecord.data.TaskComments) {
							Ext.Msg.show({
								message: '<div class="popUpCls">Delete all tasks of this kanban ?</div>',
								buttons: [{
										iconMask: true,
										text: 'Yes',
										margin: 4,
										ui: 'actionBtn',
										handler: function () {

											if (taskListArray.getData().length) {
												me.deleteKanbanTask(taskListArray.getData().items, kanbanId)
											} else {
												glueforce.getTasks(kanbanId, function (taskListResult) {
													if (taskListResult.length) {
														me.deleteKanbanTask(taskListResult, kanbanId)
													}
												});

											}

											kanbanRecord.data.TaskComments = 0;
											me.deleteKanbanCardCommand(kanbanRecord);
											this.hide();
											this.hide();
											me.newPostOverlay && me.newPostOverlay.hide();
										}
									}, {
										iconMask: true,
										text: 'No',
										ui: 'normal',
										margin: 4,
										cls: 'cancelBtn',
										handler: function () {
											// if No, then also we have to delete the kanban card not the tasks related, they will be saved
											me.deleteKanbanCardCommand(kanbanRecord);
											this.hide();
											this.hide();
											me.newPostOverlay && me.newPostOverlay.hide();
										}
									}
								]
							});
						} else {
							this.hide();
							this.hide();
							me.newPostOverlay && me.newPostOverlay.hide();
							me.deleteKanbanCardCommand(kanbanRecord);
						}
					}
				}, {
					iconMask: true,
					text: 'No',
					ui: 'normal',
					margin: 4,
					cls: 'cancelBtn',
					handler: function () {
						this.hide();
						this.hide();
					}
				}
			]
		});
	},
	/**
	 * hide Kanban Edit popup
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	newPostCancelBtnTap: function (dis, e, opt) {
		_LOG && console.log('newPostCancelBtnTap');
		var me = this;
		me.newPostOverlay.hide();
		Ext.getStore('TaskListArray').removeAll();
	},
	/**
	 * Activate Ext.view.NewPostSubcriber
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	newPostAddSubscriberBtnTap: function (dis, e, opt) {
		_LOG && console.log('newPostAddSubscriberBtnTap');
		var me = this;
		me.getNewPostSubscriberView().reset();
		me.getNewPostSubscriberView().down('#assignSubscribers').setText('Assign a Subscriber');
		me.getNewPostSubscriberView().down('#assignSubscribers').enable();
	},
	/**
	 * Activate Ext.view.NewPostTask  for edit existing value
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 * @param {Object}						statusObj
	 */
	newPostEditTaskBtnTap: function (dis, e, opt, statusObj) {
		_LOG && console.log('newPostEditTaskBtnTap');
		var me = this,
		stTask = Ext.getStore('TaskListArray'),
		record,
		recValue,
		tempIndex,
		vals,
		recordData,
		storeTaskCount = Ext.getStore('AllTaskListArrayCount'),
		taskCustomCheck = glueforce.getWorkspaceConfig().TaskDueDateCheck,
		UserStore = Ext.getStore('AllUsers');
		if (statusObj && statusObj.hasOwnProperty('dueDateTask')) {
			recValue = statusObj;
		} else {
			if (me.EditTaskRecord) {
				me.EditTaskRecord && me.EditTaskRecord.setMasked({
					xtype: 'loadmask',
					indicator: true,
					message: 'Loading...'
				});
				recValue = me.EditTaskRecord.down('newPostTasks').getValues();
			} else {
				recValue = me.getNewPostTasksView().getValues();
			}
			if (taskCustomCheck == "true" || taskCustomCheck === true) {
				if (me.getValidateTaskDueDate(recValue.dueDateTask)) {
					me.EditTaskRecord && me.EditTaskRecord.setMasked(false);
					return false;
				}
			}
		}
		vals = {
			'Priority': recValue.priorityTask,
			'OwnerId': recValue.assignUserTask ? recValue.assignUserTask : glueforce.getWorkspaceConfig().UserID,
			'Subject': recValue.SubjectTask ? recValue.SubjectTask : 'Other',
			'Status': recValue.StatusTask,
			'ActivityDate': me.getDateTime(recValue.dueDateTask),
			'WhatId': (recValue.WhatId ? recValue.WhatId : me.getNewPostForceId().getValue()),
			'Description': recValue.descriptionTaskTask,
			'Id': recValue.TaskId
		};
		if (statusObj && statusObj.hasOwnProperty('dueDateTask')) {
			vals.ActivityDate = statusObj.dueDateTask;
		}
		if (recValue.assignUserTask) {
			// calling method to use set assign user cache in localstorage
			me.setDataLocalStore(recValue.assignUserTask);
		}
		/**
		 * Update task and sync with force.com
		 * @param {Ext.Formpanel.Values}				vals
		 */
		glueforce.updateTask(vals, function (onSuccess) {
			_LOG && console.log('updateTask ', onSuccess);
			var jsonPackage,
			storeKanban,
			recordKanban,
			userRecord,
			activedate,
			startDate,
			lengthTask,
			oldTaskCount = 0,
			undoneTask = 0,
			tskInd = glueforce.getWorkspaceConfig().TaskIndicator;

			if (me.EditTaskRecord) {
				me.EditTaskRecord && me.EditTaskRecord.setMasked(false);
				me.EditTaskRecord.hide();
			}
			me.newPostOverlay && me.newPostOverlay.setMasked(false);
			if (onSuccess.type == 'exception') {
				me.mainControllerObj.alertMsgBox(onSuccess.message);
				return;
			} else if (onSuccess && onSuccess.ActivityDate) {
				activedate = new Date(vals.ActivityDate);
				startDate = new Date(vals.ActivityDate);
				onSuccess.ActivityDate = new Date(onSuccess.ActivityDate.split('-')[0], onSuccess.ActivityDate.split('-')[1] - 1, onSuccess.ActivityDate.split('-')[2], 00, 00, 00);
				// onSuccess.ActivityDate = new Date(vals.ActivityDate);

			} else {
				me.mainControllerObj.alertMsgBox('The assigned owner no longer exists. Please try a different user.');
				localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify([]));
				return;
			}
			record = stTask.findRecord('Id', onSuccess.Id);
			recordData = storeTaskCount.findRecord('ID', onSuccess.WhatId);

			onSuccess.CreatedDate = record.data.CreatedDate;
			tempIndex = stTask.indexOf(record);

			if (tempIndex != -1) {
				stTask.removeAt(tempIndex);
				stTask.insert(tempIndex, onSuccess);
				storeKanban = Ext.getStore('KanbanCards');
				recordKanban = storeKanban.findRecord('ForceID', onSuccess.WhatId);

				lengthTask = stTask.data.items.length;
				stTask.filter('Status', 'Completed');
				undoneTask = Math.abs(lengthTask - stTask.getData().length);
				// Handle Yask badge text for all task or withaout done task
				stTask.clearFilter();
				if (recordData) {
					recordData.set('TaskCount', lengthTask);
					recordData.set('CountUnDoneTask', undoneTask);
				}
				oldTaskCount = recordKanban.get('TaskComments');
				if (tskInd == 'true' || tskInd === true) {
					recordKanban.set('TaskComments', undoneTask);
				} else {
					recordKanban.set('TaskComments', lengthTask);
				}
				storeKanban.sync();
				// onAdvanceFilterByString call due to filter feature in kanban controller

			}
			if ((oldTaskCount !== recordKanban.get('TaskComments')) && recordKanban) {
				var objectData = {
					'Id': recordKanban.data.Id,
					'GUID': recordKanban.data.GUID,
					'TaskComments': recordKanban.data.TaskComments,
					'ChatterComments': recordKanban.data.ChatterComments,
					'TaskCount': recordData && recordData.data.TaskCount,
					'CountUnDoneTask': recordData && recordData.data.CountUnDoneTask
				};
				/**
				 *Broad cast task comment count
				 * @param {Broadcast verb}							'NewChatterComments'
				 * @param {stringify object data}					JSON.stringify(objectData)
				 */
				glueforce.kanbanStateChange('NewChatterComments', JSON.stringify(objectData));
			}

			stTask.sort([{
						property: 'ActivityDate',
						direction: 'ASC'
					}, {
						property: 'CreatedDate',
						direction: 'ASC'
					}
				]);
			userRecord = UserStore.findRecord('Id', onSuccess.OwnerId);
			jsonPackage = {
				'Name': Ext.htmlDecode(onSuccess.Subject),
				'Priority': onSuccess.Priority,
				'OwnerID': onSuccess.OwnerId,
				'OwnerName': Ext.htmlDecode(onSuccess.OwnerName),
				'Subject': Ext.htmlDecode(onSuccess.Subject),
				'Status': onSuccess.Status,
				'DueDate': activedate,
				'StartDate': startDate,
				'WhatId': onSuccess.WhatId,
				'EstimatedDuration': 1,
				'DurationUnits': 'd',
				'SmallPhotoUrl': userRecord.getData().SmallPhotoUrl,
				'Description': Ext.htmlDecode(onSuccess.Description) || '',
				'Id': onSuccess.Id,
				'ItemType': 'Task',
				'expanded': false,
				'leaf': true,
				'ValueStreamID': onSuccess.ValueStreamID,
				'ValueStreamName': Ext.htmlDecode(onSuccess.ValueStreamName),
				'ProjectRoomName': Ext.htmlDecode(onSuccess.ProjectRoomName),
				'ProjectRoomID': onSuccess.ProjectRoomID,
				'KanbanCardName': Ext.htmlDecode(onSuccess.KanbanCardName)
			};
			for (var count = 0; count < recordKanban.data.TaskUserNames.length; count++) {
				if (recordKanban.data.TaskUserNames[count].ID == record.data.Id) {
					recordKanban.data.TaskUserNames.splice(count, 1);
					break;
				}
			}
			recordKanban.data.TaskUserNames.push({
				ID: record.data.Id,
				TaskUserId: onSuccess.OwnerId,
				TaskUserName: Ext.htmlDecode(onSuccess.OwnerName)
			});

			me.onAdvanceFilterByString();
			glueforce.kanbanStateChange('UpdateTask', JSON.stringify(jsonPackage));
			me.newPostOverlay && me.newPostOverlay.setMasked(false);
		});
	},
	/**
	 * Activate Ext.view.NewPostSubcriber  for edit existing value
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	newPostEditSubscriberTap: function (dis, e, opt) {
		_LOG && console.log('newPostEditSubscriberTap');
		var me = this,
		checkBoxFields = me.EditSubcriber,
		kanbanmove = checkBoxFields.down('#kanbanmove').getChecked(),
		percentdone = checkBoxFields.down('#percentdone').getChecked(),
		cardpastduedate = checkBoxFields.down('#cardpastduedate').getChecked(),
		taskpastduedate = checkBoxFields.down('#taskpastduedate').getChecked(),
		taskComplete = checkBoxFields.down('#taskgetcomplete').getChecked(),
		subscriberListFieldValue = checkBoxFields.down('#subscriberListField').getValue(),
		checkSubcriberIs = false,
		assignSubscribersUserId = checkBoxFields.down('#assignSubscribersId').getValue();
		if (!assignSubscribersUserId) {
			me.mainControllerObj.alertMsgBox('Select Subscriber first.');
			return;
		} else {
			var stTask = Ext.getStore('SubscriberListArray');
			stTask.filter('Lean__SubscriberID__c', assignSubscribersUserId);
			Ext.Array.forEach(stTask.getData().items, function (subcriberData) {
				if (subcriberData.data.Lean__SubscriberID__c == assignSubscribersUserId && subcriberData.data.Id != subscriberListFieldValue) {
					stTask.clearFilter();
					checkSubcriberIs = true;
				}
			});
			stTask.clearFilter();
		}
		if (checkSubcriberIs) {
			me.mainControllerObj.alertMsgBox('Already Subscriber of this card.');
			return false;
		}
		if (me.EditSubcriber) {
			me.EditSubcriber && me.EditSubcriber.setMasked({
				xtype: 'loadmask',
				indicator: true,
				message: 'Loading...'
			});
		}
		var subscriberOptions = {
			'id': subscriberListFieldValue,
			'kanbanid': me.getNewPostForceId().getValue(),
			'subscriberid': assignSubscribersUserId,
			'kanbanmove': kanbanmove,
			'percentdone': percentdone,
			'cardpastduedate': cardpastduedate,
			'taskpastduedate': taskpastduedate,
			'isTaskCompleted': taskComplete,
			'preference': '',
			'flag': 0
		};
		/**
		 * Update/ manage subcriber and sync with force.com
		 * @param {object}				subscriberOptions
		 */
		glueforce.manageSubscriber(subscriberOptions, function (onSuccess) {
			_LOG && console.log('manageSubscriber ', onSuccess);

			var stTask = Ext.getStore('SubscriberListArray'),
			record = stTask.findRecord('Id', onSuccess.Id),
			tempIndex = stTask.indexOf(record),
			allUsersStore,
			userRecord;

			if (tempIndex != -1) {
				stTask.removeAt(tempIndex);
				allUsersStore = Ext.getStore('AllUsers');
				userRecord = allUsersStore.findRecord('Id', onSuccess.Lean__SubscriberID__c);
				if (userRecord) {
					onSuccess.ownerImage = userRecord.data.SmallPhotoUrl;
					onSuccess.ownerName = userRecord.data.Name;
				}
				stTask.insert(tempIndex, onSuccess);
			}
			if (me.EditSubcriber) {
				me.EditSubcriber && me.EditSubcriber.setMasked(false);
				me.EditSubcriber.hide();
			}
		});
	},
	/**
	 * Edit Kanban card value @view Ext.view.NewPost
	 * @param {Ext.Button}						btn
	 * @param {Ext.event}						e
	 * @param {Object}							opt
	 */
	newPostSaveBtnTap: function (dis, e, opt) {
		_LOG && console.log('newPostSaveBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		/*New post form values*/
		vals = me.getNewPostView().getValues(),
		alluserStore = Ext.getStore('AllUsers');
		_LOG && console.log('vals--->', vals);
		if (vals.TemplateID) {
			var categoryStore = Ext.getStore('Category'),
			cardconfig = {},
			catRecStore = categoryStore.findRecord('Id', vals.TemplateID);
			if (catRecStore) {
				cardconfig = catRecStore.data;
			}
			if (cardconfig) {
				//crdcolor should be taken from template and used if > 6 chars ['#xxyyzz' or 'rgb(xxx,yyy,zzz)']
				if (cardconfig.Lean__Color__c && cardconfig.Lean__Color__c.length > 6) {
					vals.Color = cardconfig.Lean__Color__c;
				}
				vals.Height = 100;
				vals.Width = 150;
				if (!vals.Name) {
					vals.Name = cardconfig.Name;
				}
				if (!vals.TemplateID) {
					vals.TemplateID = cardconfig.Id;
				}
				if (!vals.Title) {
					vals.Title = cardconfig.Name;
				}
				if (cardconfig.Lean__JSONDefinition__c && cardconfig.Lean__JSONDefinition__c.length > 0) {
					vals.Extensions = JSON.parse(Ext.String.htmlDecode(cardconfig.Lean__JSONDefinition__c));
					vals.JSONDefinition = cardconfig.Lean__JSONDefinition__c;
				} else {
					vals.Extensions = null;
					vals.JSONDefinition = '{}';
				}
			}
		}
		vals.DueDate = me.getDateTime(vals.DueDate, true);
		vals.StartDate = me.getDateTime(vals.StartDate, true);
		vals.AccountName = Ext.htmlDecode(me.getAssignAccountBtn().getText());
		vals.OpportunityName = Ext.htmlDecode(me.getAssignOpportunityBtn().getText());
		vals.ContactName = Ext.htmlDecode(me.getAssignContactBtn().getText());
		vals.CaseSubject = Ext.htmlDecode(me.getAssignCaseBtn().getText());
		vals.OnBudget = me.newPostOverlay.down('#onBudgetBtn').getHtml();
		vals.OnQuality = me.newPostOverlay.down('#onQualityBtn').getHtml();
		vals.OnTime = me.newPostOverlay.down('#onTimeBtn').getHtml();
		vals.UrlLink = me.newPostOverlay.down('#urlLinkmarker').getValue();
		if (!(vals.OwnerID)) {
			vals.OwnerID = meMain.glueConfigData.UserID;
		} else {
			// calling method to use set assign user cache in localstorage
			me.setDataLocalStore(vals.OwnerID);
		}
		var userrecord = alluserStore.findRecord('Id', vals.OwnerID);
		if (userrecord) {
			vals.SmallPhotoUrl = userrecord.get('SmallPhotoUrl');
		}
		// fetching value from dynamic feilds of json definition and stringigy it all and saving it in jsondata field of cmp
		if (!(Ext.getCmp('jsonDefinitionPanel').isHidden())) {
			var dynField = Ext.getCmp('jsonDefinitionPanel').getComponent('formExtendPanelKanban'),
			params = {},
			fieldName,
			fieldValue;
			if (dynField) {
				Ext.Array.forEach(dynField.getItems().items, function (itm) {
					if (itm) {
						if (itm.getName && itm.getValue) {
							fieldName = itm.getName();
							fieldValue = itm.getValue();
							if (fieldValue) {
								if (itm.getItemId().split('-')[1] == 'datepickerfield') {
									fieldValue = new Date(fieldValue.setDate(fieldValue.getDate() + 1));
								}
								if (itm.getItemId().split('-')[1] == 'checkboxfield') {
									fieldValue = itm.getChecked();
								}
								params[fieldName] = fieldValue;
							}
						}
					}
				});
			}
			vals.JSONData = JSON.stringify(params);
		} else {
			vals.JSONData = '{}';
		}
		/** @bhupendra disable sticker panel due to new structure */
		var stickerID = [],
		i,
		kanbanStore,
		kanbanrecord;
		for (i = 0; i < me.selectedStickerArray.length; i++) {
			stickerID.push(me.selectedStickerArray[i].id);
		}
		kanbanStore = Ext.getStore('KanbanCards');
		kanbanrecord = kanbanStore.findRecord('ForceID', vals.ForceID);
		/** create sticker for new kanban card create
		 *@param {array of sticker Id}				stickerID
		 *@param {kanban card Id}					droppedCardId
		 */
		glueforce.addStickerToKanbanCard(stickerID, vals.ForceID, function (onSuccess) {
			_LOG && console.log('addStickerToKanbanCard ', onSuccess);

		});
		me.newPostOverlay.resourceAllocation[0].Units=vals.Units;
		glueforce.updateResourceAssignment(me.newPostOverlay.resourceAllocation,function(response){
			_LOG && console.log('updateResourceAssignment ', response);
		})
		kanbanrecord.set('AllSticker', me.selectedStickerArray);
		me.arrayTask.length = 0;
		me.updateKanbanCardCommand('', vals, true);
		me.newPostOverlay.hide();
		me.getFilterSearchField() && me.getFilterSearchField().fireEvent('keyup', me.getFilterSearchField());
		Ext.getStore('TaskListArray').removeAll();
	},
	/**
	 * Create new Kanban card value @view Ext.view.NewPost
	 * @param {Ext.Button}				btn
	 * @param {Ext.event}				e
	 * @param {Object}					opt
	 */
	newPostCreateBtnTap: function (dis, e, opt) {
		_LOG && console.log('newPostCreateBtnTap');
		if (dis.getItemId() === "newPostCreateAndNewBtn") {
			Ext.Viewport.setMasked({
				xtype: 'loadmask',
				indicator: true,
				message: 'Saving...'
			});
		}

		var me = this,
		meMain = me.mainControllerObj,
		meZone = me.getApplication().getController('ZoneController'),
		alluserStore = Ext.getStore('AllUsers'),
		vals = me.getNewPostView().getValues(),
		userrecord,
		zoneArea;
		if (!(vals.OwnerID)) {
			vals.OwnerID = meMain.glueConfigData.UserID;
		} else {
			// calling method to use set assign user cache in localstorage
			me.setDataLocalStore(vals.OwnerID);
		}
		userrecord = alluserStore.findRecord('Id', vals.OwnerID);
		if (userrecord) {
			vals.SmallPhotoUrl = userrecord.get('SmallPhotoUrl');
			vals.OwnerName = userrecord.get('Name');
		}
		// fetching value from dynamic feilds of json definition and stringigy it all and saving it in jsondata field of cmp
		if (!(Ext.getCmp('jsonDefinitionPanel').isHidden())) {
			var dynField = Ext.getCmp('jsonDefinitionPanel').getComponent('formExtendPanelKanban'),
			params = {},
			fieldName,
			fieldValue;
			if (dynField) {
				Ext.Array.forEach(dynField.getItems().items, function (itm) {
					if (itm) {
						if (itm.getName && itm.getValue) {
							fieldName = itm.getName();
							fieldValue = itm.getValue();
							if (fieldValue) {
								if (itm.getItemId().split('-')[1] == "datepickerfield") {
									fieldValue = new Date(fieldValue);
								}
								if (itm.getItemId().split('-')[1] == "checkboxfield") {
									fieldValue = itm.getChecked();
								}
								params[fieldName] = fieldValue;
							}
						}
					}
				});
			}
			vals.JSONData = JSON.stringify(params);
		}

		if (vals.TemplateID) {
			var categoryStore = Ext.getStore('Category'),
			cardconfig = {},
			catRecStore = categoryStore.findRecord('Id', vals.TemplateID);
			if (catRecStore) {
				cardconfig = catRecStore.data;
			}
			if (cardconfig) {
				//crdcolor should be taken from template and used if > 6 chars ["#xxyyzz" or "rgb(xxx,yyy,zzz)"]
				if (cardconfig.Lean__Color__c && cardconfig.Lean__Color__c.length > 6) {
					vals.Color = cardconfig.Lean__Color__c;
				}
				vals.Height = 100;
				vals.Width = 150;
				if (!vals.Name) {
					vals.Name = cardconfig.Name;
				}
				if (!vals.TemplateID) {
					vals.TemplateID = cardconfig.Id;
				}
				if (!vals.Title) {
					vals.Title = cardconfig.Name;
				}
				if (cardconfig.Lean__JSONDefinition__c && cardconfig.Lean__JSONDefinition__c.length > 0) {
					vals.Extensions = JSON.parse(Ext.String.htmlDecode(cardconfig.Lean__JSONDefinition__c));
					vals.JSONDefinition = cardconfig.Lean__JSONDefinition__c;
				} else {
					vals.Extensions = null;
					vals.JSONDefinition = "";
				}
			}
		}
		// flip name goes to title and title will be category name
		vals.AccountName = Ext.htmlDecode(me.getAssignAccountBtn().getText());
		vals.OpportunityName = Ext.htmlDecode(me.getAssignOpportunityBtn().getText());
		vals.ContactName = Ext.htmlDecode(me.getAssignContactBtn().getText());
		vals.CaseSubject = Ext.htmlDecode(me.getAssignCaseBtn().getText());

		if (me.cardfan == 'cardFanBtn' && meZone.fanOutDropKanban) {
			zoneArea = Ext.ComponentQuery.query('#' + meZone.fanOutDropKanban)[0];
			meZone.fanOutDropKanban = '';

		} else if (Ext.ux.Config.getDefaultInsertCard()) {
			zoneArea = Ext.ComponentQuery.query('#' + Ext.ux.Config.getDefaultInsertCard())[0].query('zone')[0];
		} else if (Ext.ComponentQuery.query('zone')[0]) {
			zoneArea = Ext.ComponentQuery.query('zone')[0];
		} else {
			meMain.alertMsgBox('No Default/Backlog Zone found on board Please Edit the board.');
			if (dis.getItemId() === "newPostCreateAndNewBtn") {
				Ext.Viewport.setMasked(false);
			}
			return;
		}
		if (zoneArea) {
			vals.ZoneID = zoneArea.getItemId();
			vals.Top = Math.abs(zoneArea.element.getY()) + 2000;
			vals.Left = Math.abs(zoneArea.element.getX()) + 2000;
			vals.Order = zoneArea.element.select("div.kanbancard").elements.length + 2;
		}
		vals.DueDate = me.getDateTime(vals.DueDate, true);
		vals.StartDate = me.getDateTime(vals.StartDate, true);
		vals.OnBudget = me.newPostOverlay.down('#onBudgetBtn').getHtml();
		vals.OnQuality = me.newPostOverlay.down('#onQualityBtn').getHtml();
		vals.OnTime = me.newPostOverlay.down('#onTimeBtn').getHtml();
		vals.UrlLink = me.newPostOverlay.down('#urlLinkmarker').getValue();
		var defaultLink = Ext.ux.Config.getDefaultLink();
		if (!(vals.ValueStreamLinkID) && defaultLink && defaultLink.LinkKanbanCardId) {
			vals.ValueStreamCardLink = defaultLink.LinkKanbanCardId;
			vals.ValueStreamLinkID = defaultLink.LinkValueStreamId;
			vals.ValueStreamLinkBoardType = defaultLink.LinkValueStreamBoardType;
			vals.ValueStreamLinkIDName = defaultLink.LinkValueStreamName;
			vals.ValueStreamCardLinkName = defaultLink.LinkKanbanCardName;
		}
		me.newKanbanCardCommand(vals);
		// Ext.getStore('TaskListArray').removeAll();
		me.newPostOverlay.hide();
		/**@author Bhupendra for save and new button*******newPostCreateAndNewBtn*/

		if (dis.getItemId() === "newPostCreateAndNewBtn") {
			if (me.cardfan == 'cardFanBtn') {
				meZone.fanOutDropKanban = vals.ZoneID;
			}
			me.newPostBtnTap(me.cardfan, '', 0);
			setTimeout(function () {
				Ext.Viewport.setMasked(false);
			}, 1000);
		}

	},
	/**
	 * Fomatted date and time
	 * @param {Ext.Date || string}				dateConverter
	 * @param {boolean}							callback
	 */
	getDateTime: function (dateConverter, callback) {
		if (browser || Ext.browser.is.firefox || Ext.browser.is.safari) {
			if (dateConverter[1] && typeof(dateConverter) !== "string") {
				dateConverter = dateConverter[1];
			}
		} else if (dateConverter && navigator.platform !== 'iPad') {
			dateConverter = dateConverter + ' 00:30:30';
		}
		var newDate,
		todayDateTime,
		date,
		month,
		year;
		if (dateConverter) {
			newDate = new Date(dateConverter);
			todayDateTime = new Date();
			date = newDate.getDate();
			month = newDate.getMonth();
			year = newDate.getFullYear();
			todayDateTime.setYear(year);
			// todayDateTime.setMonth(month, 1);
			todayDateTime.setMonth(month, date); // typical Date issue in Jan/Feb combination, that why we are using second time setting month.
			// todayDateTime.setDate(date);
			dateConverter = todayDateTime;
		} else {
			dateConverter = new Date();
		}
		return dateConverter;
	},
	/**
	 * use local storage to hold assign owner value
	 * @param {userdata object}					assignUser
	 */
	setDataLocalStore: function (assignUser) {
		var me = this,
		record,
		dataArray = [],
		getAllsuerData = Ext.getStore('TempAllUsers'),
		recordData,
		userData,
		checkRecord;
		if (me.storageEnabled()) { // checking  localstorage is supports or not

			if (localStorage.getItem(glueforce.getWorkspaceConfig().UserID)) { //checking  current user data is exists  or not
				recordData = localStorage.getItem(glueforce.getWorkspaceConfig().UserID);
				userData = JSON.parse(recordData);
				record = getAllsuerData.findRecord('Id', assignUser);
				if (record) {
					//checking assign user data is already exists in localstorage  or not
					checkRecord = userData.filter(function (value) {
							if (value.Id == assignUser) {
								return true;
							}
						});
					if (!checkRecord.length) { // if checkRecord(duplicate) length is zero then push record data in array
						userData.push(record.data);
						if (userData.length > 50) {
							userData.splice(0, 1);
						}
						localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify(userData));
						//set all assign user data array in localstorage
					}
				}

			} else {
				record = getAllsuerData.findRecord('Id', assignUser);
				if (record) {
					dataArray.push(record.data); // pushing new assign user data in array
					localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify(dataArray));
					//set all assign user data array in localstorage
				}
			}
		}
	},
	/**
	 * add subtask in Kanban card value @view Ext.view.NewPostTask
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	newPostSaveTaskBtnTap: function (dis, e, opt) {
		dis.setDisabled(true);
		_LOG && console.log('newPostSaveTaskBtnTap');
		var me = this,
		meMain = me.mainControllerObj,
		dueDateKanbanCard = '',
		vals = me.getNewPostTasksView().getValues(),
		taskCustomCheck = glueforce.getWorkspaceConfig().TaskDueDateCheck,
		newValues;
		dueDateKanbanCard = Ext.getStore('KanbanCards').findRecord('ForceID', me.getNewPostView().getValues().ForceID);
		if (dueDateKanbanCard) {
			dueDateKanbanCard = dueDateKanbanCard.data.DueDate;
		}
		if (taskCustomCheck == "true" || taskCustomCheck === true) {
			if (me.getValidateTaskDueDate(vals.dueDateTask)) {
				dis.setDisabled(false);
				return false;
			}
		}
		if (vals.dueDateTask) {
			dueDateKanbanCard = me.getDateTime(vals.dueDateTask);
		}
		newValues = {
			'Priority': vals.priorityTask,
			'OwnerId': vals.assignUserTask,
			'Subject': vals.SubjectTask ? vals.SubjectTask : 'Other',
			'Status': vals.StatusTask,
			// 'ActivityDate' : me.getDateTime(vals.dueDateTask ? vals.dueDateTask : dueDateKanbanCard),
			'ActivityDate': dueDateKanbanCard,
			'WhatId': me.getNewPostForceId().getValue(),
			'Description': vals.descriptionTaskTask,
			'Id': vals.TaskId,
			'ValueStreamID': glueforce.getWorkspaceConfig().valueStreamID
		};
		if (!(newValues.OwnerId)) {
			newValues.OwnerId = meMain.glueConfigData.UserID;
		} else {
			// calling method to use set assign user cache in localstorage
			me.setDataLocalStore(newValues.OwnerId);
		}
		me.arrayTask.push(newValues);
		me.addKanbancardTaskBtn(me.getNewPostForceId().getValue(), me.arrayTask);
		me.getNewPostTasksView().getFields('assignUserTask').setValue('');
		// called to fetch all users once again if any new user is added in value stream related users
	},
	/**
	 * @var{arrayTask} to hold task array @scope: Ext.controller.KanbanCardController
	 */
	arrayTask: [],
	/**
	 * called when Add Task button tapped, to add new task to card
	 * @param {Ext.Button}					btn
	 * @param {Ext.event}					e
	 * @param {Object}						opt
	 */
	addKanbancardTaskBtn: function (thiskanbanId, values) {
		_LOG && console.log('Add task of kanban --> addKanbancardTaskBtn');
		var me = this,
		UserStore = Ext.getStore('AllUsers'),
		storeKanban = Ext.getStore('KanbanCards'),
		storeTask = Ext.getStore('TaskListArray'),
		storeTaskCount = Ext.getStore('AllTaskListArrayCount'),
		card;
		glueforce.insertTask(values, function (onSuccess) {
			_LOG && console.log('insertTask ', onSuccess);
			if (onSuccess[0].Id) {
				var activedate = new Date(values[0].ActivityDate),
				startDate = new Date(values[0].ActivityDate);
				onSuccess[0].ActivityDate = new Date(values[0].ActivityDate);
				storeTask.add(onSuccess[0]);
				me.arrayTask.length = 0;
				var recordKanban = storeKanban.findRecord('ForceID', thiskanbanId),
				objectData,
				jsonPackage,
				userRecord,
				recordData = storeTaskCount.findRecord('ID', thiskanbanId),
				tskInd = glueforce.getWorkspaceConfig().TaskIndicator,
				lengthTask = storeTask.data.items.length,
				undoneTask = 0;

				storeTask.filter('Status', 'Completed');
				undoneTask = Math.abs(lengthTask - storeTask.getData().length);

				storeTask.clearFilter();
				if (recordData) {
					recordData.set('TaskCount', lengthTask);
					recordData.set('CountUnDoneTask', undoneTask);
				}

				if (tskInd == 'true' || tskInd === true) {
					recordKanban.set('TaskComments', undoneTask);
				} else {
					recordKanban.set('TaskComments', lengthTask);
				}

				storeKanban.sync();
				// onAdvanceFilterByString call due to filter feature in kanban controller
				me.onAdvanceFilterByString();
				objectData = {
					'Id': recordKanban.data.Id,
					'GUID': recordKanban.data.GUID,
					'TaskComments': recordKanban.data.TaskComments,
					'ChatterComments': recordKanban.data.ChatterComments,
					'TaskCount': recordData && recordData.data.TaskCount,
					'CountUnDoneTask': recordData && recordData.data.CountUnDoneTask
				};
				if (!recordKanban.data.TaskUserNames) {
					recordKanban.data.TaskUserNames = [];
				}
				recordKanban.data.TaskUserNames.push({
					ID: onSuccess[0].Id,
					TaskUserId: onSuccess[0].OwnerId,
					TaskUserName: onSuccess[0].OwnerName
				});
				/**
				 *Broad cast task comment count
				 * @param {Broadcast verb}							'NewChatterComments'
				 * @param {stringify object data}					JSON.stringify(objectData)
				 */
				glueforce.kanbanStateChange('NewChatterComments', JSON.stringify(objectData));
				userRecord = UserStore.findRecord('Id', onSuccess[0].OwnerId);

				jsonPackage = {
					'Name': Ext.htmlDecode(onSuccess[0].Subject),
					'Priority': onSuccess[0].Priority,
					'OwnerID': onSuccess[0].OwnerId,
					'OwnerName': Ext.htmlDecode(onSuccess[0].OwnerName),
					'Subject': Ext.htmlDecode(onSuccess[0].Subject),
					'Status': onSuccess[0].Status,
					'DueDate': activedate,
					'StartDate': startDate,
					'WhatId': onSuccess[0].WhatId,
					'EstimatedDuration': 1,
					'DurationUnits': 'd',
					'SmallPhotoUrl': userRecord.getData().SmallPhotoUrl,
					'Description': onSuccess[0].Description ? Ext.htmlDecode(onSuccess[0].Description) : '',
					'Id': onSuccess[0].Id,
					'ItemType': 'Task',
					'expanded': false,
					'leaf': true,
					'ValueStreamID': onSuccess[0].ValueStreamID,
					'ValueStreamName': Ext.htmlDecode(onSuccess[0].ValueStreamName),
					'ProjectRoomName': Ext.htmlDecode(onSuccess[0].ProjectRoomName),
					'ProjectRoomID': onSuccess[0].ProjectRoomID,
					'KanbanCardName': Ext.htmlDecode(onSuccess[0].KanbanCardName)
				};
				glueforce.kanbanStateChange('createTask', JSON.stringify(jsonPackage));
				card = me.getEditCardLayoutContainer();
				me.getNewPostSaveTaskBtn().setDisabled(false);
				card.animateActiveItem(1, {
					type: 'slide',
					direction: 'right'
				});
				if (me.getTasklistofKanban()) {
					me.getTasklistofKanban().setStyle('background : none !important');
					me.getTasklistofKanban().setHtml('');
					me.getTasklistofKanban().refresh();
				}
			} else {
				me.getNewPostSaveTaskBtn().setDisabled(false);
				me.mainControllerObj.alertMsgBox('The assigned owner no longer exists. Please try a different user.');
				localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify([]));
			}
			me.getAssignUserBtnTask().setText('Assign a User');
			me.getCriticalBtnFieldsetTask().items.items[0].setText('None');
		});
	},
	/**
	 * called when update subcriber button tapped, to update new subcriber for card
	 * @param {Ext.Button}				btn
	 * @param {Ext.event}				e
	 * @param {Object}					opt
	 */
	newPostSaveSubscriberBtnTap: function (dis, e, opt) {
		_LOG && console.log('newPostSaveSubscriberBtnTap');
		var me = this,
		checkBoxFields = me.getNewPostSubscriberView(),
		assignSubscribersUserId = checkBoxFields.down('#assignSubscribersId').getValue(),
		kanbanmove = checkBoxFields.down('#kanbanmove'),
		percentdone = checkBoxFields.down('#percentdone'),
		cardpastduedate = checkBoxFields.down('#cardpastduedate'),
		taskpastduedate = checkBoxFields.down('#taskpastduedate'),
		taskgetcomplete = checkBoxFields.down('#taskgetcomplete'),
		subscriberOptions;
		if (!assignSubscribersUserId) {
			me.mainControllerObj.alertMsgBox('Select Subscriber first.');
			return;
		}
		subscriberOptions = {
			'kanbanid': me.getNewPostForceId().getValue(),
			'subscriberid': assignSubscribersUserId,
			'kanbanmove': kanbanmove.getChecked(),
			'percentdone': percentdone.getChecked(),
			'cardpastduedate': cardpastduedate.getChecked(),
			'taskpastduedate': taskpastduedate.getChecked(),
			'isTaskCompleted': taskgetcomplete.getChecked(),
			'preference': '',
			'flag': 0
		};
		me.addKanbancardSubscriberBtn(subscriberOptions);
		// reset all check box,default to checked
		kanbanmove.setChecked(true);
		percentdone.setChecked(true);
		cardpastduedate.setChecked(true);
		taskpastduedate.setChecked(true);
		taskgetcomplete.setChecked(true);
		checkBoxFields.reset();
		checkBoxFields.down('#assignSubscribers').setText('Assign a Subscriber');
	},
	/**
	 * called when Add Subscriber button tapped, to add new subscriber to card
	 * @param {Object}						subscriberOptions
	 */
	addKanbancardSubscriberBtn: function (subscriberOptions) {
		_LOG && console.log('Add subscriber of kanban --> addKanbancardSubscriberBtn');
		var me = this,
		storeSubscriber = Ext.getStore('SubscriberListArray'),
		subcriberData = storeSubscriber.findRecord('Lean__SubscriberID__c', subscriberOptions.subscriberid);
		if (subcriberData) {
			me.mainControllerObj.alertMsgBox('Already Subscriber of this card.');
			return;
		}
		glueforce.manageSubscriber(subscriberOptions, function (onSuccess) {
			_LOG && console.log('manageSubscriber ', onSuccess);
			var allUsersStore = Ext.getStore('AllUsers'),
			allUserRecord = allUsersStore.findRecord('Id', onSuccess.Lean__SubscriberID__c);
			if (allUserRecord) {
				onSuccess.ownerImage = allUserRecord.data.SmallPhotoUrl;
				onSuccess.ownerName = allUserRecord.data.Name;
			}
			if (me.getSubscriberListofKanban().up().items.items[0].isHidden()) {
				me.getSubscriberListofKanban().up().items.items[0].show();
			}
			me.getSubscriberListofKanban().setStyle('background : none !important');
			me.getSubscriberListofKanban().setHtml('');
			me.getSubscriberListofKanban().refresh();
			storeSubscriber.add(onSuccess);
		});

	},
	/**
	 * called from the UI when a user clicks the new kanban card button
	 * @param {Object}						localData
	 * @localData is object which takes value from newPost/Edit popUp
	 */
	newKanbanCardCommand: function (localData) {
		_LOG && console.log('newKanbanCardCommand');
		var me = this,
		recordData,
		cardLinkExist = localData.ValueStreamCardLink,
		storeTaskCount = Ext.getStore('AllTaskListArrayCount'),
		newKanbanCardRecord = me.newKanbanCardCore(localData, 'senderside'),
		meMain = me.mainControllerObj,
		undoStore = Ext.getStore('UndoRecord'),
		kanbanUrl,
		tempcardArray = [],
		tempcard = {};

		/**
		 * generate URL of card to send the chatter feed message, but without appending ForceID, because we will not have one while creating a new card
		 * it will be concatenated at force.com end
		 */
		kanbanUrl = meMain.glueConfigData.BaseURL;
		kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
		kanbanUrl += meMain.glueConfigData.valueStreamID;
		kanbanUrl = kanbanUrl + '&cardid=';
		tempcard.Id = newKanbanCardRecord.get('Id');
		tempcard.GUID = newKanbanCardRecord.get('GUID');
		tempcard.Title = newKanbanCardRecord.get('Title');
		tempcard.Top = newKanbanCardRecord.get('Top');
		tempcard.Bottom = newKanbanCardRecord.get('Bottom');
		tempcard.Left = newKanbanCardRecord.get('Left');
		tempcard.Width = newKanbanCardRecord.get('Width');
		tempcard.Height = newKanbanCardRecord.get('Height');
		tempcard.X = newKanbanCardRecord.get('X');
		tempcard.Y = newKanbanCardRecord.get('Y');
		tempcard.JSONDefinition = Ext.String.htmlDecode(newKanbanCardRecord.get('JSONDefinition'));
		tempcard.JSONData = newKanbanCardRecord.get('JSONData');
		tempcard.Name = newKanbanCardRecord.get('Name');
		tempcard.TemplateID = newKanbanCardRecord.get('TemplateID');
		tempcard.Color = newKanbanCardRecord.get('Color');
		tempcard.Description = newKanbanCardRecord.get('Description');
		tempcard.DueDate = new Date(newKanbanCardRecord.get('DueDate')); //Ext.Date.format(newKanbanCardRecord.get('DueDate'), 'Y-m-d H:i:s');
		tempcard.EstimatedDuration = newKanbanCardRecord.get('EstimatedDuration');
		tempcard.DurationUnits = newKanbanCardRecord.get('DurationUnits');
		tempcard.Priority = newKanbanCardRecord.get('Priority');
		tempcard.OwnerID = newKanbanCardRecord.get('OwnerID');
		tempcard.HarveyBall = newKanbanCardRecord.get('HarveyBall');
		tempcard.KanbanUrl = kanbanUrl;
		tempcard.ValueStreamCardLink = newKanbanCardRecord.get('ValueStreamCardLink');
		tempcard.ValueStreamLinkID = newKanbanCardRecord.get('ValueStreamLinkID');
		tempcard.ValueStreamLinkBoardType = newKanbanCardRecord.get('ValueStreamLinkBoardType');
		tempcard.ValueStream = meMain.glueConfigData.valueStreamID;
		tempcard.Account = newKanbanCardRecord.get('Account');
		tempcard.Opportunity = newKanbanCardRecord.get('Opportunity');
		tempcard.Contact = newKanbanCardRecord.get('Contact');
		tempcard.CaseID = newKanbanCardRecord.get('CaseID');
		tempcard.Order = newKanbanCardRecord.get('Order');
		tempcard.DateColor = '';
		tempcard.ZoneID = newKanbanCardRecord.get('ZoneID');
		tempcard.ZoneTitle = newKanbanCardRecord.get('ZoneTitle');
		tempcard.OnBudget = newKanbanCardRecord.get('OnBudget');
		tempcard.OnQuality = newKanbanCardRecord.get('OnQuality');
		tempcard.OnTime = newKanbanCardRecord.get('OnTime');
		tempcard.UrlLink = newKanbanCardRecord.get('UrlLink');
		tempcard.MCForceID = newKanbanCardRecord.get('MCForceID');
		tempcard.SWForceID = newKanbanCardRecord.get('SWForceID');
		tempcard.ZoneForceID = newKanbanCardRecord.get('ZoneForceID');
		tempcard.Point = newKanbanCardRecord.get('Point');
		tempcard.AcceptanceCriteria = newKanbanCardRecord.get('AcceptanceCriteria');
		tempcard.CardID = newKanbanCardRecord.get('CardID');
		tempcard.EffortRemaining = newKanbanCardRecord.get('EffortRemaining');
		// tempcard.SmallPhotoUrl = newKanbanCardRecord.get('SmallPhotoUrl');
		tempcard.StartDate = new Date(newKanbanCardRecord.get('StartDate')); //Ext.Date.format(newKanbanCardRecord.get('StartDate'), 'Y-m-d H:i:s');
		/***callback for the create call below*/
		tempcardArray.push(JSON.stringify(tempcard));
		tempcard = null;
		var onSuccess = function (kanbanid) {
			if (kanbanid[0].Id) {
				newKanbanCardRecord.set('ForceID', kanbanid[0].Id);
				newKanbanCardRecord.set('Id', kanbanid[0].Id);
				if (newKanbanCardRecord.get('ForceID')) {
					recordData = storeTaskCount.findRecord('ID', newKanbanCardRecord.get('ForceID'));
					if (!recordData) {
						storeTaskCount.add({
							ChatterCount: 0,
							CountUnDoneTask: 0,
							ID: newKanbanCardRecord.get('ForceID'),
							KanbanStickers: newKanbanCardRecord.get('AllSticker'),
							Name: newKanbanCardRecord.get('Name'),
							TaskCount: 0
						});
					}

				}
				/** have to wait for save event below; to save new created kanban card's ForceID
				 * we have assign in store force ID in to way some bizarre reason force.com
				 */
				var jsonPackage = {
					Id: newKanbanCardRecord.get('Id'),
					GUID: newKanbanCardRecord.get('GUID'),
					ForceID: newKanbanCardRecord.get('ForceID'),
					Title: newKanbanCardRecord.get('Title'),
					Top: newKanbanCardRecord.get('Top'),
					Left: newKanbanCardRecord.get('Left'),
					Width: newKanbanCardRecord.get('Width'),
					Height: newKanbanCardRecord.get('Height'),
					X: newKanbanCardRecord.get('X'),
					Y: newKanbanCardRecord.get('Y'),
					State: newKanbanCardRecord.get('State'),
					ZoneID: newKanbanCardRecord.get('ZoneID'),
					ZoneTitle: newKanbanCardRecord.get('ZoneTitle'),
					Name: newKanbanCardRecord.get('Name'),
					TemplateID: newKanbanCardRecord.get('TemplateID'),
					Color: newKanbanCardRecord.get('Color'),
					DueDate: new Date(newKanbanCardRecord.get('DueDate')), //Ext.Date.format(newKanbanCardRecord.get('DueDate'), 'Y-m-d H:i:s'),
					Priority: newKanbanCardRecord.get('Priority'),
					OwnerID: newKanbanCardRecord.get('OwnerID'),
					HarveyBall: newKanbanCardRecord.get('HarveyBall'),
					EstimatedDuration: newKanbanCardRecord.get('EstimatedDuration'),
					Description: newKanbanCardRecord.get('Description'),
					DurationUnits: newKanbanCardRecord.get('DurationUnits'),
					KanbanUrl: kanbanUrl,
					ValueStreamCardLink: newKanbanCardRecord.get('ValueStreamCardLink'),
					ValueStreamLinkID: newKanbanCardRecord.get('ValueStreamLinkID'),
					ValueStreamLinkBoardType: newKanbanCardRecord.get('ValueStreamLinkBoardType'),
					ValueStream: meMain.glueConfigData.valueStreamID,
					Account: newKanbanCardRecord.get('Account'),
					Opportunity: newKanbanCardRecord.get('Opportunity'),
					AccountName: newKanbanCardRecord.get('AccountName'),
					OpportunityName: newKanbanCardRecord.get('OpportunityName'),
					OpportunityStage: newKanbanCardRecord.get('OpportunityStage'),
					Contact: newKanbanCardRecord.get('Contact'),
					ContactName: newKanbanCardRecord.get('contactName'),
					CaseID: newKanbanCardRecord.get('CaseID'),
					CaseSubject: newKanbanCardRecord.get('CaseSubject'),
					CaseStatus: newKanbanCardRecord.get('CaseStatus'),
					CasePriority: newKanbanCardRecord.get('CasePriority'),
					StartDate: new Date(newKanbanCardRecord.get('StartDate')), // Ext.Date.format(newKanbanCardRecord.get('StartDate'), 'Y-m-d H:i:s'),
					JSONDefinition: Ext.String.htmlDecode(newKanbanCardRecord.get('JSONDefinition')),
					JSONData: newKanbanCardRecord.get('JSONData'),
					SmallPhotoUrl: newKanbanCardRecord.get('SmallPhotoUrl'),
					Order: newKanbanCardRecord.get('Order'),
					OnBudget: newKanbanCardRecord.get('OnBudget'),
					OnQuality: newKanbanCardRecord.get('OnQuality'),
					OnTime: newKanbanCardRecord.get('OnTime'),
					ItemType: 'KC',
					BoardType: 'Kanban Board',
					UrlLink: newKanbanCardRecord.get('UrlLink'),
					MCForceID: newKanbanCardRecord.get('MCForceID'),
					SWForceID: newKanbanCardRecord.get('SWForceID'),
					ZoneForceID: newKanbanCardRecord.get('ZoneForceID'),
					Point: newKanbanCardRecord.get('Point'),
					EffortRemaining: newKanbanCardRecord.get('EffortRemaining'),
					CardID: newKanbanCardRecord.get('CardID'),
					LinkedCardVerb: (cardLinkExist ? 'CardHierarchyToOther' : '')
				};
				tempcardArray = [];
				tempcardArray.push('CreateKanbanCard', jsonPackage);
				if (undoStore.getData().length < Ext.ux.Config.getUndoLimit()) {
					undoStore.add({
						KanbanCardRecord: tempcardArray
					});
				} else {
					undoStore.removeAt(0);
					undoStore.add({
						KanbanCardRecord: tempcardArray
					});
				}
				tempcardArray = null;
				_LOG && console.log('newKanbanCardCommand--jsonPackage--->', jsonPackage);
				glueforce.kanbanStateChange("CreateKanbanCard", JSON.stringify(jsonPackage));
				var stickerID = [],
				i,
				selectedStickerArray = newKanbanCardRecord.data.AllSticker,
				stickerLength = selectedStickerArray.length;
				if (stickerLength) {

					for (i = 0; i < stickerLength; i++) {
						stickerID.push(selectedStickerArray[i].id);
					}
					/** create sticker for new kanban card create
					 *@param {array of sticker Id}			stickerID
					 *@param {kanban card Id}				droppedCardId
					 */
					glueforce.addStickerToKanbanCard(stickerID, kanbanid[0].Id, function (onSuccess) {
						_LOG && console.log('addStickerToKanbanCard ', onSuccess);
					});
					me.updateKanbanCardCommand('', jsonPackage, true);
				}

				/**@pankaj changes */
				/** @Bhupendra Changes */
				// var zoneCmp = Ext.ComponentQuery.query('#' + newKanbanCardRecord.get('ZoneID'))[0];
				// if (zoneCmp && zoneCmp.down('#zoneDataview')) {
				// zoneCmp.down('#zoneDataview').refresh();
				/** Update card limit on zone,Master Container and SwimLane
				 *@param {dataview}				zoneCmp.down('#zoneDataview')
				 *@param {zone Id}				newKanbanCardRecord.get('ZoneID')
				 */
				// zoneCmp.fireEvent('updatelimits', zoneCmp.down('#zoneDataview'), newKanbanCardRecord.get('ZoneID'));
				// }
				/**@pankaj changes  End*/
				me.assignUserNameOncards();
				// onAdvanceFilterByString call due to filter feature in kanban controller
				me.onAdvanceFilterByString();
				jsonPackage = null;
			} else {
				var myKanbanCardStore = Ext.getStore('KanbanCards'),
				cardRecord;
				cardRecord = myKanbanCardStore.findRecord('GUID', newKanbanCardRecord.get('GUID'));
				if (cardRecord) {
					myKanbanCardStore.remove(cardRecord);
				}
				me.mainControllerObj.alertMsgBox('An error occurred. Please contact your administrator.');
				localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify([]));
			}
		};

		glueforce.createKanbanCard(meMain.glueConfigData.valueStreamID, tempcardArray, onSuccess);
		tempcardArray = null;
		me.assignUserNameOncards();
		// onAdvanceFilterByString call due to filter feature in kanban controller
		me.onAdvanceFilterByString();

	},
	kanbancardBulkArray: [], // array for catch kanban card for bulk update if user on case sync setting
	/**
	 * core logic to create kanban card minus the broadcast out to Web
	 * the last 'extObj' parm is from force.com JSONDefinition field and defines a whole new set of fields
	 * @param {Object}					localData
	 * @param {string}					pkg
	 */
	newKanbanCardCore: function (localData, pkg) {
		_LOG && console.log('newKanbanCardCore');
		var ne = this,
		meMain = this.mainControllerObj,
		meZone = this.getApplication().getController('ZoneController'),
		uniqueid,
		defaultZone,
		baseConfig,
		recordData,
		caseOppsync = false,
		defaultitemId,
		zoneStore = Ext.getStore('Zones');
		if (localData.Title) {
			localData.Title.replace(/(<([^>]+)>)/ig, "");
		}
		if (!localData.GUID) {
			uniqueid = UUID.generate();
		}
		defaultZone = Ext.ComponentQuery.query('#' + Ext.ux.Config.getDefaultInsertCard())[0].query('zone')[0];
		defaultitemId = defaultZone.getItemId();
		if (defaultitemId != localData.ZoneID && !localData.ZoneID) {
			// new installation we have a card without zone/ or any card which not contain zone id
			console.info('This card was without zone specify', localData.Name);
			caseOppsync = true;
		}
		/**set up base configuration of a record, but then overlay extended fields from force.com UrlLink*/
		baseConfig = {
			Id: (localData.ForceID ? localData.ForceID : ''),
			GUID: (localData.GUID ? localData.GUID : uniqueid),
			ForceID: (localData.ForceID ? localData.ForceID : ''),
			Title: (localData.Title ? localData.Title : 'Kanban Card'),
			Name: (localData.Name ? localData.Name : 'Kanban Card'),
			Top: (localData.Top ? localData.Top : Ext.ux.Config.getBackposition()),
			Bottom: 0,
			Left: (localData.Left ? localData.Left : Ext.ux.Config.getBackposition()),
			Width: (localData.Width ? localData.Width : 170),
			Height: (localData.Height ? localData.Height : 90),
			X: 0,
			Y: 0,
			State: (localData.State ? localData.State : ''),
			ZoneID: (localData.ZoneID ? localData.ZoneID : defaultitemId),
			ZoneTitle: (localData.ZoneTitle ? localData.ZoneTitle : meZone.getZoneTitleForAlert(defaultitemId)),
			LeavedZoneID: (localData.LeavedZoneID ? localData.LeavedZoneID : ''),
			LeavedZoneTitle: (localData.LeavedZoneTitle ? localData.LeavedZoneTitle : ''),
			TemplateID: (localData.TemplateID ? localData.TemplateID : ''),
			JSONDefinition: (localData.JSONDefinition ? localData.JSONDefinition : '{}'),
			JSONData: (localData.JSONData ? localData.JSONData : '{}'),
			DueDate: (localData.DueDate ? new Date(localData.DueDate) : new Date()),
			LastModifiedDate: (localData.LastModifiedDate ? localData.LastModifiedDate : new Date()),
			DurationUnits: (localData.DurationUnits ? localData.DurationUnits : 'Days'),
			Priority: (localData.Priority ? localData.Priority : 4),
			EstimatedDuration: (localData.EstimatedDuration ? localData.EstimatedDuration : 0),
			StartDate: (localData.StartDate ? new Date(localData.StartDate) : new Date()),
			Description: (localData.Description ? localData.Description : ''),
			Color: (localData.Color ? localData.Color : '#fcfabd'),
			Extensions: (localData.Extensions ? localData.Extensions : {}),
			OwnerID: (localData.OwnerID ? localData.OwnerID : meMain.glueConfigData.UserID),
			HarveyBall: (parseInt(localData.HarveyBall, 10) ? parseInt(localData.HarveyBall, 10) : 0),
			dateColor: (localData.dateColor ? localData.dateColor : ""),
			ValueStreamLinkID: (localData.ValueStreamLinkID ? localData.ValueStreamLinkID : ''),
			ValueStreamCardLink: (localData.ValueStreamCardLink ? localData.ValueStreamCardLink : ''),
			ValueStreamLinkBoardType: (localData.ValueStreamLinkBoardType ? localData.ValueStreamLinkBoardType : ''),
			ValueStream: (localData.ValueStream ? localData.ValueStream : meMain.glueConfigData.valueStreamID),
			Account: (localData.Account ? localData.Account : ''),
			Opportunity: (localData.Opportunity ? localData.Opportunity : ''),
			Contact: (localData.Contact ? localData.Contact : ''),
			CaseID: (localData.CaseID ? localData.CaseID : ''),
			AccountName: (localData.AccountName ? localData.AccountName : ''),
			OpportunityName: (localData.OpportunityName ? localData.OpportunityName : ''),
			ContactName: (localData.ContactName ? localData.ContactName : ''),
			TaskComments: (localData.TaskComments ? localData.TaskComments : null),
			CaseSubject: (localData.CaseSubject ? localData.CaseSubject : 'Case : ' + localData.CaseNumber),
			Order: (localData.Order ? localData.Order : 1),
			CaseStatus: (localData.CaseStatus ? localData.CaseStatus : ''),
			OpportunityStage: (localData.OpportunityStage ? localData.OpportunityStage : ''),
			CasePriority: (localData.CasePriority ? localData.CasePriority : ''),
			SmallPhotoUrl: (localData.SmallPhotoUrl ? localData.SmallPhotoUrl : ''),
			OnBudget: (localData.OnBudget ? localData.OnBudget : 'Green'),
			OnQuality: (localData.OnQuality ? localData.OnQuality : 'Green'),
			OnTime: (localData.OnTime ? localData.OnTime : 'Green'),
			ChatterComments: (localData.ChatterComments ? localData.ChatterComments : null),
			AllSticker: (localData.AllSticker ? localData.AllSticker : ne.selectedStickerArray),
			UrlLink: (localData.UrlLink ? localData.UrlLink : ''),
			ZoneForceID: (localData.ZoneForceID ? localData.ZoneForceID : ''),
			MCForceID: (localData.MCForceID ? localData.MCForceID : ''),
			SWForceID: (localData.SWForceID ? localData.SWForceID : ''),
			ValueStreamCardLinkName: (localData.ValueStreamCardLinkName ? localData.ValueStreamCardLinkName : ''),
			ValueStreamLinkIDName: (localData.ValueStreamLinkIDName ? localData.ValueStreamLinkIDName : ''),
			Point: (localData.Point ? localData.Point : 1),
			EffortRemaining: (localData.EffortRemaining ? localData.EffortRemaining : 0),
			AcceptanceCriteria: localData.AcceptanceCriteria || '',
			CardID: localData.CardID || '',
			OwnerName: localData.OwnerName || '',
			TaskUserNames: (localData.TaskUserNames ? localData.TaskUserNames : null)
		};
		/** instantiate the extended model*/
		var newKanbanCardRecord = Ext.create("RealTimeKanbanBoard.model.KanbanCard", baseConfig),
		alluserStore = Ext.getStore('AllUsers'),
		storeTaskCount = Ext.getStore('AllTaskListArrayCount'),
		userrecord;
		baseConfig = null;
		if (!(newKanbanCardRecord.get('SmallPhotoUrl'))) {

			userrecord = alluserStore.findRecord('Id', newKanbanCardRecord.get('OwnerID'));
			if (userrecord) {
				newKanbanCardRecord.set('SmallPhotoUrl', userrecord.get('SmallPhotoUrl'));
			}
		}
		if (newKanbanCardRecord.get('HarveyBall') < 2) {
			newKanbanCardRecord.set('HarveyBall', 0);
		}
		var matchingStatusZoneRecord,
		getreturn,
		oppZoneId,
		zoneTitle,
		oldZoneid,
		zoneId;
		/**Case sync code if user set prefrence with case sync on */
		if (meMain.casesSyncOn && newKanbanCardRecord.get('CaseStatus') && newKanbanCardRecord.get('CaseStatus') !== '') {
			matchingStatusZoneRecord = zoneStore.findRecord('ZoneStatus', newKanbanCardRecord.get('CaseStatus'));
			if (!matchingStatusZoneRecord) {
				// to check if default zone exists on board
				matchingStatusZoneRecord = zoneStore.findRecord('ZoneStatus', 'Default');
			}
			if (!matchingStatusZoneRecord) {
				// to check if default zone exists on board
				matchingStatusZoneRecord = zoneStore.findRecord('GUID', defaultitemId);
			}
			if (matchingStatusZoneRecord) {
				zoneId = matchingStatusZoneRecord.data.GUID;
				zoneTitle = matchingStatusZoneRecord.data.Title;
				oldZoneid = newKanbanCardRecord.get('ZoneID');
				if (oldZoneid != zoneId) {
					newKanbanCardRecord.set('LeavedZoneID', oldZoneid);
					newKanbanCardRecord.set('LeavedZoneTitle', newKanbanCardRecord.get('ZoneTitle'));
				}
				getreturn = meZone.getZoneTitleForAlert(zoneId);
				if (getreturn) {
					zoneTitle = getreturn;
				}
				newKanbanCardRecord.set('ZoneID', zoneId);
				newKanbanCardRecord.set('ZoneTitle', zoneTitle);
				if (oldZoneid != zoneId || (defaultitemId == oldZoneid && !localData.ZoneID)) {
					caseOppsync = true;
				}
			}
		}
		/**Opportunity sync code if user set prefrence with Opportunity sync on */
		if (meMain.opportunitySyncOn && newKanbanCardRecord.get('OpportunityStage') && newKanbanCardRecord.get('OpportunityStage') !== '') {
			matchingStatusZoneRecord = zoneStore.findRecord('ZoneOpportunityStage', newKanbanCardRecord.get('OpportunityStage'));
			if (!matchingStatusZoneRecord) {
				// to check if default zone exists on board
				matchingStatusZoneRecord = zoneStore.findRecord('ZoneOpportunityStage', 'Default');
			}
			if (!matchingStatusZoneRecord) {
				// to check if default zone exists on board
				matchingStatusZoneRecord = zoneStore.findRecord('GUID', defaultitemId);
			}
			if (matchingStatusZoneRecord) {
				oppZoneId = matchingStatusZoneRecord.data.GUID;
				zoneTitle = matchingStatusZoneRecord.data.Title;
				oldZoneid = newKanbanCardRecord.get('ZoneID');
				if (oldZoneid != oppZoneId) {
					newKanbanCardRecord.set('LeavedZoneID', oldZoneid);
					newKanbanCardRecord.set('LeavedZoneTitle', newKanbanCardRecord.get('ZoneTitle'));
				}
				getreturn = meZone.getZoneTitleForAlert(oppZoneId);
				if (getreturn) {
					zoneTitle = getreturn;
				}
				newKanbanCardRecord.set('ZoneID', oppZoneId);
				newKanbanCardRecord.set('ZoneTitle', zoneTitle);
				if (oldZoneid != oppZoneId || (defaultitemId == oldZoneid && !localData.ZoneID)) {
					caseOppsync = true;
				}
			}
		}
		/** to add up card in zone or board, finding here on the basis of case choosed by user for card
		do this if and only if case sync is On for thie project board */
		var myKanbanCardStore = Ext.getStore('KanbanCards');
		myKanbanCardStore.add(newKanbanCardRecord);
		Ext.getStore('TempKanbanCards').add(newKanbanCardRecord);
		myKanbanCardStore.sync();
		/**To manage task count broad card when task indicator on or off*/
		if (newKanbanCardRecord.get('ForceID') && (pkg === "broadCast" || pkg === "senderside" || pkg === 'hyperbroadCast')) {
			recordData = storeTaskCount.findRecord('ID', newKanbanCardRecord.get('ForceID'));
			if (!recordData) {
				storeTaskCount.add({
					ChatterCount: 0,
					CountUnDoneTask: 0,
					ID: newKanbanCardRecord.get('ForceID'),
					KanbanStickers: newKanbanCardRecord.get('AllSticker'),
					Name: newKanbanCardRecord.get('Name'),
					TaskCount: 0
				});
			}

		}

		//If newCore method receive a card object through broadcast
		if (pkg === 'broadCast' || pkg === 'hyperbroadCast') {
			/**@pankaj changes */
			var zoneCmp = Ext.ComponentQuery.query('#' + newKanbanCardRecord.get('ZoneID'))[0];
			if (zoneCmp && zoneCmp.down('#zoneDataview')) {
				zoneCmp.down('#zoneDataview').refresh();
			}
			/**@pankaj changes End*/
			// get sticker when card arrive through hyper jump on this board
			if (pkg === 'hyperbroadCast') {
				glueforce.getKanbanCardStickers([newKanbanCardRecord.get('ForceID')], function (successresult) {
					_LOG && console.log('getKanbanCardStickers', successresult);
					if (successresult.length) {
						newKanbanCardRecord.set('AllSticker', successresult);
						setTimeout(function () {
							ne.assignUserNameOncards();
							// onAdvanceFilterByString call due to filter feature in kanban controller
							ne.onAdvanceFilterByString();
						}, 100);
					}
				});
			}
		}

		newKanbanCardRecord = ne.getColumnHierarchical(newKanbanCardRecord);

		if (pkg && pkg != 'senderside') {
			userrecord = alluserStore.findRecord('Id', newKanbanCardRecord.data.OwnerID);
			if (userrecord) {
				newKanbanCardRecord.data.OwnerName = userrecord.data.Name;
			}
			Ext.getStore('TempKanbanCards').add(newKanbanCardRecord.data);

			setTimeout(function () {
				ne.assignUserNameOncards();
				// onAdvanceFilterByString call due to filter feature in kanban controller
				ne.onAdvanceFilterByString();
			}, 100);
		}
		if (caseOppsync === true) {
			ne.kanbancardBulkArray.push(newKanbanCardRecord.getData());
		}
		return newKanbanCardRecord;
	},
	/** get Master container and swimlane ID for Hierarchical relation ship of all card.
	 * @param (Ext.model.Kanbancard)             record
	 */
	getColumnHierarchical: function (record) {
		_LOG && console.log('getColumnHierarchical');
		var zoneCmp = Ext.ComponentQuery.query('#' + record.get('ZoneID'))[0],
		swimlaneCmp;
		if (zoneCmp) {
			swimlaneCmp = zoneCmp.up('productSwimlaneContainer');
			swimlaneCmp && Ext.apply(record.data, {
				MCForceID: swimlaneCmp.getMasterContainerID(),
				SWForceID: zoneCmp.getSwimlaneID(),
				ZoneForceID: zoneCmp.getZoneForceID()
			});
		}
		return record;
	},
	/**
	 * send updetes data and sync with force.com
	 * @param {Ext.view.KanbanCard}					cmp
	 * @param {Object}								localData
	 * @param {boolean}								updateKanbanCardVerb
	 */
	updateKanbanCardCommand: function (cmp, localData, updateKanbanCardVerb) {
		_LOG && console.log('updateKanbanCardCommand');
		var me = this,
		undoStore = Ext.getStore('UndoRecord'),
		tempcardArray = [],
		meMain = me.mainControllerObj,
		kanbanUrl,
		jsonPackage,
		kanbanCardOldData,
		updatedRecord;
		if (updateKanbanCardVerb) {
			kanbanCardOldData = JSON.parse(JSON.stringify(Ext.getStore('KanbanCards').getById(localData.GUID).data));
		}
		updatedRecord = this.updateKanbanCardCore(cmp, localData, null);
		_LOG && console.log('updateKanbanCardCommand---->updatedRecord-->', updatedRecord);
		if (updatedRecord) {
			// generate URL of card to send the chatter feed message, but without appending ForceID, it will be concatenated at force.com end.
			kanbanUrl = meMain.glueConfigData.BaseURL;
			kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
			kanbanUrl += meMain.glueConfigData.valueStreamID;
			kanbanUrl = kanbanUrl + '&cardid=';
			// don't need to wait for save event below; we know something has changed, so broadcast it
			// NOTE: we round the numbers to make sure Visualforce AJAX remote calls work properly and JSON deserialization to Java "Integer" on server
			jsonPackage = {
				Id: (updatedRecord.get('Id')),
				GUID: (updatedRecord.get('GUID')),
				Title: updatedRecord.get('Title'),
				Name: updatedRecord.get('Name'),
				Width: Math.round(updatedRecord.get('Width')),
				Height: Math.round(updatedRecord.get('Height')),
				Top: Math.round(updatedRecord.get('Top')),
				Left: Math.round(updatedRecord.get('Left')),
				Bottom: Math.round(updatedRecord.get('Bottom')),
				X: Math.round(updatedRecord.get('X')),
				Y: Math.round(updatedRecord.get('Y')),
				Color: (updatedRecord.get('Color')),
				TemplateID: (updatedRecord.get('TemplateID')),
				// CmpID: cmp.getId(),
				ZoneID: (updatedRecord.get('ZoneID')),
				ZoneTitle: (updatedRecord.get('ZoneTitle')),
				LeavedZoneID: (updatedRecord.get('LeavedZoneID')),
				LeavedZoneTitle: (updatedRecord.get('LeavedZoneTitle')),
				State: (updatedRecord.get('State')),
				EstimatedDuration: Math.round(updatedRecord.get('EstimatedDuration')),
				DurationUnits: (updatedRecord.get('DurationUnits')),
				DueDate: new Date(updatedRecord.get('DueDate')), //Ext.Date.format(updatedRecord.get('DueDate'), 'Y-m-d H:i:s'),
				Priority: parseInt(updatedRecord.get('Priority'), 10),
				HarveyBall: parseInt(updatedRecord.get('HarveyBall'), 10),
				OwnerID: (updatedRecord.get('OwnerID')),
				Description: updatedRecord.get('Description'),
				ValueStreamCardLink: (updatedRecord.get('ValueStreamCardLink')),
				ValueStreamLinkID: (updatedRecord.get('ValueStreamLinkID')),
				ValueStreamLinkBoardType: (updatedRecord.get('ValueStreamLinkBoardType')),
				Account: (updatedRecord.get('Account')),
				Opportunity: (updatedRecord.get('Opportunity')),
				AccountName: (updatedRecord.get('AccountName')),
				OpportunityName: (updatedRecord.get('OpportunityName')),
				OpportunityStage: (updatedRecord.get('OpportunityStage')),
				Contact: (updatedRecord.get('Contact')),
				ContactName: (updatedRecord.get('ContactName')),
				CaseID: (updatedRecord.get('CaseID')),
				Order: (updatedRecord.get('Order')),
				CaseSubject: (updatedRecord.get('CaseSubject')),
				CaseStatus: (updatedRecord.get('CaseStatus')),
				CasePriority: (updatedRecord.get('CasePriority')),
				StartDate: new Date(updatedRecord.get('StartDate')), // Ext.Date.format(updatedRecord.get('StartDate'), 'Y-m-d H:i:s'),
				KanbanUrl: kanbanUrl,
				ValueStream: meMain.glueConfigData.valueStreamID,
				JSONDefinition: Ext.String.htmlDecode(updatedRecord.get('JSONDefinition')),
				JSONData: updatedRecord.get('JSONData'),
				SmallPhotoUrl: updatedRecord.get('SmallPhotoUrl'),
				OnBudget: updatedRecord.get('OnBudget'),
				OnQuality: updatedRecord.get('OnQuality'),
				OnTime: updatedRecord.get('OnTime'),
				ItemType: 'KC',
				BoardType: 'Kanban Board',
				UrlLink: updatedRecord.get('UrlLink'),
				MCForceID: updatedRecord.get('MCForceID'),
				SWForceID: updatedRecord.get('SWForceID'),
				ZoneForceID: updatedRecord.get('ZoneForceID'),
				Point: updatedRecord.get('Point'),
				EffortRemaining: updatedRecord.get('EffortRemaining'),
				AcceptanceCriteria: updatedRecord.get('AcceptanceCriteria'),
				CardID: updatedRecord.get('CardID'),
				// LinkedCardVerb: (kanbanCardOldData && kanbanCardOldData.ValueStreamCardLink != updatedRecord.get('ValueStreamCardLink') ? 'CardHierarchyToOther' : '')
				// for handle broadcast on plan gantt for linked cards
				LinkedCardVerb: (updatedRecord.get('ValueStreamCardLink') ? 'CardHierarchyToOther' : '')
			};

			if (updateKanbanCardVerb) {
				if (kanbanCardOldData) {

					/**
					 * Add kanbanCard Record in undo store
					 * Store record for Revert card record
					 */
					tempcardArray.push('UpdateKanbanCard', kanbanCardOldData);
					if (undoStore.getData().length < Ext.ux.Config.getUndoLimit()) {
						undoStore.add({
							KanbanCardRecord: tempcardArray
						});
					} else {
						undoStore.removeAt(0);
						undoStore.add({
							KanbanCardRecord: tempcardArray
						});
					}
				}
				glueforce.kanbanStateChange("UpdateKanbanCard", JSON.stringify(jsonPackage));
			} else {
				glueforce.kanbanStateChange("MoveKanbanCard", JSON.stringify(jsonPackage));
			}
			tempcardArray = null;
			_LOG && console.log("sending jsonPackage Kanban", jsonPackage);
			jsonPackage = null;
			setTimeout(function () {
				me.assignUserNameOncards();
				// onAdvanceFilterByString call due to filter feature in kanban controller
				me.onAdvanceFilterByString();
			}, 10);
		}
	},
	/**
	 * helper function used by local and remote workspace participants
	 * @pkg third variable is a remote package received on the broadcast channel (unless function called locally, then null)
	 * RETURNS: the model record for this card
	 * @param {Ext.view.KanbanCard}				cmp
	 * @param {Object}							localData
	 * @param {Object}							pkg
	 */
	updateKanbanCardCore: function (cmp, localData, pkg) {
		_LOG && console.log('updateKanbanCardCore');
		var me = this,
		oldZoneid = '',
		oldZoneTitle = '',
		cardState,
		cardOrder,
		caseSyncOn = false,
		meZone = me.getApplication().getController('ZoneController'),
		meMain = me.mainControllerObj,
		zoneStore = Ext.getStore('Zones'),
		defaultitemId,
		matchingStatusZoneRecord,
		defaultZone,
		zoneId;

		if (localData) {
			//global variable to prevent call of update kanban core on kanban hide
			var myKanbanCardStore = Ext.getStore('KanbanCards'),
			myRecord = myKanbanCardStore.getById(localData.GUID);
			if (!myRecord) {
				return console.warn('ERROR: Missing GUID to sync with Force.com....');
			}
			oldZoneid = myRecord.get('ZoneID');
			oldZoneTitle = myRecord.get('ZoneTitle');
			cardState = myRecord.get('State');
			cardOrder = myRecord.get('Order');
			if (localData.State) {
				cardState = localData.State;
			}
			if (localData.Order && !pkg) {
				// myRecord.set('Order', localData.Order);
				cardOrder = localData.Order;
			} else if (pkg && pkg.Order !== undefined) {
				// to manage order on rechiver end
				cardOrder = pkg.Order - 0.5;
			}

			/**Case sync code if user set prefrence with case sync on */
			if (meMain.casesSyncOn && localData.CaseStatus && localData.CaseStatus !== '') {
				matchingStatusZoneRecord = zoneStore.findRecord('ZoneStatus', localData.CaseStatus);
				defaultZone = Ext.ComponentQuery.query('#' + Ext.ux.Config.getDefaultInsertCard())[0].query('zone')[0];
				defaultitemId = defaultZone.getItemId();
				if (!matchingStatusZoneRecord) {
					// to check if default zone exists on board
					matchingStatusZoneRecord = zoneStore.findRecord('ZoneStatus', 'Default');
				}
				if (!matchingStatusZoneRecord) {
					// to check if default zone exists on board
					matchingStatusZoneRecord = zoneStore.findRecord('GUID', defaultitemId);
				}
				if (matchingStatusZoneRecord) {
					zoneId = matchingStatusZoneRecord.data.GUID;
					if (oldZoneid != zoneId) {
						localData.LeavedZoneID = oldZoneid;
						localData.LeavedZoneTitle = oldZoneTitle;
					}
					localData.ZoneID = zoneId;
					if (oldZoneid != zoneId) {
						caseSyncOn = true;
					}
				}
			}
			/**Opportunity sync code if user set prefrence with Opportunity sync on */
			if (meMain.opportunitySyncOn && localData.OpportunityStage && localData.OpportunityStage !== '') {
				matchingStatusZoneRecord = zoneStore.findRecord('ZoneOpportunityStage', localData.OpportunityStage);
				defaultZone = Ext.ComponentQuery.query('#' + Ext.ux.Config.getDefaultInsertCard())[0].query('zone')[0];
				defaultitemId = defaultZone.getItemId();
				if (!matchingStatusZoneRecord) {
					// to check if default zone exists on board
					matchingStatusZoneRecord = zoneStore.findRecord('ZoneOpportunityStage', 'Default');
				}
				if (!matchingStatusZoneRecord) {
					// to check if default zone exists on board
					matchingStatusZoneRecord = zoneStore.findRecord('GUID', defaultitemId);
				}
				if (matchingStatusZoneRecord) {
					zoneId = matchingStatusZoneRecord.data.GUID;
					if (oldZoneid != zoneId) {
						localData.LeavedZoneID = oldZoneid;
						localData.LeavedZoneTitle = oldZoneTitle;
					}
					localData.ZoneID = zoneId;
					if (oldZoneid != zoneId) {
						caseSyncOn = true;
					}
				}
			}
			if (parseInt(localData.HarveyBall) < 2) {
				localData.HarveyBall = 0;
			}
			Ext.apply(myRecord.data, {
				ZoneID: localData.ZoneID ? localData.ZoneID : oldZoneid,
				LeavedZoneID: localData.LeavedZoneID ? localData.LeavedZoneID : oldZoneid,
				Order: cardOrder,
				State: cardState,
				Top: 2035, // default Top
				Left: 2000, // default Left
				X: 0, // Default X
				Y: 35, // Default Y
				DurationUnits: localData.DurationUnits,
				ValueStreamCardLink: localData.ValueStreamCardLink,
				JSONData: localData.JSONData ? localData.JSONData : '{}',
				JSONDefinition: localData.JSONDefinition,
				Extensions: localData.Extensions ? localData.Extensions : {},
				Opportunity: localData.Opportunity,
				Account: localData.Account,
				OpportunityName: localData.OpportunityName,
				OpportunityStage: localData.OpportunityStage,
				AccountName: localData.AccountName,
				Contact: localData.Contact,
				ContactName: localData.ContactName,
				CaseID: localData.CaseID,
				CaseSubject: localData.CaseSubject,
				CaseStatus: localData.CaseStatus,
				CasePriority: localData.CasePriority,
				TemplateID: localData.TemplateID,
				Description: localData.Description,
				OnBudget: localData.OnBudget,
				OnQuality: localData.OnQuality,
				OnTime: localData.OnTime,
				Color: localData.Color,
				DueDate: new Date(localData.DueDate),
				StartDate: new Date(localData.StartDate),
				ValueStreamLinkID: localData.ValueStreamLinkID,
				ValueStreamLinkBoardType: localData.ValueStreamLinkBoardType,
				HarveyBall: localData.HarveyBall,
				Name: localData.Name,
				Title: localData.Title,
				EstimatedDuration: localData.EstimatedDuration,
				Priority: parseInt(localData.Priority, 10),
				SmallPhotoUrl: localData.SmallPhotoUrl,
				UrlLink: localData.UrlLink,
				MCForceID: localData.MCForceID,
				SWForceID: localData.SWForceID,
				ZoneForceID: localData.ZoneForceID,
				ValueStreamCardLinkName: localData.ValueStreamCardLinkName,
				ValueStreamLinkIDName: localData.ValueStreamLinkIDName,
				Point: localData.Point,
				EffortRemaining: localData.EffortRemaining,
				AcceptanceCriteria: localData.AcceptanceCriteria,
				CardID: localData.CardID
			});
			// myRecord.set('Order', localData.Order);
			myRecord = me.getColumnHierarchical(myRecord);
			/** broadcast kanban sticker
			 * get Sticker if @Pkg found this is object which send from Kanban State change call from force.com
			 */
			if (pkg) {
				myKanbanCardStore.setSorters([]);
				myKanbanCardStore.sort('Order', 'ASC'); // sort by Order to manage Order on broadcast end
				glueforce.getKanbanCardStickers([myRecord.get('ForceID')], function (successresult) {
					_LOG && console.log('getKanbanCardStickers', successresult);
					if (successresult.length) {
						if (me.newPostOverlay && Ext.getCmp('cardCmpForceId').getValue() == myRecord.get('ForceID')) {
							var stickerStore = Ext.getStore('AllStickers'),
							index,
							dataSticker,
							i;
							me.selectedStickerArray = [];
							for (i = 0; i < successresult.length; i++) {
								dataSticker = stickerStore.findRecord('id', successresult[i].Id);
								if (dataSticker) {
									index = stickerStore.indexOf(dataSticker);
									me.selectedStickerArray.push(dataSticker.data);
									me.getCardAllStickerView().select(index, true);
								}
							}
						}
						myRecord.set('AllSticker', successresult);
						setTimeout(function () {
							me.assignUserNameOncards();
							// onAdvanceFilterByString call due to filter feature in kanban controller
							me.onAdvanceFilterByString();
						}, 100);
					} else {
						myRecord.set('AllSticker', []);
						setTimeout(function () {
							me.assignUserNameOncards();
							// onAdvanceFilterByString call due to filter feature in kanban controller
							me.onAdvanceFilterByString();
						}, 100);
					}

				});
			}

			// set the owner small photo url only if change owner of card
			if (localData.OwnerID && myRecord.get('OwnerID') != localData.OwnerID) {
				myRecord.set('OwnerID', localData.OwnerID);
			}
			var ZoneCmp;
			if (localData.ZoneID) {
				ZoneCmp = Ext.ComponentQuery.query('#' + localData.ZoneID)[0];
				if (ZoneCmp && ZoneCmp.down('#zoneDataview')) {
					ZoneCmp.down('#zoneDataview').refresh();
					/***
					 * Update card limit on zone,Master Container and SwimLane
					 * @param {dataview}			ZoneCmp.down('#zoneDataview')
					 * @param {leave zone Id}		localData.ZoneID
					 */
					ZoneCmp.fireEvent('verticalcompress', ZoneCmp.down('#zoneDataview'));
				}
			}

			if (localData.ZoneID) {
				myRecord.set('ZoneTitle', meZone.getZoneTitleForAlert(localData.ZoneID));
			}
			if (localData.LeavedZoneID) {
				myRecord.set('LeavedZoneTitle', meZone.getZoneTitleForAlert(localData.LeavedZoneID));
			}
			_LOG && console.log('updateKanbanCardCore--myRecord-->', myRecord);
			/** filter data after adding Object in Store If board in Filter mode*/
			// if (me.searchPickerOverlay && Ext.getCmp('filterSearchField') && Ext.getCmp('filterSearchField').getValue()) {
			// Ext.getCmp('filterSearchField').fireEvent('keyup', Ext.getCmp('filterSearchField'));
			// }
			myKanbanCardStore.sync();
			if (caseSyncOn) {
				me.kanbancardBulkArray.push(myRecord.getData());
				// record to force.com if Zone ID missing during case sync with default or top/left zone
				me.getApplication().fireEvent('updatebulkkanban', me);
			}
			if (pkg) {
				setTimeout(function () {
					me.assignUserNameOncards();
					// onAdvanceFilterByString call due to filter feature in kanban controller
					me.onAdvanceFilterByString();
				}, 10);
			}
			return myRecord;
		}
	},
	/**
	 * triggered by user clicking delete button or otherwise indicating a kanban card to delete with gestures
	 * the 'core' version of same function is factored out because when executing remotely triggered orders,
	 * some actions do not have to be taken (e.g. rebroadcast of the event and updates to force.com)
	 * @param {Ext.view.Kanbancard}				thiskanbancard
	 * @param {Object}							options
	 * @param {Ext.Event}						e
	 */
	deleteKanbanCardCommand: function (thiskanbancardrecord, options, e) {
		_LOG && console.log('deleteKanbanCardCommand');
		var myOldKanbanCardRecord = this.deleteKanbanCardCore(thiskanbancardrecord, options, e),
		jsonPackage,
		mySavedIDAry = [];

		jsonPackage = {
			GUID: (myOldKanbanCardRecord.mySavedGUID), // send internal GUID
			Id: (myOldKanbanCardRecord.mySavedForceId), // send core ForceID
			ZoneID: (myOldKanbanCardRecord.ZoneID), // send core ForceID
			TaskComments: (myOldKanbanCardRecord.TaskComments) // send core ForceID
		};
		// delete kanban squence Before card delete
		glueforce.kanbanStateChange('DeleteKanbanCard', JSON.stringify(jsonPackage));

		// check to see if the force.com ID is known; if not, this zone was just created during the session
		// this assumes a full reload is done after every save/upsert to force.com, otherwise the ForceID will not be set
		if (myOldKanbanCardRecord.mySavedForceId !== "") {
			// force.com uses the GUID as an External ID to do an upsert; that's why we don't send ForceId
			mySavedIDAry.push(myOldKanbanCardRecord.mySavedGUID);
			glueforce.deleteKanbanCard(mySavedIDAry);
		}
	},
	/**
	 * helper function for the deleteKanbanCardCommand() function above
	 * USAGE: if you need to delete a kanban card, but NOT send out a broadcast use this rather than the above
	 * (e.g. if you are implementing a remote delete event and don't want to cause echos)
	 * @param {Ext.view.Kanbancard}				thiskanbancard
	 * @param {Ext.event.Event}					e
	 * @param {Object}							eOpt
	 */
	deleteKanbanCardCore: function (thiskanbancardrecord, e, eOpt) {
		_LOG && console.log('deleteKanbanCardCore');
		var me = this,
		undoStore = Ext.getStore('UndoRecord'),
		tempcardArray = [];
		//remove from local storage
		var idSet = {
			mySavedGUID: '',
			mySavedForceId: '',
			ZoneID: '',
			TaskComments: ''
		};
		idSet.mySavedGUID = thiskanbancardrecord.get('GUID');
		/** we save this since we destroy the record below */
		idSet.mySavedForceId = thiskanbancardrecord.get('ForceID');
		idSet.ZoneID = thiskanbancardrecord.get('ZoneID');
		idSet.TaskComments = thiskanbancardrecord.get('TaskComments');
		var myKanbanCardStore = Ext.getStore('KanbanCards');
		if (thiskanbancardrecord) {
			myKanbanCardStore.remove(thiskanbancardrecord);
			myKanbanCardStore.sync();
		}
		if (e !== "BulkDelete") {
			/**
			 * Add kanbanCard Record in undo store
			 * Store record for Revert card record
			 */
			tempcardArray.push('DeleteKanbanCard', thiskanbancardrecord.data);
			if (undoStore.getData().length < Ext.ux.Config.getUndoLimit()) {
				undoStore.add({
					KanbanCardRecord: tempcardArray
				});
			} else {
				undoStore.removeAt(0);
				undoStore.add({
					KanbanCardRecord: tempcardArray
				});
			}
		}

		/**
		 * store used for managing cards at the time of filter
		 * filter data after adding Object in Store If board in Filter mode
		 */
		// if (me.searchPickerOverlay && Ext.getCmp('filterSearchField') && Ext.getCmp('filterSearchField').getValue()) {
		// Ext.getCmp('filterSearchField').fireEvent('keyup', Ext.getCmp('filterSearchField'));
		// }
		/**
		 * Delete Dependency when card get deleted
		 **/
		var dependencyStore = Ext.getStore('DependencyKanabanCards');
		dependencyStore.filter('FromId', idSet.mySavedForceId);
		Ext.Array.forEach(dependencyStore.getData().items, function (recordDependency) {
			dependencyStore.remove(recordDependency);
		});
		dependencyStore.clearFilter();
		dependencyStore.filter('To', idSet.mySavedForceId);
		Ext.Array.forEach(dependencyStore.getData().items, function (recordDependency) {
			dependencyStore.remove(recordDependency);
		});
		dependencyStore.clearFilter();
		/**@pankaj changes */
		if (idSet.ZoneID) {
			var ZoneCmp = Ext.ComponentQuery.query('#' + idSet.ZoneID)[0];
			if (ZoneCmp && ZoneCmp.down('#zoneDataview')) {
				/***
				 * Update card limit on zone,Master Container and SwimLane
				 * @param {dataview}			ZoneCmp.down('#zoneDataview')
				 * @param {leave zone Id}		localData.ZoneID
				 */
				ZoneCmp.down('#zoneDataview').refresh();
			}
		}
		/**@pankaj changes End*/
		me.assignUserNameOncards();
		// onAdvanceFilterByString call due to filter feature in kanban controller
		me.onAdvanceFilterByString();

		return idSet;
	},
	/**
	 * called when search button tapped on Assign a user / owner pop up
	 * @param {Ext.controller.KanbanCardController}				me
	 * @param {me.assignUserOverlay}							overlay
	 * @param {Ext.field.searchfield}							searchValue
	 */
	searchAllUsersBtnTap: function (me, overlay, searchValue) {
		_LOG && console.log('searchAllUsersBtnTap');
		var searchString = searchValue.getValue();
		if (!searchString) {
			searchString = "";
		}
		me.searchString_allUser = searchString;
		me.offsetSize_allUser = 0;
		overlay && overlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		var bottomToolbar = overlay.getComponent('assignOwnerBottomToolbar'),
		prevBtn = bottomToolbar.getComponent('allUsersPrevBtn'),
		nextBtn = bottomToolbar.getComponent('allUsersNextBtn');
		me.mainControllerObj.getAllUsers(me.offsetSize_allUser, me.searchString_allUser, overlay, prevBtn, nextBtn);
	},

	/**
	 * called to set badge text on card to show number of comments also saving values to local record
	 * @param {Ext.model.KanbanCard}			data
	 */
	updateKanbanCardComments: function (data) {
		_LOG && console.log('updateKanbanCardComments');
		var me = this,
		forceid = data.ForceID,
		store = Ext.getStore('KanbanCards');
		if (!forceid) {
			return;
		}
		glueforce.getKanbanCardChatterStats([forceid], function (ret) {
			_LOG && console.log('getKanbanCardChatterStats ', ret);
			if (ret.length) {
				var kanbanRec = store.findRecord('ForceID', forceid),
				objectData;
				Ext.Array.forEach(ret, function (ChatterRec) {
					if (kanbanRec) {
						if (kanbanRec.data.ChatterComments != ChatterRec.Comments) {
							kanbanRec.set('ChatterComments', ChatterRec.Comments);
							kanbanRec.set('Changes', ChatterRec.Changes);
							store.sync();
							objectData = {
								'Id': kanbanRec.data.Id,
								'GUID': kanbanRec.data.GUID,
								'TaskComments': kanbanRec.data.TaskComments,
								'ChatterComments': ChatterRec.Comments
							};
							glueforce.kanbanStateChange('NewChatterComments', JSON.stringify(objectData));
						}
						// onAdvanceFilterByString call due to filter feature in kanban controller
						me.onAdvanceFilterByString();
					}
				});
			}
			return true;
		});
	},
	/**
	 * check localstorage is working or not and it's return true or  false
	 */
	storageEnabled: function () {
		try {
			localStorage.setItem("__test", "data");
		} catch (e) {
			if (/QUOTA_?EXCEEDED/i.test(e.name)) {
				return false;
			}
		}
		return true;
	},
	/**
	 * called to show all tasks in short in a pop up when tapped on task icon of card
	 * @include class {Ext.ux.TaskOverList}
	 * @param {Ext.model.KanbanCard value}			forceid
	 * @param {Ext.Buuton}							showCmp
	 */
	getAllTaskOnMouseOver: function (forceid, showCmp) {
		_LOG && console.log('getAllTaskOnMouseOver');
		var me = this,
		cuurentDate,
		activeDate,
		overlay,
		storeTask = Ext.getStore('TaskListArray');
		if (Ext.getCmp('TaskOverListPnl')) {
			Ext.getCmp('TaskOverListPnl').destroy();
		}
		storeTask.removeAll();
		overlay = Ext.create('Ext.ux.TaskOverList', {
				element: showCmp,
				width: 330,
				margin: '-3px 0 0 50px',
				items: [{
						xtype: 'list',
						flex: 1,
						scrollable: {
							direction: 'vertical',
							directionLock: true
						},
						scrollToTopOnRefresh: false,
						store: 'TaskListArray',
						cls: 'taskListOverlayCls',
						disableSelection: true,
						itemHeight: 40,
						itemTpl: new Ext.XTemplate('<tpl><table width="100%" style="font-size: 10px;height:38px;background-color:{[this.getColorValidate(values.ActivityDate,values.Status)]}">' + '<tr>' + '<td width="5%" style="padding: 4px"><img title="{[Ext.htmlEncode(values.ownerName)]}" style="height:20px;width:20px;margin-right: 5px;" src="{[RealTimeKanbanBoard.app.getApplication().getController("MainController").getOwnerImgZoneViewList(values.OwnerId,\'htm\')]}"/></td>' +
							'<td width="25%" style="padding: 4px">{Status:htmlEncode}</td>' +
							'<td width="45%" style="padding: 4px;word-break: break-all;">{[Ext.htmlEncode(values.Subject)]}</td>' +
							'<td width="20%" style="padding: 4px;">{ActivityDate:date("d/M/Y")}</td>' +
							'<td width="5%"><div class="{[this.getChekBoxCls(values.Status)]}"></div></td>' +
							'<td width="5%" style="padding: 4px"><div id="Edit" title="Edit" class="editLog"></div></td>' +
							'</tr>' +
							'</table></tpl>', {
							getColorValidate: function (activitydate, status) {
								if (status == "Completed") {
									return '#D7FCB1';
								}
								cuurentDate = Ext.Date.format(new Date(), 'm/d/Y');
								activeDate = Ext.Date.format(activitydate, 'm/d/Y');
								if (new Date(activeDate) < new Date(cuurentDate)) {
									return '#ffdcbd';
								} else
									if (cuurentDate == activeDate) {
										return '#fff8bd';
									}
								return '#fff';
							},
							/**
							 *@return {string}  css class according to Task status
							 *@author BM on 05-Dec-2016
							 */
							getChekBoxCls: function (statuscls) {
								if (statuscls == "Completed") {
									return 'checkedbox';
								}
								return 'uncheckbox';
							}
						}),
						listeners: {
							itemtap: function (view, index, target, record, e) {
								var dom = Ext.get(e.target);
								if (dom && dom.hasCls('editLog')) {
									Ext.getCmp('TaskOverListPnl').destroy();
									me.taskEditOverlay(record.data);
									return false;
								}

								if (dom && (dom.hasCls('checkedbox') || dom.hasCls('uncheckbox'))) {
									// if (dom.hasCls('uncheckbox')) {
									// record.set('Status', 'Completed');
									// } else {
									// record.set('Status', 'Not Started');
									// }
									overlay && overlay.setMasked({
										xtype: 'loadmask',
										message: 'Loading...'
									});
									me.delayedTask = new Ext.util.DelayedTask(
											function () {
											overlay && overlay.setMasked(false);
											delete me.delayedTask;
										}, me);
									me.delayedTask.delay(400);

									me.newPostEditTaskBtnTap(null, null, null, {
										priorityTask: record.get('Priority'),
										assignUserTask: record.get('OwnerId'),
										SubjectTask: record.get('Subject'),
										StatusTask: dom.hasCls('uncheckbox') ? 'Completed' : 'Not Started',
										dueDateTask: record.get('ActivityDate'),
										WhatId: record.get('WhatId'),
										TaskId: record.get('Id'),
										descriptionTaskTask: record.get('Description') || ''
									});
									// return false;
								}
							}
						}
					}
				]
			});
		if (forceid) {
			glueforce.getTasks(forceid, function (onSuccess) {
				_LOG && console.log('getTasks ', onSuccess);
				// load task on initialize
				if (onSuccess.length) {
					Ext.Array.forEach(onSuccess, function (Convertdate) {
						if (Convertdate.ActivityDate) {
							Convertdate.ActivityDate = new Date(Convertdate.ActivityDate.split('-')[0], Convertdate.ActivityDate.split('-')[1] - 1, Convertdate.ActivityDate.split('-')[2], 00, 00, 00);
							Convertdate.CreatedDate = JSON.parse(Convertdate.CreatedDate);
							storeTask.add(Convertdate);
						}
					});
					if (Ext.getCmp('TaskOverListPnl')) {
						Ext.getCmp('TaskOverListPnl').query('list')[0].setHtml('');
						if (browser) {
							Ext.getCmp('TaskOverListPnl').layout.redrawContainer();
						}
					}
				} else {
					if (Ext.getCmp('TaskOverListPnl')) {
						Ext.getCmp('TaskOverListPnl').query('list')[0].setHtml('<div style="padding: 10px">No Task added</div>');
						Ext.getCmp('TaskOverListPnl').query('list')[0].setStyle('background : #fff !important');
					}
				}
				storeTask.sort([{
							property: 'ActivityDate',
							direction: 'ASC'
						}, {
							property: 'CreatedDate',
							direction: 'ASC'
						}
					]);

			});
		}
	},
	/**
	 * triggered by tOwner icon tao of kanban card
	 * @event kanbancardchattertap
	 *
	 * @param {RealTimeKanbanBoard.view.KanbanDataView} me
	 * @param {RealTimeKanbanBoard.model.KanbanCard}    record
	 * @param {Number}                                  index
	 * @param {Ext.event.Touch}                         event
	 */
	chatterKanbanCardCommand: function (me, record, index, event) {
		_LOG && console.log('chatterKanbanCardCommand');
		// @method caought in Ext.controller.MainController
		/* this.mainControllerObj.showChatter("kanbancard", {
		Id: record.get('ForceID'),
		KanbanRecord: record.data
		}); */
		if (Ext.get(event.target) && Ext.get(event.target).hasCls('owner-img')) {
			if (this.onCheckSecurity() == false) {
				this.allUsersOverlayIconImage(me, record, event);
			}
		} else {
			this.mainControllerObj.showChatter("kanbancard", {
				Id: record.get('ForceID'),
				KanbanRecord: record.data
			});
		}
	},
	/**
	 * applying main settings of Project Board to task list, if not allowed then not allowing user to edit task
	 * @param {uniqueId}				subscriberID
	 */
	getSettingsEditAuthority: function (subscriberID) {
		_LOG && console.log('getSettingsEditAuthority');
		if (this.mainControllerObj.glueConfigData.valueStreamOwner == this.mainControllerObj.glueConfigData.UserID) {
			return '20px';
		}
		return '0px';
	},
	/**
	 * triggered when tapped on link icon on kanban card
	 * appending project board + card id(if any) to BaseURL to generate a new one
	 * hence navigating to new generated URL by Board type
	 * @param {Ext.view.KanbanCard}				card
	 */
	onLinkToIconTap: function (component, record) {
		_LOG && console.log('onLinkToIconTap');
		// var record = card.getRecord().data;
		var meMain = this.mainControllerObj,
		me = this,
		kanbanUrl;
		// generate URL of card to send the chatter feed message, but without appending forceid, it will be concatenated at force.com end.
		kanbanUrl = meMain.glueConfigData.BaseURL;
		switch (record.ValueStreamLinkBoardType) {
		case "Kanban Board":
			kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
			break;
		case "Plan Board":
			kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
			break;
		case "Whiteboard":
			kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
			break;
		case "DashBoard":
			kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
			break;
		case "Portfolio View":
			kanbanUrl += meMain.glueConfigData.PortfolioViewURL.replace('/', '') + '?Id=';
			break;
		case "UberBoard":
			//change
			var storeAllValueStreams = Ext.getStore('AllValueStreams'),
			recordData,
			mainId;
			if (record.ValueStreamLinkID) {
				recordData = storeAllValueStreams.findRecord('Id', record.ValueStreamLinkID);
				if (recordData) {
					mainId = recordData.data.Lean__ProjectRoom__c;
					kanbanUrl += meMain.glueConfigData.pageGanttView.replace('/', '') + '?fid=' + Ext.htmlEncode(mainId) + '&btype=projectgantt&Id=';
					kanbanUrl += Ext.htmlEncode(record.ValueStreamLinkID);
					if (record.ValueStreamCardLink) {
						kanbanUrl = kanbanUrl + '&cardid=' + Ext.htmlEncode(record.ValueStreamCardLink);
					}
					window.open(me.sanitizURL(kanbanUrl), '_blank');
				}
				/*else {
				//get all value streams record
				glueforce.getValueStreamsOnLoad(function (onSuccess) {
				_LOG && console.log('getValueStreamsOnLoad ', onSuccess);
				var v;
				if (onSuccess.length) {
				// adding blank item in store first as None
				storeAllValueStreams.add({
				'Id': '',
				'Lean__ProjectRoom__c': '',
				'Name': 'None',
				'Lean__ProjectRoom__r_Id': '',
				'Lean__ProjectRoom__r_Name': '',
				'Lean__BoardType__c': ''
				});
				for (v = 0; v < onSuccess.length; v++) {
				if (onSuccess[v].Lean__ProjectRoom__r) {
				storeAllValueStreams.add(onSuccess[v]);
				}
				}
				recordData = storeAllValueStreams.findRecord('Id', record.ValueStreamLinkID);
				mainId = recordData.data.Lean__ProjectRoom__c;
				kanbanUrl += meMain.glueConfigData.pageGanttView.replace('/', '') + '?fid=' + Ext.htmlEncode(mainId) + '&btype=projectgantt&Id=';
				kanbanUrl += Ext.htmlEncode(record.ValueStreamLinkID);
				if (record.ValueStreamCardLink) {
				kanbanUrl = kanbanUrl + '&cardid=' + Ext.htmlEncode(record.ValueStreamCardLink);
				}
				window.open(me.sanitizURL(kanbanUrl), '_blank');
				}
				});
				}*/
			}

			break;
		default:
			kanbanUrl += meMain.glueConfigData.VisualKanbanURL.replace('/', '') + '?Id=';
			break;
		}

		if (record.ValueStreamLinkID) {
			if (record.ValueStreamLinkBoardType !== "UberBoard") {
				kanbanUrl += Ext.htmlEncode(record.ValueStreamLinkID);
				if (record.ValueStreamCardLink) {
					kanbanUrl = kanbanUrl + '&cardid=' + Ext.htmlEncode(record.ValueStreamCardLink);
				}
				if (meMain.glueConfigData.valueStreamID == record.ValueStreamLinkID) {
					if (record.ValueStreamCardLink) {
						meMain.automPanBoardWithCardIdUrl(record.ValueStreamCardLink);
					}
				} else {
					window.open(me.sanitizURL(kanbanUrl), '_blank');
				}
			}
		} else {
			meMain.alertMsgBox('No project board linked with this card !');
		}
	},
	/**
	 * Search card overlay from Right/top buton @searchicon in main toolbar
	 * @param {Ext.Button} 			btn
	 * @param {Ext.Event}			e
	 */
	onSearchHideBtn: function (btn, e) {
		_LOG && console.log('onSearchHideBtn');
		var me = this;
		me.searchOverlayToggle = false;
	},
	/**
	 * @var {toggle switch for overlay hide and show} searchOverlayToggle
	 */
	searchOverlayToggle: false,
	updateFilterData: false,
	/**
	 *Search card overlay from Right/top buton @searchicon in main toolbar
	 * @param {Ext.Button}				btn
	 * @param {Ext.Event}				e
	 */
	onSearchBtn: function (btn, e) {
		_LOG && console.log('onSearchBtn');
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		kanbanStore = Ext.getStore('KanbanCards'),
		categoryFilterList,
		allUsers = Ext.getStore('AllUsers'),
		userList,
		cardsRequireFilterConfirmation,
		categoryList,
		filterReord,
		record,
		checkFilterBy;
		// Deselct all card which was selected for multi feature.
		me.deselectMultiCard();
		if (!me.searchPickerOverlay) {
			me.searchPickerOverlay = Ext.Viewport.add({
					xtype: 'panel',
					showAnimation: {
						type: 'fadeIn',
						duration: 250
					},
					left: 0,
					width: 370,
					height: 410,
					hideAnimation: {
						type: 'fadeOut',
						duration: 250
					},
					scrollable: null,
					itemId: 'filterOverlayLayout',
					hidden: true,
					layout: 'vbox',
					style: {
						'background-color': '#FFFFFF'
					},
					items: [{
							xtype: 'searchfield',
							itemId: 'filterSearchField',
							minHeight: '1.5em',
							ui: 'searchFldClsFilter',
							clearIcon: false,
							placeHolder: 'Filter by name',
							listeners: {
								keyup: function (fld, e, eOpts) {
									var queryString = fld.getValue(),
									filterStore = Ext.getStore('FilterData');
									if (filterStore.getData().length) {
										filterStore.first().set('FilterString', Ext.String.escapeRegex(queryString));
									} else {
										filterStore.add({
											FilterString: queryString
										});
									}
									cardsRequireFilterConfirmation = glueforce.getWorkspaceConfig().cardsRequireFilterConfirmation;
									checkFilterBy = (cardsRequireFilterConfirmation > 0 && kanbanStore.getData().items.length >= cardsRequireFilterConfirmation);
									if (checkFilterBy && e.event.keyCode === 13) {
										// onAdvanceFilterByString call due to filter feature in kanban controller
										me.onAdvanceFilterByString(function () {
											var advanceView = me.searchPickerOverlay.down('advanceFilter');
											advanceView.fireEvent('verticalcompress', me);
										});
										fld.focus('', 20);
									} else if (!checkFilterBy && queryString) {
										me.onAdvanceFilterByString(function () {
											var advanceView = me.searchPickerOverlay.down('advanceFilter');
											advanceView.fireEvent('verticalcompress', me);
										});
										fld.focus('', 20);
									} else if (!queryString) {
										me.onAdvanceFilterByString(function () {
											var advanceView = me.searchPickerOverlay.down('advanceFilter');
											advanceView.fireEvent('verticalcompress', me);
										});
										fld.focus('', 20);
									}

								}
							}
						}, {
							xtype: 'advanceFilter'
						}
					]
				});

		}
		if (me.searchPickerOverlay.isHidden() && !me.searchOverlayToggle) {
			me.searchPickerOverlay.showBy(btn);
			me.assignUserNameOncards();
			me.createDynamicAccordianList(me.searchPickerOverlay);
		} else {
			me.searchPickerOverlay.hide();
		}
		// flip/toggle Variable to handel hide and show eith same button(search button) switch.
		me.searchOverlayToggle = !me.searchOverlayToggle;
	},
	/**
	 * Update kanban card in bulk if to manage case sync on board
	 * @var require {me.kanbancardBulkArray}
	 */
	updateKanbanCardAuto: function () {
		_LOG && console.log('updateKanbanCardAuto');
		var me = this,
		meMain = me.mainControllerObj,
		jsonPkgArray = [],
		zoneStore = Ext.getStore('Zones'),
		jsonPackage,
		kanbanFinalRecord,
		kanbanUrl;
		if (me.kanbancardBulkArray.length) {
			// generate URL of card to send the chatter feed message, but without appending ForceID, it will be concatenated at force.com end.
			kanbanUrl = meMain.glueConfigData.BaseURL;
			kanbanUrl += meMain.glueConfigData.KanbanBoardURL.replace('/', '') + '?Id=';
			kanbanUrl += Ext.htmlEncode(meMain.glueConfigData.valueStreamID);
			kanbanUrl = kanbanUrl + '&cardid=';
			// don't need to wait for save event below; we know something has changed, so broadcast it
			// NOTE: we round the numbers to make sure Visualforce AJAX remote calls work properly and JSON deserialization to Java "Integer" on server
			Ext.Array.forEach(me.kanbancardBulkArray, function (record) {
				jsonPackage = {
					Id: record.Id,
					GUID: record.GUID,
					Title: record.Title,
					Name: record.Name,
					Width: record.Width,
					Height: record.Height,
					Top: record.Top,
					Left: record.Left,
					Bottom: record.Bottom,
					X: record.X,
					Y: record.Y,
					Color: record.Color,
					TemplateID: record.TemplateID,
					// CmpID: record.CmpID,
					ZoneID: record.ZoneID,
					ZoneTitle: record.ZoneTitle,
					LeavedZoneID: record.LeavedZoneID,
					LeavedZoneTitle: record.LeavedZoneTitle,
					State: record.State,
					EstimatedDuration: record.EstimatedDuration,
					DurationUnits: record.DurationUnits,
					DueDate: new Date(record.DueDate),
					Priority: record.Priority,
					HarveyBall: record.HarveyBall,
					OwnerID: record.OwnerID,
					Description: record.Description,
					ValueStreamCardLink: record.ValueStreamCardLink,
					ValueStreamLinkID: record.ValueStreamLinkID,
					Account: record.Account,
					Opportunity: record.Opportunity,
					AccountName: record.AccountName,
					OpportunityName: record.OpportunityName,
					OpportunityStage: record.OpportunityStage,
					Contact: record.Contact,
					Order: record.Order,
					ContactName: record.ContactName,
					CaseID: record.CaseID,
					CaseSubject: record.CaseSubject,
					CaseStatus: record.CaseStatus,
					CasePriority: record.CasePriority,
					SmallPhotoUrl: record.SmallPhotoUrl,
					StartDate: new Date(record.StartDate),
					KanbanUrl: kanbanUrl,
					ValueStream: meMain.glueConfigData.valueStreamID,
					JSONDefinition: Ext.String.htmlDecode(record.JSONDefinition),
					JSONData: record.JSONData,
					OnBudget: record.OnBudget,
					OnQuality: record.OnQuality,
					OnTime: record.OnTime,
					ItemType: 'KC',
					BoardType: 'Kanban Board',
					UrlLink: record.UrlLink,
					MCForceID: record.MCForceID,
					SWForceID: record.SWForceID,
					ZoneForceID: record.ZoneForceID,
					Point: record.Point,
					EffortRemaining: record.EffortRemaining,
					AcceptanceCriteria: record.AcceptanceCriteria,
					CardID: record.CardID,
					ValueStreamLinkBoardType: record.ValueStreamLinkBoardType,
					ValueStreamCardLinkName: record.ValueStreamCardLinkName,
					ValueStreamLinkIDName: record.ValueStreamLinkIDName
				};

				var mykanbanid = record.ForceID.substr(0, 15),
				zoneRec = zoneStore.findRecord('GUID', record.ZoneID),
				leavezoneRec = zoneStore.findRecord('GUID', record.LeavedZoneID),
				myzoneid,
				myleavezoneid,
				swimlanLeftId,
				swimlaneRecodLeft,
				masterContainerLeftID,
				zoneKanbanActionLeft,
				swimlanEenterId,
				swimlaneRecod,
				masterContainerEnterID,
				zoneKanbanAction,
				swimlaneStore = Ext.getStore('SwimlaneStore');
				// Manage zone kanban action dduring the bulk update
				if (leavezoneRec) {
					myleavezoneid = leavezoneRec.get('ForceID');
					swimlanLeftId = leavezoneRec.get('Swimlane');
					swimlaneRecodLeft = swimlaneStore.findRecord('ForceID', swimlanLeftId);
					masterContainerLeftID = swimlaneRecodLeft.get('MasterContainer');
					jsonPackage.LeavedZoneTitle = leavezoneRec.get('Name');
					// manage other Master container record
					if (zoneRec) {
						myzoneid = zoneRec.get('ForceID');
						swimlanEenterId = zoneRec.get('Swimlane');
						jsonPackage.ZoneTitle = zoneRec.get('Name');
						swimlaneRecod = swimlaneStore.findRecord('ForceID', swimlanEenterId);
						masterContainerEnterID = swimlaneRecod.get('MasterContainer');
					}

					zoneKanbanActionLeft = {
						Action: 'Left Zone',
						KanbanID: mykanbanid,
						ZoneID: myleavezoneid,
						OtherZoneID: myzoneid || '',
						SwimlaneID: swimlanLeftId,
						OtherSwimlaneID: swimlanEenterId || '',
						MasterContainerID: masterContainerLeftID,
						OtherMasterContainerID: masterContainerEnterID || '',
						VSID: meMain.glueConfigData.valueStreamID,
						SessionID: meMain.glueConfigData.SessionID
					};
					glueforce.enterTheZone(zoneKanbanActionLeft, function (onSuccess) {
						//do nothing
					});
				}
				if (zoneRec) {
					myzoneid = zoneRec.get('ForceID');
					swimlanEenterId = zoneRec.get('Swimlane');
					swimlaneRecod = swimlaneStore.findRecord('ForceID', swimlanEenterId);
					masterContainerEnterID = swimlaneRecod.get('MasterContainer');
					jsonPackage.ZoneTitle = zoneRec.get('Name');

					// manage other Master container record
					if (leavezoneRec) {
						myleavezoneid = leavezoneRec.get('ForceID');
						swimlanLeftId = leavezoneRec.get('Swimlane');
						jsonPackage.LeavedZoneTitle = leavezoneRec.get('Name');
						swimlaneRecodLeft = swimlaneStore.findRecord('ForceID', swimlanLeftId);
						masterContainerLeftID = swimlaneRecodLeft.get('MasterContainer');
					}

					zoneKanbanAction = {
						Action: 'Entered Zone',
						KanbanID: mykanbanid,
						ZoneID: myzoneid,
						OtherZoneID: myleavezoneid || '',
						SwimlaneID: swimlanEenterId,
						OtherSwimlaneID: swimlanLeftId || '',
						MasterContainerID: masterContainerEnterID,
						OtherMasterContainerID: masterContainerLeftID || '',
						VSID: meMain.glueConfigData.valueStreamID,
						SessionID: meMain.glueConfigData.SessionID
					};
					glueforce.enterTheZone(zoneKanbanAction, function (onSuccess) {
						//do nothing
					});
				}
				// Update history of tree kanban card column
				jsonPackage.MCForceID = masterContainerEnterID;
				jsonPackage.SWForceID = swimlanEenterId;
				jsonPackage.ZoneForceID = myzoneid;
				kanbanFinalRecord = {
					'vsId': meMain.glueConfigData.valueStreamID,
					'verb': "MoveKanbanCard",
					'sessionID': meMain.glueConfigData.SessionID,
					'someJSONdata': JSON.stringify(jsonPackage)
				};
				jsonPackage = null;
				jsonPkgArray.push(kanbanFinalRecord);

			});
			me.kanbancardBulkArray = [];
			glueforce.manageBulkStreaming(jsonPkgArray, "MoveKanbanCard", function (onSuccess) {
				_LOG && console.log('manageBulkStreaming ', onSuccess);

			});
		}
	},
	/**
	 * add afterlisteners to field
	 * @param {Ext.Component}			fld
	 * @param {Object}					eOpt
	 */
	onInitNewpostSelectFld: function (fld, eOpt) {
		_LOG && console.log('onInitNewpostSelectFld');
		fld.onAfter('change', this.onChangeNewPostStartDateField, fld);
	},
	/**
	 * this methode used for calculation date ,hour ,month,week and year in edit kanban card popup
	 * @param {Ext.filed}				fieldType
	 */
	onChangeNewPostStartDateField: function (fieldType) {
		_LOG && console.log('onChangeNewPostStartDateField');
		/** check calender view btn is disable or not
		 *If disable then no need to calculate estimation days according to start date and Due date.
		 **/

		var me = RealTimeKanbanBoard.app.getApplication().getController('KanbanCardController'),
		durationUnitVals = me.getNewPostDurationUnits().getValue(),
		startDateField = me.getNewPostStartDateField(),
		splitDate,
		kanbanid = Ext.getCmp('cardCmpForceId').getValue(),
		dueDateFields = me.getNewPostDueDateField(),
		startDateFieldValue,
		dueDateFieldsvalue,
		estimationFields = me.getEstimationNumberField(),
		newDueDates,
		setDueDateDiff = new Date(),
		finalDate = new Date(),
		startDateFieldNewCheck;
		if (!kanbanid) {
			me.getNewPostView().down('#estimationEffortRemaining').setValue(estimationFields.getValue());
		}
		if (glueforce.getWorkspaceConfig().DisableCalendarView) {
			return true;
		}
		if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
			if (finalDate.getDay() == 6) {
				finalDate = Ext.Date.add(finalDate, Ext.Date.DAY, 2);
			} else if (finalDate.getDay() == 0) {
				finalDate = Ext.Date.add(finalDate, Ext.Date.DAY, 1);
			}

		}
		//check hide date picker in IE , Safari and Etc Ext.Date.add(new Date(), Ext.Date.DAY, 1)
		if (!me.getNewPostStartDatePickerField().isHidden()) {
			startDateField = me.getNewPostStartDatePickerField();
			if (!startDateField.getValue()) {
				startDateField.setValue(finalDate);
			}
		} else {
			if (!startDateField.getValue()) {
				startDateField.setValue(Ext.Date.format(finalDate, 'Y-m-d'));
			}
		}
		startDateFieldValue = me.getDateTime(startDateField.getValue() || finalDate);
		startDateFieldNewCheck = me.getDateTime(startDateField.getValue() || finalDate);
		startDateField.setLabel('Start Date (' + Ext.Date.format(startDateFieldValue, 'd/M/Y') + ')');

		if (!me.getNewPostDueDatePickerField().isHidden()) {
			dueDateFields = me.getNewPostDueDatePickerField();
			if (!dueDateFields.getValue()) {
				dueDateFields.setValue(new Date());
			}
		} else {
			if (!dueDateFields.getValue()) {
				dueDateFields.setValue(Ext.Date.format(new Date(), 'Y-m-d'));
			}
		}
		dueDateFieldsvalue = me.getDateTime(dueDateFields.getValue());

		if (fieldType.getName() == "DueDate") {
			startDateFieldValue = new Date((startDateFieldValue).toDateString());
			dueDateFieldsvalue = new Date((dueDateFieldsvalue).toDateString());
			switch (durationUnitVals) {
			case 'Minutes':
				newDueDates = Ext.Date.diff(startDateFieldValue, dueDateFieldsvalue, Ext.Date.DAY) + 1;
				newDueDates = (8 * 60) * parseInt(newDueDates, 10);
				setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 1);
				break;
			case 'Days':
				newDueDates = Ext.Date.diff(startDateFieldValue, dueDateFieldsvalue, Ext.Date.DAY) + 1;
				setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 1);
				break;
			case 'Months':
				newDueDates = Ext.Date.diff(startDateFieldValue, Ext.Date.add(dueDateFieldsvalue, Ext.Date.DAY, 1), Ext.Date.MONTH);
				setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.MONTH, 1);
				break;
			case 'Years':
				newDueDates = Ext.Date.diff(startDateFieldValue, Ext.Date.add(dueDateFieldsvalue, Ext.Date.DAY, 1), Ext.Date.YEAR);
				setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.YEAR, 1);
				break;
			case 'Weeks':
				newDueDates = Ext.Date.diff(startDateFieldValue, dueDateFieldsvalue, Ext.Date.DAY) + 1;
				newDueDates = Math.floor(parseInt(newDueDates, 10) / 7);
				if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
					setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 5);
				} else {
					setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 7);
				}

				break;
			case 'Hours':
				newDueDates = Ext.Date.diff(startDateFieldValue, dueDateFieldsvalue, Ext.Date.DAY) + 1;
				newDueDates = 8 * parseInt(newDueDates, 10);
				setDueDateDiff = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 1);
				break;
			default:
				break;
			}
			if (newDueDates < 1) {
				newDueDates = 1;
				switch (durationUnitVals) {
				case 'Months':
					if (setDueDateDiff.getDay() == 6) {
						setDueDateDiff = Ext.Date.add(setDueDateDiff, Ext.Date.DAY, 2);
					} else if (setDueDateDiff.getDay() == 0) {
						setDueDateDiff = Ext.Date.add(setDueDateDiff, Ext.Date.DAY, 1);
					}
					break;
				case 'Years':
					if (setDueDateDiff.getDay() == 6) {
						setDueDateDiff = Ext.Date.add(setDueDateDiff, Ext.Date.DAY, 2);
					} else if (setDueDateDiff.getDay() == 0) {
						setDueDateDiff = Ext.Date.add(setDueDateDiff, Ext.Date.DAY, 1);
					}
					break;
				case 'Days':
					setDueDateDiff = startDateFieldValue;
					break;

				default:
					break;
				}
				if (!me.getNewPostDueDatePickerField().isHidden()) {
					dueDateFields.unAfter('change', me.onChangeNewPostStartDateField, dueDateFields);
					dueDateFields.setValue(setDueDateDiff);
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(setDueDateDiff, 'd/M/Y') + ')');
					dueDateFields.onAfter('change', me.onChangeNewPostStartDateField, dueDateFields);
				} else {
					dueDateFields.setValue(Ext.Date.format(new Date(setDueDateDiff), 'Y-m-d'));
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(new Date(setDueDateDiff), 'd/M/Y') + ')');
				}
			} else {
				if (!me.getNewPostDueDatePickerField().isHidden()) {
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(dueDateFieldsvalue, 'd/M/Y') + ')');
				} else {
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(new Date(dueDateFieldsvalue), 'd/M/Y') + ')');
				}
			}

			if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
				startDateFieldNewCheck = Ext.Date.add(startDateFieldValue, Ext.Date.HOUR, 8);
				for (var count = 1; count <= Ext.Date.diff(startDateFieldValue, dueDateFieldsvalue, Ext.Date.DAY); count++) {
					if (Ext.Date.add(startDateFieldNewCheck, Ext.Date.DAY, count).getDay() == 6 || Ext.Date.add(startDateFieldNewCheck, Ext.Date.DAY, count).getDay() == 0) {
						switch (durationUnitVals) {
						case 'Days':
							newDueDates = newDueDates - 1;
							break;
						case 'Hours':
							newDueDates = newDueDates - 8;
							break;
						default:
							break;
						}

					}
				}
			}
			estimationFields.setValue(newDueDates);
			// me.onChangeNewPostStartDateField(startDateField);
			// return;

		} else {
			if (!estimationFields.getValue()) {
				estimationFields.setValue(1);
			}
			if (estimationFields.getValue() || estimationFields.getValue() == 0) {
				startDateFieldValue = new Date((startDateFieldValue).toDateString());
				switch (durationUnitVals) {
				case 'Minutes':
					newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, Math.ceil(parseInt(estimationFields.getValue(), 10) / (8 * 60)) - 1);
					break;
				case 'Days':
					newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, parseInt(estimationFields.getValue(), 10) - 1);
					break;
				case 'Months':
					newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.MONTH, parseInt(estimationFields.getValue(), 10));
					newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, -1);
					break;
				case 'Years':
					newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.YEAR, parseInt(estimationFields.getValue(), 10));
					newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, -1);
					break;
				case 'Weeks':
					if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
						newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 5 * parseInt(estimationFields.getValue(), 10) - 1);
					} else {
						newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, 7 * parseInt(estimationFields.getValue(), 10) - 1);
					}

					break;
				case 'Hours':
					newDueDates = Ext.Date.add(startDateFieldValue, Ext.Date.DAY, Math.ceil(parseInt(estimationFields.getValue(), 10) / 8) - 1);
					break;
				default:
					break;
				}

				if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
					switch (durationUnitVals) {
					case 'Months':
						if (newDueDates.getDay() == 6) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 2);
						} else if (newDueDates.getDay() == 0) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 1);
						}
						break;
					case 'Years':
						if (newDueDates.getDay() == 6) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 2);
						} else if (newDueDates.getDay() == 0) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 1);
						}
						break;
					case 'Days':
						for (var count = 1; count <= Ext.Date.diff(startDateFieldValue, newDueDates, Ext.Date.DAY); count++) {
							if (Ext.Date.add(startDateFieldValue, Ext.Date.DAY, count).getDay() == 6 || Ext.Date.add(startDateFieldValue, Ext.Date.DAY, count).getDay() == 0) {
								newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 1);
							}
						}
						break;
					default:
						for (var count = 1; count <= Ext.Date.diff(startDateFieldValue, newDueDates, Ext.Date.DAY); count++) {
							if (Ext.Date.add(startDateFieldValue, Ext.Date.DAY, count).getDay() == 6 || Ext.Date.add(startDateFieldValue, Ext.Date.DAY, count).getDay() == 0) {
								newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 1);
							}
						}
						break;
					}
					if (newDueDates.getDay() == 6 || newDueDates.getDay() == 0) {
						newDueDates = Ext.Date.add(newDueDates, Ext.Date.HOUR, 8);
						if (newDueDates.getDay() == 6) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 2);
						} else if (newDueDates.getDay() == 0) {
							newDueDates = Ext.Date.add(newDueDates, Ext.Date.DAY, 1);
						}
					}
				}
				if (!me.getNewPostDueDatePickerField().isHidden()) {
					dueDateFields.unAfter('change', me.onChangeNewPostStartDateField, dueDateFields);
					dueDateFields.setValue(newDueDates);
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(newDueDates, 'd/M/Y') + ')');
					dueDateFields.onAfter('change', me.onChangeNewPostStartDateField, dueDateFields);
				} else {
					dueDateFields.setValue(Ext.Date.format(new Date(newDueDates), 'Y-m-d'));
					dueDateFields.setLabel('Due Date (' + Ext.Date.format(new Date(newDueDates), 'd/M/Y') + ')');
				}

			}
		}
		if (!kanbanid) {
			me.getNewPostView().down('#estimationEffortRemaining').setValue(estimationFields.getValue());
		}
	},
	/**
	 * view navigation on menu item tap on preference
	 * @param {component}							comp
	 * @param {item number}							index
	 */
	editCardMenuItemTap: function (comp, index) {
		_LOG && console.log('editCardMenuItemTap ');
		if ((index === 1 || index === 5 || index === 2 || index === 3) && Ext.getCmp('cardCmpForceId').getValue() == '') {
			return false;
		}
		var taskArray = Ext.getStore('TaskListArray'),
		logTaskArray = Ext.getStore('TaskLogTime');
		logTaskArray.removeAll();
		logTaskArray.add({
			'Subject': 'None',
			'Id': '',
			'OwnerId': '',
			'ActivityDate': new Date().toISOString()
		});
		logTaskArray.add(taskArray.getData().items);

		this.getEditCardLayoutContainer().animateActiveItem(index, {
			type: 'slide',
			direction: 'right'
		});
	},
	/**
	 * view navigation on menu item tap on preference
	 * @param {component}							comp
	 * @param {item number}							index
	 */
	editMultiCardMenuItemTap: function (comp, index) {
		_LOG && console.log('editCardMenuItemTap ');
		this.getEditMultiCardLayoutContainer().animateActiveItem(index, {
			type: 'slide',
			direction: 'right'
		});
	},

	allStickerViewActivate: function () {
		var me = this,
		i,
		stickerStore = Ext.getStore('AllStickers'),
		dataSticker,
		index;
		me.selectedStickerArray = [];
		if (me.getNewPostForceId().getValue()) {
			glueforce.getKanbanCardStickers([me.getNewPostForceId().getValue()], function (stickerRecord) {
				_LOG && console.log('allStickerViewActivate ', stickerRecord);
				for (i = 0; i < stickerRecord.length; i++) {
					dataSticker = stickerStore.findRecord('id', stickerRecord[i].Id);
					if (dataSticker) {
						index = stickerStore.indexOf(dataSticker);
						me.selectedStickerArray.push(dataSticker.data);
						me.getCardAllStickerView().select(index, true);
					}
				}
			});
		}
	},
	/**
	 * change time,budget and quality for status
	 * @param {Ext.view.StausView}				view
	 * @param {Ext.Button}						btn
	 */
	onTimeBtntap: function (view, btn) {
		_LOG && console.log('onTimeBtntap');
		var me = this;
		me.greenPnl = Ext.Viewport.add({
				xtype: 'panel',
				padding: 0,
				left: 0,
				height: 102,
				width: 100,
				defaults: {
					xtype: 'button',
					ui: 'topBarBtn',
					minWidth: 100,
					flex: 1
				},
				modal: true,
				hideOnMaskTap: true,
				hidden: true,
				layout: 'vbox',
				style: 'margin-top: -10px;border-radius: 0px;background: #fff;',
				items: [{
						text: 'Green',
						cls: 'Green',
						listeners: {
							tap: function (dis) {
								btn.setCls('Green btn_down');
								btn.setHtml('Green');
								me.greenPnl.hide();
							}
						}
					}, {
						text: 'Amber',
						cls: 'Amber',
						listeners: {
							tap: function (dis) {
								//btnGreen.removeCls();
								btn.setCls('Amber btn_down');
								btn.setHtml('Amber');
								me.greenPnl.hide();
							}
						}
					}, {
						text: 'Red',
						cls: 'Red',
						listeners: {
							tap: function (dis) {
								btn.setCls('Red btn_down');
								btn.setHtml('Red');
								me.greenPnl.hide();
							}
						}
					}
				],
				listeners: {
					hide: function () {
						if (me.greenPnl) {
							me.greenPnl.destroy(true);
							me.greenPnl = null;
						}
					}
				}
			});
		if (me.greenPnl.isHidden()) {
			setTimeout(function () {
				me.greenPnl.showBy(btn);
			}, 100);
		} else {
			me.greenPnl.hide();
		}

	},

	/**
	 * Get all Log Time when card is edit
	 */
	allLogTime: function () {
		_LOG && console.log('allLogTime');
		var me = this,
		logTime = Ext.getStore('LogTime'),
		totalTime = 0,
		len,
		statusStore = Ext.getStore('StatusLog'),
		probabilty = me.newPostOverlay.down('#probabilityField'),
		weight = me.newPostOverlay.down('#weightField');
		/**
		 * Get all Log Time record  according to card
		 * @param {kanban card ID}					me.getNewPostForceId().getValue();
		 */
		logTime.removeAll();
		glueforce.getCardLogs(me.getNewPostForceId().getValue(), function (logTimeRecord) {
			_LOG && console.log('LogTime Record ', logTimeRecord);
			for (len = 0; len < logTimeRecord.length; len++) {
				totalTime += logTimeRecord[len].Hours;
			}
			Ext.getCmp('totalLogTime').setHtml('Total Logged Time: ' + Ext.htmlEncode(totalTime) + ' Hrs');
			logTime.add(logTimeRecord);

		});

		statusStore.removeAll();
		/**
		 * Get all Status Time record  according to card
		 * @param {kanban card ID}				me.getNewPostForceId().getValue();
		 */
		glueforce.getIssueLogs(me.getNewPostForceId().getValue(), function (statusRecord) {
			statusStore.add(statusRecord);
			statusStore.sort('Resolved', 'ASC');
		});

		if (!glueforce.getWorkspaceConfig().ProbabilityandWeight) {
			/**
			 * Get all label and value of pick list Weight and probabilty under StatusLog
			 */
			glueforce.getIssuelogpicklist(function (pickListValue) {
				probabilty.setOptions(pickListValue.Probability);
				weight.setOptions(pickListValue.Weight);
				glueforce.getWorkspaceConfig().ProbabilityandWeight = pickListValue;
			});
		} else {
			probabilty.setOptions(glueforce.getWorkspaceConfig().ProbabilityandWeight.Probability);
			weight.setOptions(glueforce.getWorkspaceConfig().ProbabilityandWeight.Weight);
		}
	},
	/**
	 * create Log time record according to kanaban card
	 */
	addLogTimeBtnTap: function (cmp) {
		cmp.setDisabled(true);
		_LOG && console.log('addLogTimeBtnTap');
		var me = this,
		Hours,
		logTimeStore = Ext.getStore('LogTime'),
		flds = me.getLogTime().getFields(),
		fldsVal = me.getLogTime().getValues(),
		logObj = fldsVal,
		UserStore,
		userRecod,
		OnSuccess,
		totalTime = 0;
		switch (fldsVal.Duration) {
		case 'Days':
			Hours = fldsVal.Estimation * 8;
			break;
		case 'Weeks':
			Hours = fldsVal.Estimation * 40;
			break;
		case 'Months':
			Hours = fldsVal.Estimation * 4 * 40;
			break;
		case 'Years':
			Hours = fldsVal.Estimation * 52 * 40;
			break;
		default:
			Hours = fldsVal.Estimation;
			break;
		}
		UserStore = Ext.getStore('AllUsers');
		logObj.KanbanCardID = me.getNewPostForceId().getValue();
		logObj.Hours = Hours;
		logObj.LogTime = JSON.stringify(me.getDateTime(fldsVal.LogTime));
		logObj.TaskDueDate = JSON.stringify(new Date(flds.TaskID.record.data.ActivityDate).toISOString());
		logObj.Subject = flds.TaskID.record.data.Subject;
		logObj.AssignedTo = flds.TaskID.record.data.OwnerId;
		logObj.AssignedAUserName = Ext.htmlDecode(me.getLogAssignUserBtn().getText());
		if (!logObj.AssignedAUser) {
			if (!logObj.AssignedTo) {
				logObj.AssignedAUser = glueforce.getWorkspaceConfig().UserID;
				logObj.AssignedAUserName = glueforce.getWorkspaceConfig().ValueStreamOwnerName;
			} else {
				userRecod = UserStore.findRecord('Id', logObj.AssignedTo);
				logObj.AssignedAUser = logObj.AssignedTo;
				logObj.AssignedAUserName = userRecod && userRecod.data.Name;
			}
		}
		userRecod = UserStore.findRecord('Id', logObj.AssignedAUser);
		logObj.SmallPhotoUrl = userRecod && userRecod.data.SmallPhotoUrl;
		OnSuccess = function (logRecord) {
			if (logRecord.Id) {
				logObj.LogTime = new Date(JSON.parse(logObj.LogTime));
				logObj.Id = logRecord.Id;
				logTimeStore.add(logObj);
				Ext.Array.forEach(logTimeStore.getData().items, function (record) {
					totalTime += record.data.Hours;
				});
				me.getLogTime().reset();
				Ext.getCmp('totalLogTime').setHtml('Total Logged Time: ' + Ext.htmlEncode(totalTime) + ' Hrs');
				logObj = null;
			} else {
				me.mainControllerObj.alertMsgBox('The assigned owner no longer exists. Please try a different user.');
				localStorage.setItem(glueforce.getWorkspaceConfig().UserID, JSON.stringify([]));

			}
			cmp.setDisabled(false);
			me.getLogAssignUserBtn().setText('Assign a User');
		};

		/**
		 * create Card Log time record
		 * @param {array of object log time fields}				logObj
		 */
		glueforce.createCardLog(logObj, OnSuccess);

	},
	/**
	 * itemtap method of LogTime list
	 * @param {list component}							list
	 * @param {index no of item}						index
	 * @param {The element or DataItem tapped}			target
	 * @param {The record associated to the item}		record
	 * @param {The event object}						e
	 */
	logTimeListViewTap: function (list, index, target, record, e) {
		var me = this;
		_LOG && console.log('logTimeListViewTap');
		if (e.target.id == "Delete") {
			Ext.Msg.show({
				message: '<div class="popUpCls">Are you sure you want to delete ?</div>',
				buttons: [{
						iconMask: true,
						text: 'Yes',
						margin: 4,
						ui: 'actionBtn',
						handler: function () {
							glueforce.removeCardLogs(record.data.Id, function (onSuccess) {
								_LOG && console.log('Delete Log Time Record');
							});
							list.getStore().remove(record);
							var totalTime = 0;
							Ext.Array.forEach(list.getStore().getData().items, function (recordData) {
								totalTime += recordData.data.Hours;
							});
							Ext.getCmp('totalLogTime').setHtml('Total Logged Time: ' + Ext.htmlEncode(totalTime) + ' Hrs');
							this.hide();
						}
					}, {
						iconMask: true,
						text: 'No',
						ui: 'normal',
						margin: 4,
						cls: 'cancelBtn',
						handler: function () {
							this.hide();
						}
					}
				]
			});
		} else
			if (e.target.id == "Edit") {
				me.editLogTimeOverlay = '';
				if (me.editLogTimeOverlay === "") {
					me.editLogTimeOverlay = Ext.Viewport.add({
							xtype: 'formpanel',
							modal: true,
							layout: 'vbox',
							centered: true,
							width: '460px',
							floatingCls: 'overlayFloatingClsNew',
							height: '350px',
							scrollable: null,
							items: [{
									xtype: 'toolbar',
									docked: 'top',
									height: 35,
									margin: '10 22 4 15',
									ui: 'topToolBar',
									items: [{
											html: 'Update Log Time',
											ui: 'topBarBtnNew',
											labelCls: 'btntitlelblCls'
										}, {
											xtype: 'spacer'
										}, {
											cls: 'removeSwimlaneCls',
											ui: 'topBarBtnNew',
											handler: function () {
												me.editLogTimeOverlay.hide();
											}
										}
									]
								}, {
									xtype: 'panel',
									layout: 'hbox',
									margin: '10 0 5 10',
									width: '70%',
									items: [{
											xtype: 'panel',
											layout: 'vbox',
											flex: 1,
											items: [{
													html: '<div class="label_priority_cls">Date</div>'
												}, {
													xtype: 'textfield',
													clearIcon: false,
													margin: '3 4 3 4',
													hidden: (Ext.ux.Config.getIsChrome() ? false : true),
													name: (Ext.ux.Config.getIsChrome() ? 'LogTime' : ''),
													component: {
														type: 'date'
													},
													inputCls: 'selectBorderCls',
													flex: 1
												}, {
													xtype: 'datepickerfield',
													destroyPickerOnHide: true,
													margin: '2 4 2 4',
													ui: 'selectFld',
													name: (Ext.ux.Config.getIsChrome() ? '' : 'LogTime'),
													hidden: (Ext.ux.Config.getIsChrome() ? true : false),
													picker: {
														yearFrom: new Date().getFullYear() - 1,
														yearTo: new Date().getFullYear() + 15
													},
													inputCls: 'selectBorderCls',
													flex: 1
												}
											]
										}, {
											xtype: 'panel',
											layout: 'vbox',
											flex: 1,
											items: [{
													html: '<div class="label_priority_cls">Assign to Task</div>'
												}, {
													xtype: 'fieldset',
													layout: 'hbox',
													cls: 'fieldSetCls',
													items: [{
															xtype: 'selectfield',
															ui: 'selectFld',
															labelCls: 'fieldLabelCls',
															name: 'TaskID',
															valueField: 'Id',
															displayField: 'Subject',
															store: 'TaskLogTime',
															inputCls: 'durationBorderCls',
															flex: 1,
															defaultTabletPickerConfig: {
																cls: Ext.baseCSSPrefix + 'selectFld-allOverlayList'
															}
														}
													]
												}
											]
										}
									]
								}, {
									xtype: 'panel',
									layout: 'hbox',
									width: '95%',
									margin: '0 0 5 10',
									items: [{
											xtype: 'panel',
											layout: 'vbox',
											flex: 1,
											items: [{
													html: '<div class="label_priority_cls">Logged Time</div>'
												}, {
													xtype: 'fieldset',
													layout: 'hbox',
													cls: 'fieldSetCls',
													items: [{
															xtype: 'numberfield',
															labelCls: 'fieldLabelCls',
															inputCls: 'durationBorderCls',
															name: 'Estimation',
															clearIcon: false,
															component: {
																disabled: false,
																type: 'text'
															},
															flex: 1,
															listeners: {
																blur: function (field, e, eOpts) {
																	var currVal = field.getValue() || 1;
																	field.setValue(currVal);
																}
															}

														}
													]
												}
											]
										}, {
											xtype: 'panel',
											layout: 'vbox',
											flex: 1,
											items: [{
													html: '<div class="label_priority_cls">Duration</div>'
												}, {
													xtype: 'fieldset',
													layout: 'hbox',
													cls: 'fieldSetCls',
													items: [{
															xtype: 'selectfield',
															ui: 'selectFld',
															labelCls: 'fieldLabelCls',
															name: 'Duration',
															inputCls: 'durationBorderCls',
															flex: 1,
															defaultTabletPickerConfig: {
																cls: Ext.baseCSSPrefix + 'selectFld-allOverlayList',
																width: '10em',
																height: '14em'
															},
															options: [{
																	text: 'Hours',
																	value: 'Hours'
																}, {
																	text: 'Days',
																	value: 'Days'
																}, {
																	text: 'Weeks',
																	value: 'Weeks'
																}, {
																	text: 'Months',
																	value: 'Months'
																}, {
																	text: 'Years',
																	value: 'Years'
																}
															]
														}
													]
												}
											]
										}, {
											xtype: 'panel',
											layout: 'vbox',
											flex: 1,
											items: [{
													margin: '0px 0px 0px 5px',
													html: '<div class="label_priority_cls">Assign an User</div>'
												}, {
													xtype: 'fieldset',
													layout: 'hbox',
													cls: 'fieldSetCls',
													items: [{
															xtype: 'button',
															text: 'Assign a User',
															ui: 'topBarBtn',
															labelCls: 'btn_lbl_cls',
															itemId: 'logAssignUserBtn',
															cls: 'prority_lbl_white',
															width: '100%',
															padding: 0,
															handler: function (cmp) {
																me.assignUserBtnTap(cmp);
															}
														}
													]
												}
											]
										}
									]
								}, {
									xtype: 'textareafield',
									label: 'Description',
									clearIcon: false,
									maxLength: 32000,
									labelAlign: 'top',
									inputCls: 'descriptionTextAreaCls',
									labelCls: 'fieldLabelCls',
									margin: '0 10 0 15',
									name: 'Description',
									listeners: {
										blur: function (fld) {
											var valueFld = Ext.htmlDecode(fld.getValue().replace(/(<([^>]+)>)/ig, ""));
											fld.setValue(valueFld.trim());
										}
									}
								}, {
									xtype: 'panel',
									style: 'height: 40px;border-bottom: 1px solid #EFEFEF;',
									margin: '10px 10px 10px 10px',
									items: [{
											xtype: 'button',
											ui: 'actionBtn',
											cls: 'logAddBtn',
											text: 'Update',
											handler: function () {
												var UserStore = Ext.getStore('AllUsers'),
												logTimeStore = Ext.getStore('LogTime'),
												Hours,
												logObj,
												flds = me.editLogTimeOverlay.getFields(),
												fldsVal = me.editLogTimeOverlay.getValues(),
												userRecod;
												switch (fldsVal.Duration) {
												case 'Days':
													Hours = fldsVal.Estimation * 8;
													break;
												case 'Weeks':
													Hours = fldsVal.Estimation * 40;
													break;
												case 'Months':
													Hours = fldsVal.Estimation * 4 * 40;
													break;
												case 'Years':
													Hours = fldsVal.Estimation * 52 * 40;
													break;
												default:
													Hours = fldsVal.Estimation;
													break;
												}
												record.set('Hours', Hours);
												record.set('Description', fldsVal.Description);
												record.set('Duration', fldsVal.Duration);
												record.set('Estimation', fldsVal.Estimation);
												record.set('LogTime', me.getDateTime(fldsVal.LogTime));
												record.set('TaskID', fldsVal.TaskID);
												record.set('Subject', flds.TaskID.record.data.Subject);
												record.set('AssignedTo', flds.TaskID.record.data.OwnerId);
												record.set('TaskDueDate', me.getDateTime(flds.TaskID.record.data.ActivityDate));

												if (!Ext.getCmp('LogUserAssignId').getValue()) {
													if (!flds.TaskID.record.data.OwnerId) {
														record.set('AssignedAUserName', glueforce.getWorkspaceConfig().ValueStreamOwnerName);
														record.set('AssignedAUser', glueforce.getWorkspaceConfig().UserID);
													} else {
														userRecod = UserStore.findRecord('Id', flds.TaskID.record.data.OwnerId);
														record.set('AssignedAUserName', userRecod.data.Name);
														record.set('AssignedAUser', flds.TaskID.record.data.OwnerId);
													}
												} else {
													record.set('AssignedAUserName', Ext.htmlDecode(me.editLogTimeOverlay.down('#logAssignUserBtn').getText()));
													record.set('AssignedAUser', Ext.getCmp('LogUserAssignId').getValue());
												}
												Ext.getCmp('LogUserAssignId').setValue('');
												userRecod = UserStore.findRecord('Id', record.data.AssignedAUser);
												record.set('SmallPhotoUrl', userRecod.data.SmallPhotoUrl);
												logTimeStore.sync();
												logObj = JSON.parse(JSON.stringify(record.data));
												delete logObj.id;
												logObj.LogTime = JSON.stringify(new Date(logObj.LogTime).toISOString());
												logObj.TaskDueDate = JSON.stringify(new Date(logObj.TaskDueDate).toISOString());

												glueforce.updateCardLogs(logObj, function (onSuccess) {
													_LOG && console.log('update Log Time Record');
												});
												var totalTime = 0;
												Ext.Array.forEach(logTimeStore.getData().items, function (record) {
													totalTime += record.data.Hours;
												});
												Ext.getCmp('totalLogTime').setHtml('Total Logged Time: ' + Ext.htmlEncode(totalTime) + ' Hrs');
												me.editLogTimeOverlay.hide();
												logObj = null;
											}
										}
									]
								}
							],
							listeners: {
								hide: function () {
									me.editLogTimeOverlay.destroy();
									me.editLogTimeOverlay = null;
								},
								show: function () {
									if (record.data && record.data.Description) {
										record.data.Description = Ext.htmlDecode(record.data.Description);
									}
									me.editLogTimeOverlay.setValues(record.data);
									Ext.getCmp('LogUserAssignId').setValue(record.data.AssignedAUser);
									me.editLogTimeOverlay.down('#logAssignUserBtn').setText(Ext.htmlEncode(record.data.AssignedAUserName));
									if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari || navigator.platform === 'iPad') {
										me.editLogTimeOverlay.getFields('LogTime').setValue(new Date(record.data.LogTime));
									} else {
										me.editLogTimeOverlay.getFields('LogTime').setValue(Ext.Date.format(new Date(record.data.LogTime), 'Y-m-d'));
									}
								}
							}
						});
				}
				me.editLogTimeOverlay.show();
			}
	},
	/**
	 * create  Status record according to kanaban card
	 */
	addStatusOnCard: function (cmp) {
		var me = this,
		logObj = cmp.getValues(),
		flds = cmp.getFields();
		logObj.KanbanCardID = me.getNewPostForceId().getValue();
		logObj.Resolved = false;
		logObj.ResolvedTime = null;
		logObj.LogTime = JSON.stringify(me.getDateTime(logObj.LogTime));
		logObj.Score = Math.round((flds.Weight.getStore().indexOf(flds.Weight.record) + 1) * (flds.Probability.getStore().indexOf(flds.Probability.record) + 1));
		logObj.Subject = flds.TaskID.record.data.Subject;
		logObj.AssignedTo = flds.TaskID.record.data.OwnerId;
		logObj.TaskDueDate = JSON.stringify(new Date(flds.TaskID.record.data.ActivityDate).toISOString());
		_LOG && console.log('addStatusOnCard');
		var statusStore = Ext.getStore('StatusLog');
		glueforce.createIssueLogs(logObj, function (statusRecord) {
			logObj.LogTime = new Date(JSON.parse(logObj.LogTime));
			logObj.Id = statusRecord.Id;
			statusStore.add(logObj);
			cmp.reset();
			logObj = null;
		});

	},
	/**
	 * itemtap method of Status list
	 * @param {list component}							list
	 * @param {index no of item}						index
	 * @param {The element or DataItem tapped}			target
	 * @param {The record associated to the item}		record
	 * @param {The event object}						e
	 */
	statusViewListTap: function (list, index, target, record, e) {
		var me = this;
		_LOG && console.log('statusViewListTap');
		if (e.target.id == "Delete") {
			Ext.Msg.show({
				message: '<div class="popUpCls">Are you sure you want to delete ?</div>',
				buttons: [{
						iconMask: true,
						text: 'Yes',
						margin: 4,
						ui: 'actionBtn',
						handler: function () {
							glueforce.removeIssueLogs(record.data.Id, function (onSuccess) {});
							list.getStore().remove(record);
							this.hide();
						}
					}, {
						iconMask: true,
						text: 'No',
						ui: 'normal',
						margin: 4,
						cls: 'cancelBtn',
						handler: function () {
							this.hide();
						}
					}
				]
			});
		} else
			if (e.target.id == "Edit") {
				me.editStatusOverlay = '';
				if (me.editStatusOverlay === "") {
					me.editStatusOverlay = Ext.Viewport.add({
							xtype: 'formpanel',
							modal: true,
							layout: 'vbox',
							centered: true,
							width: '450px',
							floatingCls: 'overlayFloatingClsNew',
							height: '500px',
							scrollable: true,
							items: [{
									xtype: 'toolbar',
									docked: 'top',
									height: 35,
									margin: '10px 10px 4px 2px',
									ui: 'topToolBar',
									items: [{
											html: 'Update Status',
											ui: 'topBarBtnNew',
											labelCls: 'btntitlelblCls'
										}, {
											xtype: 'spacer'
										}, {
											cls: 'removeSwimlaneCls',
											ui: 'topBarBtnNew',
											handler: function () {
												me.editStatusOverlay.hide();
											}
										}
									]
								}, {
									xtype: 'statusView',
									scrollable: null,
									height: '320px'
								}, {
									xtype: 'checkboxfield',
									name: 'Resolved',
									cls: 'preferencesCheckboxcls',
									labelCls: 'preferencesCheckboxLabel',
									labelWidth: '90%',
									height: '36px',
									margin: '5px 10px 0px 10px',
									label: 'Resolved'

								}, {
									xtype: 'textfield',
									clearIcon: false,
									hidden: (Ext.ux.Config.getIsChrome() ? false : true),
									name: (Ext.ux.Config.getIsChrome() ? 'ResolvedTime' : ''),
									labelCls: 'fieldLabelCls',
									label: 'Resolved Date',
									labelAlign: 'left',
									labelWidth: '50%',
									margin: '10px 10px 0px 10px',
									height: '35px',
									component: {
										type: 'date'
									},
									inputCls: 'selectBorderCls',
									value: Ext.Date.format(Ext.Date.add(new Date()), 'Y-m-d')
								}, {
									xtype: 'datepickerfield',
									destroyPickerOnHide: true,
									hidden: (Ext.ux.Config.getIsChrome() ? true : false),
									name: (Ext.ux.Config.getIsChrome() ? '' : 'ResolvedTime'),
									ui: 'selectFld',
									picker: {
										yearFrom: new Date().getFullYear() - 1,
										yearTo: new Date().getFullYear() + 15
									},
									inputCls: 'selectBorderCls',
									labelCls: 'fieldLabelCls',
									label: 'Resolved Date',
									labelAlign: 'left',
									labelWidth: '50%',
									margin: '10px 10px 0px 10px',
									value: new Date()
								}, {
									xtype: 'panel',
									style: 'height: 40px;',
									margin: '5px 10px 0px',
									docked: 'bottom',
									items: [{
											xtype: 'button',
											ui: 'actionBtn',
											cls: 'logAddBtn',
											text: 'Update',
											handler: function () {
												var statusOverlay = me.editStatusOverlay,
												flds = statusOverlay.getFields(),
												fldsVal = statusOverlay.getValues();
												record.set('Detail', fldsVal.Detail);
												record.set('Probability', fldsVal.Probability);
												record.set('StatusType', fldsVal.StatusType);
												record.set('Weight', fldsVal.Weight);
												record.set('Resolved', flds.Resolved.isChecked());
												record.set('Subject', flds.TaskID.record.data.Subject);
												record.set('TaskID', fldsVal.TaskID);
												record.set('AssignedTo', flds.TaskID.record.data.OwnerId);
												record.set('TaskDueDate', new Date(flds.TaskID.record.data.ActivityDate));
												record.set('Score', Math.round((flds.Weight.getStore().indexOf(flds.Weight.record) + 1) * (flds.Probability.getStore().indexOf(flds.Probability.record) + 1)));
												if (flds.Resolved.isChecked()) {
													record.set('ResolvedTime', me.getDateTime(fldsVal.ResolvedTime));

												} else {
													record.set('ResolvedTime', null);
												}

												record.set('LogTime', me.getDateTime(fldsVal.LogTime));
												Ext.getStore('StatusLog').sync();
												var logObj = JSON.parse(JSON.stringify(record.data));
												delete logObj.id;
												logObj.LogTime = JSON.stringify(new Date(logObj.LogTime).toISOString());
												logObj.ResolvedTime = logObj.ResolvedTime && JSON.stringify(new Date(logObj.ResolvedTime).toISOString());
												logObj.TaskDueDate = logObj.TaskDueDate && JSON.stringify(new Date(logObj.TaskDueDate).toISOString());
												if (!logObj.TaskDueDate) {
													logObj.TaskDueDate = '';
												}
												if (!logObj.ResolvedTime) {
													logObj.ResolvedTime = '';
												}
												glueforce.updateIssueLogs(logObj, function (onSuccess) {
													_LOG && console.log('update Log Time Record');
												});
												statusOverlay.hide();
												logObj = null;

											}
										}
									]
								}
							],
							listeners: {
								hide: function () {
									me.editStatusOverlay.destroy();
									me.editStatusOverlay = null;
								},
								show: function () {
									var editStatus = me.editStatusOverlay;
									editStatus.down('#statusToolbaar').hide();
									editStatus.down('#statusHarveyBall').hide();
									editStatus.down('#statusAdd').hide();
									editStatus.down('#statusViewList').hide();
									editStatus.down('#statusOnQuality').hide();
									editStatus.down('#statusHeaderHtml').hide();
									if (record.data && record.data.Detail) {
										record.data.Detail = Ext.htmlDecode(record.data.Detail);
									}
									if (!glueforce.getWorkspaceConfig().ProbabilityandWeight) {
										/**
										 * Get all label and value of pick list Weight and probabilty under StatusLog
										 */
										glueforce.getIssuelogpicklist(function (pickListValue) {
											editStatus.down('#probabilityField').setOptions(pickListValue.Probability);
											editStatus.down('#weightField').setOptions(pickListValue.Weight);
											glueforce.getWorkspaceConfig().ProbabilityandWeight = pickListValue
												editStatus.setValues(record.data);
										});
									} else {
										editStatus.down('#probabilityField').setOptions(glueforce.getWorkspaceConfig().ProbabilityandWeight.Probability);
										editStatus.down('#weightField').setOptions(glueforce.getWorkspaceConfig().ProbabilityandWeight.Weight);
										editStatus.setValues(record.data);
									}

									if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari || navigator.platform === 'iPad') {
										editStatus.getFields('LogTime').setValue(new Date(record.data.LogTime));
									} else {
										editStatus.getFields('LogTime').setValue(Ext.Date.format(new Date(record.data.LogTime), 'Y-m-d'));
									}
									if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari || navigator.platform === 'iPad') {
										if (record.data.ResolvedTime) {
											editStatus.getFields('ResolvedTime').setValue(new Date(record.data.ResolvedTime));
										} else {
											editStatus.getFields('ResolvedTime').setValue(new Date());
										}
									} else {
										if (record.data.ResolvedTime) {
											editStatus.getFields('ResolvedTime').setValue(Ext.Date.format(new Date(record.data.ResolvedTime), 'Y-m-d'));
										} else {
											editStatus.getFields('ResolvedTime').setValue(Ext.Date.format(new Date(), 'Y-m-d'));
										}
									}

									if (record.data.Resolved) {
										editStatus.getFields('Resolved').setChecked(true);
									} else {
										editStatus.getFields('Resolved').setChecked(false);
									}

								}
							}
						});
				}
				me.editStatusOverlay.show();
			}
	},
	sideMenuCardEditBtn: function (cmp, card) {
		_LOG && console.log('sideMenuCardEditBtn');
		var popupHeight = 510;
		if (glueforce.getWorkspaceConfig().IsTemplateBoard === true) {
			popupHeight = 470;
		}
		Ext.getCmp('cardHarveOverlay') && Ext.getCmp('cardHarveOverlay').destroy();
		Ext.getCmp('cardEditOverlay') && Ext.getCmp('cardEditOverlay').destroy();
		var me = RealTimeKanbanBoard.app.getApplication().getController('KanbanCardController');
		me.timeoutedit = setTimeout(function () {
				me.editoverlay = Ext.create('Ext.ux.TaskOverList', {
						element: cmp,
						width: 180,
						height: popupHeight,
						modal: false,
						cls: 'sidemenuCls',
						hideOnMaskTap: true,
						id: 'cardEditOverlay',
						alignment: "tl-tr?",
						items: [{
								xtype: 'toolbar',
								docked: 'top',
								height: 20,
								margin: 0,
								ui: 'topToolBar',
								items: [{
										xtype: 'spacer'
									}, {
										cls: 'removeSwimlaneCls',
										ui: 'topBarBtnNew',
										margin: '0 5 0 0',
										handler: function () {
											Ext.getCmp('cardEditOverlay') && Ext.getCmp('cardEditOverlay').destroy();
										}
									}
								]
							}, {
								xtype: 'cardEditPopUp'
							}, {
								xtype: 'hiddenfield',
								itemId: 'cardForceId'
							}
						]
					});
				me.editoverlay.down('#cardForceId') && me.editoverlay.down('#cardForceId').setValue(cmp.accessKey);
			}, 100);
	},
	sideMenuCardEditBtnOut: function () {
		this.timeoutedit && window.clearTimeout(this.timeoutedit);
	},
	/**
	 * itemtap method of side menu list open when mouseover on edit icon on card
	 * @param {list component}								list
	 * @param {index no of item}							index
	 * @param {The element or DataItem tapped}				target
	 * @param {The record associated to the item}			record
	 * @param {The event object}							e
	 */
	editMenuTap: function (list, index, target, record, e) {
		var me = this,
		productMC;
		var kanbancardForceID = this.editoverlay && this.editoverlay.down('#cardForceId').getValue();
		_LOG && console.log('editMenuTap');
		var recordData = Ext.getStore('KanbanCards').findRecord('ForceID', kanbancardForceID);
		Ext.getCmp('cardEditOverlay') && Ext.getCmp('cardEditOverlay').destroy();
		if (record.data.name == "Delete") {
			me.newPostDeleteBtnTap(false, true, kanbancardForceID);
		} else if (record.data.name == "Hyper Jump") {
			productMC = Ext.ComponentQuery.query('productMasterContainer')[0];
			if (productMC) {
				// single card hyper jump with advance option, like Portfolio, column hierarchy
				productMC.fireEvent('jumpallcard', '', '', recordData);
			}
		} else if (record.data.name == "Hierarchy") {
			if (recordData) {
				var url = (glueforce.getWorkspaceConfig().BaseURL) + (glueforce.getWorkspaceConfig().CardHierarchyURL).replace("/", ""),
				myURL = url + '?Id=' + Ext.htmlEncode(recordData.data.ValueStream) + '&cardid=' + Ext.htmlEncode(recordData.data.Id);
				window.open(me.sanitizURL(myURL));
			}
		} else if (record.data.name == "Clone") {
			me.cloneKanbanCard = Ext.Viewport.add({
					xtype: 'formpanel',
					modal: true,
					// hideOnMaskTap : true,
					hidden: true,
					width: 320,
					floatingCls: 'overlayFloatingClsNew',
					height: 280,
					layout: 'vbox',
					centered: true,
					scrollable: null,
					items: [{
							xtype: 'toolbar',
							docked: 'top',
							height: 35,
							margin: 10,
							minHeight: 30,
							ui: 'topToolBar',
							items: [{
									html: 'Clone a Card',
									ui: 'topBarBtnNew',
									labelCls: 'btntitlelblCls'
								}, {
									xtype: 'spacer'
								}, {
									cls: 'removeSwimlaneCls',
									ui: 'topBarBtnNew',
									handler: function () {
										me.cloneKanbanCard.hide();
									}
								}
							]
						}, {
							xtype: 'checkboxfield',
							labelWidth: '86%',
							margin: '9 10 9 10',
							checked: true,
							cls: 'preferencesCheckboxcls',
							labelCls: 'preferencesCheckboxLabel',
							label: 'Clone all Tasks',
							itemId: 'cloneAllTask'
						}, { // Colne start date
							xtype: 'textfield',
							clearIcon: false,
							margin: '3 8 3 8',
							labelCls: 'fieldLabelCls',
							labelWidth: '50%',
							hidden: (Ext.ux.Config.getIsChrome() ? false : true),
							itemId: (Ext.ux.Config.getIsChrome() ? 'cloneStartDate' : ''),
							component: {
								type: 'date'
							},
							label: 'Start Date',
							inputCls: 'selectBorderCls',
							// value : Ext.Date.format(Ext.Date.add(new Date()), 'Y-m-d'),
							listeners: {
								initialize: function (cmp) {
									cmp.element.select('input').elements[0].onchange = function () {
										if (cmp.getValue()) {
											me.cloneKanbanCard && me.cloneKanbanCard.down('#cloneDuteDate').setValue('');
											if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
												var dateCheck,
												finalDate;
												if (cmp.getValue()) {
													dateCheck = new Date(cmp.getValue() + ' 06:30:30');
													if (dateCheck.getDay() == 6) {
														finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 2);
														cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
													} else if (dateCheck.getDay() == 0) {
														finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 1);
														cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
													}

												}
											}
										}
									};
									if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
										var finalDate;
										// dateCheck = new Date(cmp.getValue());
										if (new Date().getDay() == 6) {
											finalDate = Ext.Date.add(new Date(), Ext.Date.DAY, 2);
											cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
										} else if (new Date().getDay() == 0) {
											finalDate = Ext.Date.add(new Date(), Ext.Date.DAY, 1);
											cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
										} else {
											cmp.setValue(Ext.Date.format(new Date(), 'Y-m-d'));
										}

									} else {
										cmp.setValue(Ext.Date.format(new Date(), 'Y-m-d'));
									}

								}
							}
						}, {
							xtype: 'datepickerfield',
							destroyPickerOnHide: true,
							margin: '2 8 2 8',
							labelWidth: '50%',
							labelCls: 'fieldLabelCls',
							ui: 'selectFld',
							label: 'Start Date',
							itemId: (Ext.ux.Config.getIsChrome() ? '' : 'cloneStartDate'),
							hidden: (Ext.ux.Config.getIsChrome() ? true : false),
							picker: {
								yearFrom: new Date().getFullYear() - 1,
								yearTo: new Date().getFullYear() + 15
							},
							inputCls: 'selectBorderCls',
							value: new Date(),
							listeners: {
								change: function (cmp) {
									if (this.getValue()) {
										me.cloneKanbanCard && me.cloneKanbanCard.down('#cloneDuteDate').setValue('');
										if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
											var dateCheck,
											finalDate;
											if (cmp.getValue()) {
												dateCheck = new Date(cmp.getValue());
												if (dateCheck.getDay() == 6) {
													finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 2);
													cmp.setValue(finalDate);
												} else if (dateCheck.getDay() == 0) {
													finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 1);
													cmp.setValue(finalDate);
												}

											}
										}

									}
								}
							}
						}, {
							html: 'Or',
							cls: 'OrTextCls'
						}, {
							xtype: 'textfield',
							clearIcon: false,
							margin: '7 10 7 10',
							labelCls: 'fieldLabelCls',
							labelWidth: '50%',
							hidden: (Ext.ux.Config.getIsChrome() ? false : true),
							itemId: (Ext.ux.Config.getIsChrome() ? 'cloneDuteDate' : ''),
							component: {
								type: 'date'
							},
							label: 'Due Date',
							inputCls: 'selectBorderCls',
							// value : Ext.Date.format(Ext.Date.add(new Date()), 'Y-m-d'),
							listeners: {
								initialize: function (cmp) {
									cmp.element.select('input').elements[0].onchange = function () {
										if (cmp.getValue()) {
											me.cloneKanbanCard && me.cloneKanbanCard.down('#cloneStartDate').setValue('');
											if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
												var dateCheck,
												finalDate;
												dateCheck = new Date(cmp.getValue() + ' 06:30:30');
												if (dateCheck.getDay() == 6) {
													finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 2);
													cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
												} else if (dateCheck.getDay() == 0) {
													finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, 1);
													cmp.setValue(Ext.Date.format(new Date(finalDate), 'Y-m-d'));
												}
											}
										}
									};
								}
							}
						}, {
							xtype: 'datepickerfield',
							destroyPickerOnHide: true,
							margin: '7 10 7 10',
							labelWidth: '50%',
							labelCls: 'fieldLabelCls',
							ui: 'selectFld',
							label: 'Due Date',
							itemId: (Ext.ux.Config.getIsChrome() ? '' : 'cloneDuteDate'),
							hidden: (Ext.ux.Config.getIsChrome() ? true : false),
							picker: {
								yearFrom: new Date().getFullYear() - 1,
								yearTo: new Date().getFullYear() + 15
							},
							inputCls: 'selectBorderCls',
							// value : new Date(),
							listeners: {
								change: function (cmp) {
									if (cmp.getValue()) {
										me.cloneKanbanCard && me.cloneKanbanCard.down('#cloneStartDate').setValue('');
										if (!glueforce.getWorkspaceConfig().SevenDayWorkWeek) {
											var dateCheck,
											finalDate;
											dateCheck = new Date(cmp.getValue());
											if (dateCheck.getDay() == 6) {
												finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, -2);
												cmp.setValue(finalDate);
											} else if (dateCheck.getDay() == 0) {
												finalDate = Ext.Date.add(dateCheck, Ext.Date.DAY, -1);
												cmp.setValue(finalDate);
											}
										}
									}
								}
							}
						}, {
							xtype: 'toolbar',
							itemId: 'assignContactBottomToolbar',
							height: 45,
							minHeight: 30,
							ui: 'greyToolbar',
							docked: 'bottom',
							items: [{
									xtype: 'spacer'
								}, {
									xtype: 'button',
									ui: 'actionBtn',
									text: 'Clone',
									handler: function () {
										var cloneDueDate = me.cloneKanbanCard.down('#cloneDuteDate').getValue(),
										cloneStartDate = me.cloneKanbanCard.down('#cloneStartDate').getValue(),
										cloneTask,
										cloneCardRecord = {};
										if (cloneDueDate) {
											cloneDueDate = JSON.stringify(me.getDateTime(cloneDueDate).toISOString());
										} else {
											cloneStartDate = JSON.stringify(me.getDateTime(cloneStartDate).toISOString());
										}
										cloneTask = me.cloneKanbanCard.down('#cloneAllTask').getChecked();
										cloneCardRecord = recordData.copy();
										cloneCardRecord = cloneCardRecord.data;
										cloneCardRecord.Order = Ext.getStore('KanbanCards').getData().length + 5;
										cloneCardRecord.GUID = UUID.generate();
										cloneCardRecord.StartDate = new Date(cloneCardRecord.StartDate);
										cloneCardRecord.DueDate = new Date(cloneCardRecord.DueDate);
										delete cloneCardRecord.Extensions;
										delete cloneCardRecord.AllSticker;
										/**
										 * Clone card on same valuestream
										 * @param {new due date of card}					cloneDueDate
										 * @param {boolean value to clone task}				cloneTask
										 * @param {stringify kanban card record}			cloneCardRecord
										 */
										if (cloneDueDate) {
											glueforce.CloneKanbanCard(cloneDueDate, cloneTask, JSON.stringify(cloneCardRecord), function (OnSuccess) {
												_LOG && console.log('cloneCreate');
												if (OnSuccess) {
													var myevent = JSON.parse(OnSuccess);
													myevent.Extensions = {};
													if (myevent.JSONDefinition && (Ext.String.trim(myevent.JSONDefinition) !== "")) {
														// this was supposed to convert the JSON string to object here
														myevent.Extensions = JSON.parse(myevent.JSONDefinition);
														//then grab the data associated with the extension
														if (myevent.Extensions && myevent.Extensions != '{}' && myevent.JSONData && (Ext.String.trim(myevent.JSONData) !== "")) {
															myevent.Extensions.JSONData = JSON.parse(myevent.JSONData);
														}
													}
													// sticker will not clone if any in parent card
													me.selectedStickerArray = [];
													me.newKanbanCardCore(myevent, 'broadCast');

												}
											});
										} else {
											var cloneData = {
												StartDate: cloneStartDate,
												TaskVerb: cloneTask,
												someJSONData: JSON.stringify(cloneCardRecord)
											}
											glueforce.cloneCardwithStartDate(cloneData, function (OnSuccess) {
												_LOG && console.log('cloneCreate');
												if (OnSuccess) {
													var myevent = JSON.parse(OnSuccess);
													myevent.Extensions = {};
													if (myevent.JSONDefinition && (Ext.String.trim(myevent.JSONDefinition) !== "")) {
														// this was supposed to convert the JSON string to object here
														myevent.Extensions = JSON.parse(myevent.JSONDefinition);
														//then grab the data associated with the extension
														if (myevent.Extensions && myevent.Extensions != '{}' && myevent.JSONData && (Ext.String.trim(myevent.JSONData) !== "")) {
															myevent.Extensions.JSONData = JSON.parse(myevent.JSONData);
														}
													}
													// sticker will not clone if any in parent card
													me.selectedStickerArray = [];
													me.newKanbanCardCore(myevent, 'broadCast');

												}
											});
										}
										cloneCardRecord = null;
										setTimeout(function () {
											me.cloneKanbanCard.hide();
										}, 100);
									}
								}
							]
						}
					],
					listeners: {
						hide: function () {
							if (me.cloneKanbanCard) {
								me.cloneKanbanCard.destroy();
								me.cloneKanbanCard = null;
							}
						},
						show: function () {}
					}
				});
			me.cloneKanbanCard.show();
		} else {
			recordData && this.newPostBtnTap('', recordData.getData(), index);
		}
		return false;
	},
	/**
	 * Harvey ball Over
	 * @param {li.HarveyBall}				node
	 */
	onHarveyballTap: function (node) {
		_LOG && console.log('onHarveyballTap');
		var me = this,
		kanbanStore = Ext.getStore('KanbanCards');
		Ext.getCmp('cardEditOverlay') && Ext.getCmp('cardEditOverlay').destroy();
		Ext.getCmp('cardHarveOverlay') && Ext.getCmp('cardHarveOverlay').destroy();
		me.timeoutharvey = setTimeout(function () {
				Ext.create('Ext.ux.TaskOverList', {
					element: node,
					width: '130px',
					height: '55px',
					modal: false,
					cls: 'sidemenuCls',
					hideOnMaskTap: true,
					id: 'cardHarveOverlay',
					items: [{
							xtype: 'toolbar',
							docked: 'top',
							height: 20,
							margin: 0,
							ui: 'topToolBar',
							items: [{
									xtype: 'spacer'
								}, {
									cls: 'removeSwimlaneCls',
									ui: 'topBarBtnNew',
									margin: '0 5 0 0',
									handler: function () {
										Ext.getCmp('cardHarveOverlay') && Ext.getCmp('cardHarveOverlay').destroy();
									}
								}
							]
						}, {
							xtype: 'dataview',
							flex: 1,
							cls: 'parcentcompleteCls',
							inline: {
								wrap: false
							},
							margin: '0 5 0 0',
							itemHeight: 30,
							scrollable: null,
							itemTpl: '<div class="overcls harveyBallPanel_{name:htmlEncode}"></div>',
							data: [{
									name: 0
								}, {
									name: 25
								}, {
									name: 50
								}, {
									name: 75
								}, {
									name: 100
								}
							],
							listeners: {
								itemtap: function (list, index, target, record) {
									var kanbanUrl = glueforce.getWorkspaceConfig().BaseURL,
									kanbanRecord,
									jsonPackage,
									oldJsonRecord,
									undoStore = Ext.getStore('UndoRecord'),
									tempcardArray = [];
									kanbanUrl += glueforce.getWorkspaceConfig().KanbanBoardURL.replace('/', '') + '?Id=';
									kanbanUrl += glueforce.getWorkspaceConfig().valueStreamID;
									kanbanUrl = kanbanUrl + '&cardid=';
									kanbanRecord = kanbanStore.findRecord('ForceID', node.accessKey);
									if (kanbanRecord) {
										oldJsonRecord = {
											Id: (kanbanRecord.get('Id')),
											GUID: (kanbanRecord.get('GUID')),
											Name: kanbanRecord.get('Name'),
											HarveyBall: kanbanRecord.get('HarveyBall'),
											KanbanUrl: kanbanUrl,
											ItemType: 'KC',
											BoardType: 'Kanban Board'
										};
										kanbanRecord.set('HarveyBall', record.data.name);
										jsonPackage = {
											Id: (kanbanRecord.get('Id')),
											GUID: (kanbanRecord.get('GUID')),
											Name: kanbanRecord.get('Name'),
											ValueStreamCardLink: kanbanRecord.get('ValueStreamCardLink') || '',
											HarveyBall: record.data.name,
											KanbanUrl: kanbanUrl,
											ItemType: 'KC',
											BoardType: 'Kanban Board'
										};
										/**
										 * Add kanbanCard Record in undo store
										 * Store record for Revert card record
										 */
										tempcardArray.push('UpdateHarveyBall', oldJsonRecord);
										if (undoStore.getData().length < 3) {
											undoStore.add({
												KanbanCardRecord: tempcardArray
											});
										} else {
											undoStore.removeAt(0);
											undoStore.add({
												KanbanCardRecord: tempcardArray
											});
										}

										glueforce.kanbanStateChange('UpdateHarveyBall', JSON.stringify(jsonPackage));
										jsonPackage = null;
										// onAdvanceFilterByString call due to filter feature in kanban controller
										me.onAdvanceFilterByString();
									}
									Ext.getCmp('cardHarveOverlay') && Ext.getCmp('cardHarveOverlay').destroy();
									return false;
								},
								painted: function () {
									if (node) {
										var rec = this.getStore().findRecord('name', parseInt(node.lang, 10));
										this.select(rec);
									} else {
										this.select(0);
									}
								}
							}
						}
					],
					listeners: {
						hide: function (dis) {
							dis && dis.destroy();
							delete me.greenPnl;
						}
					}
				});
			},
				100);
	},
	onHarveyballTapout: function () {
		this.timeoutharvey && window.clearTimeout(this.timeoutharvey);
	},
	/**
	 * Sync order trough dataview selector element
	 * @param {enter GUID}			dropZoneId
	 * @param {leave GUID}			leaveZoneId
	 */
	syncKanbanCardOrder: function (dropZoneId, leaveZoneId, callbackSuccess) {
		_LOG && console.log('syncKanbanCardOrder');
		var kanbanController = this,
		kanbanStore = Ext.getStore('KanbanCards'),
		dataview = Ext.ComponentQuery.query('#' + dropZoneId)[0],
		innerElement = dataview.element.select("div.kanbancard").elements,
		kanbanid,
		recordkanban;
		kanbanController.kanbanOrderObj = [];
		Ext.Array.forEach(innerElement, function (kanbanelement, index) {
			kanbanid = kanbanelement.id.replace('Div', '');
			recordkanban = kanbanStore.findRecord('ForceID', kanbanid);
			// to improve shuffle movement of card avoid almost conflict of order
			recordkanban.set('Order', index + 2);
			kanbanController.kanbanOrderObj.push({
				'Order': recordkanban.data.Order,
				'Id': recordkanban.data.ForceID,
				'GUID': recordkanban.data.GUID
			});
		});

		if (kanbanController.kanbanOrderObj.length) {
			glueforce.manageKanbanOrder(kanbanController.kanbanOrderObj, function (success) {
				glueforce.kanbanStateChange("UpdateKanbanOrder", JSON.stringify(kanbanController.kanbanOrderObj));
				kanbanController.kanbanOrderObj = null;
				callbackSuccess();
			});
		} else {
			callbackSuccess();
		}

		// onAdvanceFilterByString call due to filter feature in kanban controller
		kanbanController.onAdvanceFilterByString();

	},
	updateOrderLeavedZone: function (leaveZoneId, kanbanStore) {
		_LOG && console.log('updateOrderLeavedZone');
		if (!kanbanStore) {
			kanbanStore = Ext.getStore('KanbanCards');
		}
		if (!leaveZoneId) {
			return;
		}
		var leavedataview = Ext.ComponentQuery.query('#' + leaveZoneId)[0],
		leaveinnerElement = leavedataview.element.select("div.kanbancard").elements,
		kanbanid,
		recordkanban;
		Ext.Array.forEach(leaveinnerElement, function (kanbanelement, index) {
			kanbanid = kanbanelement.id.replace('Div', '');
			recordkanban = kanbanStore.findRecord('ForceID', kanbanid);
			// to improve shuffle movement of card avoid almost conflict of order
			recordkanban.set('Order', index + 2);
		});
	},
	/**
	 * Open overlay for edit task
	 * @param {Task record object}			taskRecord
	 */
	taskEditOverlay: function (taskRecord) {
		_LOG && console.log('taskEditOverlay');
		var me = this,
		meMain = me.getApplication().getController('MainController');
		me.EditTaskRecord = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				// hideOnMaskTap : true,
				hidden: true,
				width: 480,
				floatingCls: 'overlayFloatingClsNew',
				height: 415,
				layout: 'vbox',
				centered: true,
				scrollable: null,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: '10 10 -20 10',
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Update Task',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.EditTaskRecord.hide();
								}
							}
						]
					}, {
						xtype: 'newPostTasks',
						scrollable: null,
						flex: 1
					}, {
						xtype: 'toolbar',
						itemId: 'assignContactBottomToolbar',
						height: 45,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom',
						items: [{
								xtype: 'spacer'
							}, {
								xtype: 'button',
								ui: 'actionBtn',
								disabled: (meMain.canEditCard ? false : true),
								text: 'Update',
								handler: function () {
									me.newPostEditTaskBtnTap();
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (me.EditTaskRecord) {
							me.EditTaskRecord.destroy();
							me.EditTaskRecord = null;
						}
					},
					show: function () {
						me.EditTaskRecord.down('#newposttaskToolbar').setHidden(true);
						me.EditTaskRecord.down('#addTaskCard').setHidden(true);
						me.EditTaskRecord.down('#listTaskShow').setHidden(true);
						var filds = me.EditTaskRecord.down('newPostTasks').getFields();
						filds.StatusTask.setValue(taskRecord.Status);
						filds.SubjectTask.setValue(Ext.htmlDecode(taskRecord.Subject));
						filds.assignUserTask.setValue(taskRecord.OwnerId);
						filds.descriptionTaskTask.setValue(Ext.htmlDecode(taskRecord.Description));
						filds.priorityTask.setValue(taskRecord.Priority);
						filds.WhatId.setValue(taskRecord.WhatId);
						filds.TaskId.setValue(taskRecord.Id);
						me.EditTaskRecord.down('#criticalBtnFieldsetTask') && me.EditTaskRecord.down('#criticalBtnFieldsetTask').items.items[0].setText(taskRecord.Priority);
						var alluser = Ext.getStore('AllUsers'),
						userRecord = alluser.findRecord('Id', taskRecord.OwnerId),
						dueDate;
						if (userRecord && me.EditTaskRecord.down('#assignUserBtnTask')) {
							me.EditTaskRecord.down('#assignUserBtnTask').setText(Ext.htmlEncode(userRecord.data.Name));
						}

						if (me.EditTaskRecord.down('#dueDateFieldTask') && me.EditTaskRecord.down('#dueDatePickerFieldTask')) {
							if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
								// hidden for chrome / safari
								me.EditTaskRecord.down('#dueDateFieldTask').hide();
								me.EditTaskRecord.down('#dueDatePickerFieldTask').show();
								me.EditTaskRecord.down('#dueDatePickerFieldTask').setName('dueDateTask');
								dueDate = taskRecord.ActivityDate || new Date();
								me.EditTaskRecord.down('#dueDatePickerFieldTask').setValue(new Date(dueDate));
							} else {
								// hidden for IE / Firefox
								me.EditTaskRecord.down('#dueDatePickerFieldTask').hide();
								me.EditTaskRecord.down('#dueDateFieldTask').show();
								me.EditTaskRecord.down('#dueDateFieldTask').setName('dueDateTask');
								me.EditTaskRecord.down('#dueDateFieldTask').setValue(Ext.Date.format(Ext.Date.add(new Date(taskRecord.ActivityDate)), 'Y-m-d'));
							}
						}
					}
				}
			});
		me.EditTaskRecord.cardobjectRecord = Ext.getStore('KanbanCards').findRecord('Id', taskRecord.WhatId);
		me.EditTaskRecord.show();

	},
	openBoardDependency: function () {
		var recordData = glueforce.getWorkspaceConfig(),
		url = '';
		url = recordData.BaseURL + recordData.DependenciesViewURL.replace('/', '') + '?Id=' + recordData.valueStreamID + '&cardid=' + Ext.htmlEncode(this.getNewPostForceId().getValue()) + '&tid=' + Ext.htmlEncode(recordData.valueStreamID) + '&link=1';
		if (url) {
			window.open(this.sanitizURL(url), '_blank');
		}
	},
	onKanbanCardDrop: function (cmpId) {
		this.stickerDroppedKanbanId = cmpId;
	},
	/**
	 * Open overlay for edit Subscriber
	 * @param {Subscriber record object}			SubscriberRecord
	 */
	subscriberEditOverlay: function (SubscriberRecord) {
		_LOG && console.log('subscriberEditOverlay');
		var me = this;
		me.EditSubcriber = Ext.Viewport.add({
				xtype: 'formpanel',
				modal: true,
				hidden: true,
				width: 480,
				floatingCls: 'overlayFloatingClsNew',
				height: 450,
				layout: 'vbox',
				centered: true,
				scrollable: null,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: '10 10 0 10',
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Update Subscriber',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.EditSubcriber.hide();
								}
							}
						]
					}, {
						xtype: 'newPostSubscriber',
						scrollable: null,
						flex: 1
					}, {
						xtype: 'toolbar',
						itemId: 'assignContactBottomToolbar',
						height: 45,
						minHeight: 30,
						ui: 'greyToolbar',
						docked: 'bottom',
						items: [{
								xtype: 'spacer'
							}, {
								xtype: 'button',
								ui: 'actionBtn',
								text: 'Update',
								handler: function () {
									me.newPostEditSubscriberTap();
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (me.EditSubcriber) {
							me.EditSubcriber.destroy();
							me.EditSubcriber = null;
						}
					},
					show: function () {
						me.EditSubcriber.down('#newSubscriberToolbar').setHidden(true);
						me.EditSubcriber.down('#addSubscibers').setHidden(true);
						me.EditSubcriber.down('#editCreateSubscriberTitle').setHtml('<div class="label_priority_cls" style="font-size: 13px !important;">Subscriber</div>');
						me.EditSubcriber.down('#editCreateSubscriberTitleList').setHidden(true);
						var userRecord = Ext.getStore('AllUsers').findRecord('Id', SubscriberRecord.Lean__SubscriberID__c);
						userRecord && me.EditSubcriber.down('#assignSubscribers').setText(Ext.htmlEncode(userRecord.data.Name));
						me.EditSubcriber.down('#assignSubscribers').disable();
						me.EditSubcriber.down('#assignSubscribersId').setValue(SubscriberRecord.Lean__SubscriberID__c);
						var checkBoxes = me.EditSubcriber.getFields();
						if (SubscriberRecord.Lean__Moved__c == "false") {
							// checkBoxes.moved.uncheck();
							checkBoxes.moved.setChecked(false);
						}
						if (SubscriberRecord.Lean__PercentDone__c == "false") {
							// checkBoxes.done.uncheck();
							checkBoxes.done.setChecked(false);
						}
						if (SubscriberRecord.Lean__CardPastDueDate__c == "false") {
							// checkBoxes.pastDue.uncheck();
							checkBoxes.pastDue.setChecked(false);
						}
						if (SubscriberRecord.Lean__TaskPastDueDate__c == "false") {
							// checkBoxes.tasksPastDue.uncheck();
							checkBoxes.tasksPastDue.setChecked(false);
						}
						if (SubscriberRecord.Lean__isTaskCompleted__c == "false") {
							// checkBoxes.isTaskCompleted.uncheck();
							checkBoxes.isTaskCompleted.setChecked(false);
						}
						me.EditSubcriber.down('#subscriberListField').setValue(SubscriberRecord.Id);
					}
				}
			});
		me.EditSubcriber.show();
	},
	/**
	 * validate task duedate according to card date
	 * @param {Ext.Date}      cmp
	 */
	getValidateTaskDueDate: function (cmp) {
		_LOG && console.log('getValidateTaskDueDate');
		if (cmp != '') {
			var cardVals = this.getNewPostView() && this.getNewPostView().getValues(),
			duedateDiff,
			startDateDiff;
			if (cardVals) {
				cardVals = Ext.getStore('KanbanCards').findRecord('ForceID', cardVals.ForceID);
				if (cardVals) {
					cardVals = cardVals.data;
				}
			}
			if (this.EditTaskRecord && this.EditTaskRecord.cardobjectRecord && !cardVals) {
				cardVals = this.EditTaskRecord.cardobjectRecord.data;
				duedateDiff = Ext.Date.diff(new Date((cardVals.DueDate).toDateString()), new Date((this.getDateTime(cmp)).toDateString()), Ext.Date.DAY);
				startDateDiff = Ext.Date.diff(new Date((cardVals.StartDate).toDateString()), new Date((this.getDateTime(cmp)).toDateString()), Ext.Date.DAY);
			} else {
				duedateDiff = Ext.Date.diff(new Date((cardVals.DueDate).toDateString()), new Date((this.getDateTime(cmp)).toDateString()), Ext.Date.DAY);
				startDateDiff = Ext.Date.diff(new Date((cardVals.StartDate).toDateString()), new Date((this.getDateTime(cmp)).toDateString()), Ext.Date.DAY);
			}
			if (duedateDiff > 0) {
				return Ext.Msg.show({
					message: '<div class="popUpCls">Due Date can not be greater than due date of card.</div>',
					buttons: [{
							iconMask: true,
							text: 'OK',
							ui: 'actionBtn',
							handler: function () {
								this.hide();
							}
						}
					]
				});
			}
			if (startDateDiff < 0) {
				return Ext.Msg.show({
					message: '<div class="popUpCls">Due Date can not be smaller or equal than start date of card.</div>',
					buttons: [{
							iconMask: true,
							text: 'OK',
							ui: 'actionBtn',
							handler: function () {
								this.hide();
							}
						}
					]
				});
			}
		}
		return false;

	},

	filterKanbanStoreData: function (kanbanStore, tempKanbanStore, callback) {
		var recordData;
		// <debug>
		_LOG && console.info('filterKanbanStoreData');
		//</debug>
		kanbanStore.each(function (record) {
			recordData = tempKanbanStore.findRecord('Id', record.data.Id);
			if (recordData) {
				if (document.getElementById(recordData.data.Id + 'Div')) {
					document.getElementById(recordData.data.Id + 'Div').style.display = '';
					document.getElementById(recordData.data.Id + 'Div').style.opacity = 1;
					document.getElementById(recordData.data.Id + 'Div').parentElement.style.margin = '';

				}

			} else {
				if (document.getElementById(record.data.Id + 'Div')) {
					document.getElementById(record.data.Id + 'Div').style.display = 'none';
					// document.getElementById(record.data.Id+'Div').style.display=0;
					document.getElementById(record.data.Id + 'Div').parentElement.style.margin = 0;
				}
			}
		});
		if (callback && typeof callback === "function") {
			callback();
		}
		var zoneDataviewRecord = Ext.ComponentQuery.query('#zoneDataview'),
		Allzone = Ext.ComponentQuery.query('zone'),
		zoneId,
		dataviewCmp;
		Ext.Array.forEach(Allzone, function (zoneCmp) {
			zoneId = zoneCmp.getItemId();
			dataviewCmp = zoneCmp.down('#zoneDataview');
			/** Update card limit on zone,Master Container and SwimLane
			 *@param {dataview}							dataviewCmp
			 *@param {Zone id }							zoneId
			 */
			zoneCmp.fireEvent('updatelimits', dataviewCmp, zoneId);
		});
		Ext.Array.forEach(zoneDataviewRecord, function (dataview) {
			dataview.fireEvent('verticalstretch', dataview);
		});

	},
	/**
	 * Advance filter layout Popup
	 * @param {Ext.view.AdvanceFilter}      filterRecord
	 */
	onAdvanceFilter: function (callback, update) {
		// <debug>
		_LOG && console.info('onAdvanceFilter');
		//</debug>
		var me = this,
		tempData,
		arrayfilterRecord = [],
		arrayLinkCard = [],
		filterStore = Ext.getStore('FilterData'),
		kanbanStore = Ext.getStore('KanbanCards'),
		tempKanbanStore = Ext.getStore('TempKanbanCards'),
		i,
		ownerNameData = [],
		stickerArray = [],
		taskNameArray = [],
		categoryNameData = [],
		StickerNameData = [],
		PriorityNameData = [],
		count = 0;
		tempKanbanStore.clearFilter();
		tempKanbanStore.removeAll();
		tempKanbanStore.add(kanbanStore.getData().items);
		if (filterStore.getData().length) {
			tempData = filterStore.getData().items[0].data;
			if (tempData.OwnerName) {
				for (i = 0; i < tempData.OwnerName.length; i++) {
					arrayfilterRecord.push(tempData.OwnerName[i].Id);
					ownerNameData.push(tempData.OwnerName[i].Id);
				}
				ownerNameData.length && count++;
			}
			if (tempData.CategoryName) {
				for (i = 0; i < tempData.CategoryName.length; i++) {
					arrayfilterRecord.push(tempData.CategoryName[i].Id);
					categoryNameData.push(tempData.CategoryName[i].Id);
				}
				categoryNameData.length && count++;
			}
			if (tempData.StickerName) {
				for (i = 0; i < tempData.StickerName.length; i++) {
					arrayfilterRecord.push(tempData.StickerName[i].Id);
					StickerNameData.push(tempData.StickerName[i].Id);
				}
				StickerNameData.length && count++;
			}
			if (tempData.PriorityName) {
				// arrayfilterRecord = arrayfilterRecord.concat(JSON.parse(tempData.PriorityName));
				PriorityNameData = PriorityNameData.concat(JSON.parse(tempData.PriorityName));
				PriorityNameData.length && count++;
			}
			if (tempData.PortfolioLinkCards) {
				for (i = 0; i < tempData.PortfolioLinkCards.length; i++) {
					arrayLinkCard.push(tempData.PortfolioLinkCards[i].ValueStreamCardLink);
				}
			}
			if (update !== 'updateFilter') {
				me.searchPickerOverlay && me.searchPickerOverlay.down('#filterSearchField').setValue('');
				filterStore.first().set('FilterString', '');
			}
			if (count > 1 || arrayLinkCard.length) {
				var filterOwnerValue = new RegExp('(' + Ext.Array.map(arrayfilterRecord, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				var fitlerOwner = new RegExp('(' + Ext.Array.map(ownerNameData, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				var fitlerCat = new RegExp('(' + Ext.Array.map(categoryNameData, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				var fitlerSticker = new RegExp('(' + Ext.Array.map(StickerNameData, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				var fitlerPriority = me.createValueMatcher(PriorityNameData);
				var filterLinkCardValue = new RegExp('(' + Ext.Array.map(arrayLinkCard, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				tempKanbanStore.filterBy(function (record) {
					stickerArray = [];
					taskNameArray = [];
					if (record.data.AllSticker) {
						for (var count = 0; count < record.data.AllSticker.length; count++) {
							record.data.AllSticker[count].Id && stickerArray.push(record.data.AllSticker[count].Id);
							record.data.AllSticker[count].id && stickerArray.push(record.data.AllSticker[count].id);
						}
					}
					if (record.data.TaskUserNames) {
						for (var count = 0; count < record.data.TaskUserNames.length; count++) {
							taskNameArray.push(record.data.TaskUserNames[count].TaskUserId)
						}
					}

					if (record.data.GUID == "shadow" || !record.data.OwnerID) {
						return false;
					}
					if (ownerNameData.length && !(fitlerOwner.test((record.get('OwnerID')).toString()) || filterOwnerValue.test(taskNameArray))) {
						return false;
					}
					if (categoryNameData.length && !fitlerCat.test((record.get('TemplateID')).toString())) {
						return false;
					}
					if (PriorityNameData.length && !fitlerPriority.test((record.get('Priority')).toString())) {
						return false;
					}
					if (StickerNameData.length && !fitlerSticker.test(stickerArray)) {
						return false;
					}
					if (arrayLinkCard.length && !filterLinkCardValue.test((record.get('ValueStreamCardLink')).toString())) {
						return false;
					}
					return true;

				});
			} else if (count || arrayLinkCard.length) {
				if (!arrayfilterRecord.length) {
					arrayfilterRecord.push('none_blank');
				}
				if (!arrayLinkCard.length) {
					arrayLinkCard.push('none_blank');
				}
				if (!PriorityNameData.length) {
					PriorityNameData.push('none_blank');
				}
				var filterOwnerValue = new RegExp('(' + Ext.Array.map(arrayfilterRecord, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');

				var priorityName = me.createValueMatcher(PriorityNameData);
				var filterLinkCardValue = new RegExp('(' + Ext.Array.map(arrayLinkCard, function (arr) {
							arr = arr.replace("%", "");
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				// var filterLinkCardValue = new RegExp('\\b' + arrayLinkCard.join('\\b|\\b') + '\\b', 'i');
				tempKanbanStore.filterBy(function (record) {
					if (record.data.GUID == "shadow" || !record.data.OwnerName) {
						return false;
					}
					stickerArray = [];
					taskNameArray = [];
					if (record.data.AllSticker) {
						for (var count = 0; count < record.data.AllSticker.length; count++) {
							record.data.AllSticker[count].Id && stickerArray.push(record.data.AllSticker[count].Id);
							record.data.AllSticker[count].id && stickerArray.push(record.data.AllSticker[count].id);
						}
					}
					if (record.data.TaskUserNames) {
						for (var count = 0; count < record.data.TaskUserNames.length; count++) {
							taskNameArray.push(record.data.TaskUserNames[count].TaskUserId)
						}
					}
					if (filterOwnerValue.test((record.get('OwnerID')).toString()) || filterOwnerValue.test((record.get('TemplateID')).toString()) || filterLinkCardValue.test((record.get('ValueStreamCardLink')).toString()) || priorityName.test((record.get('Priority')).toString()) || filterOwnerValue.test(stickerArray) || filterOwnerValue.test(taskNameArray)) { //filterStore.first().set('OwnerName', JSON.stringify(storeData));
						return true;
					}
					return false;

				});
			} else {
				tempKanbanStore.clearFilter();
				tempKanbanStore.removeAll();
				tempKanbanStore.add(kanbanStore.getData().items);

			}
		}
		me.filterKanbanStoreData(kanbanStore, tempKanbanStore, callback);

	},
	/**
	 * @method to write a reguler expression to match value according our requirnment
	 * It has some more parameter to handle exact match/case sensetivity or wise-versa
	 * @param {string}				value
	 * @param {boolean}				anyMatch
	 * @param {boolean}				caseSensitive
	 **/
	createValueMatcher: function (value, anyMatch, caseSensitive) {
		// if(!value.exec){ // not a regex
		// value = String(value);
		value = new RegExp((anyMatch === true ? '' : '^') + '(' + Ext.Array.map(value, function (arr) {
					arr = arr.replace("%", "");
					return decodeURIComponent(arr.replace(/\+/g, " "));
				}).join('|') + ')', caseSensitive ? '' : 'i');
		// }
		return value;
	},
	/**
	 * Advance filter layout Popup with string
	 * @param {Ext.view.AdvanceFilter}      filterRecord
	 */
	onAdvanceFilterByString: function (callback) {
		// <debug>
		_LOG && console.info('onAdvanceFilterByString');
		//</debug>
		var me = this,
		tempData,
		arrayfilterRecord = [],
		filterStore = Ext.getStore('FilterData'),
		kanbanStore = Ext.getStore('KanbanCards'),
		tempKanbanStore = Ext.getStore('TempKanbanCards'),
		tempKanbanStoreString = Ext.getStore('TempKanbanCardsString'),
		stickerArray = [];
		tempKanbanStoreString.clearFilter();
		tempKanbanStoreString.removeAll();
		if (tempKanbanStore.getData().length) {
			tempKanbanStoreString.add(tempKanbanStore.getData().items);
		}
		if (filterStore.getData().length) {
			tempData = filterStore.getData().items[0].data;
			if (tempData.FilterString) {
				arrayfilterRecord.push(tempData.FilterString);
			}
			if (arrayfilterRecord.length) {
				var filterOwnerValue = new RegExp('(' + Ext.Array.map(arrayfilterRecord, function (arr) {
							return decodeURIComponent(arr.replace(/\+/g, " "));
						}).join('|') + ')', 'i');
				tempKanbanStoreString.filterBy(function (record) {
					if (record.data.GUID == "shadow" || !record.data.OwnerName) {
						return false;
					}
					stickerArray = [];
					if (record.data.AllSticker) {
						for (var count = 0; count < record.data.AllSticker.length; count++) {
							stickerArray.push(record.data.AllSticker[count].Name)
						}
					}

					if (filterOwnerValue.test((record.get('OwnerName')).toString()) || filterOwnerValue.test((record.get('Title')).toString()) || filterOwnerValue.test((record.get('Name')).toString()) || filterOwnerValue.test((record.get('CardID')).toString()) || filterOwnerValue.test(stickerArray)) { //filterStore.first().set('OwnerName', JSON.stringify(storeData));
						return true;
					}
					return false;

				});
			}
		}
		if (arrayfilterRecord.length) {
			me.filterKanbanStoreData(kanbanStore, tempKanbanStoreString, callback);
		} else {
			me.onAdvanceFilter('', 'updateFilter');
		}

	},
	/**
	 * Assign user name when filter was apply
	 *
	 */
	assignUserNameOncards: function () {
		// <debug>
		_LOG && console.info('assignUserNameOncards');
		//</debug>
		var allUserStore = Ext.getStore('AllUsers'),
		tempKanbanStore = Ext.getStore('TempKanbanCards'),
		u,
		filterStore = Ext.getStore('FilterData'),
		kanbanStore = Ext.getStore('KanbanCards');
		if (filterStore.getData().length && filterStore.getData().items[0].data.FilterString) {
			return;
		}
		tempKanbanStore.clearFilter();
		tempKanbanStore.removeAll();
		tempKanbanStore.add(kanbanStore.getData().items);
		for (u = 0; u < tempKanbanStore.data.length; u++) {
			var ownerId = tempKanbanStore.data.items[u].data.OwnerID;
			var userData = allUserStore.findRecord('Id', ownerId);
			if (userData) {
				tempKanbanStore.data.items[u].data.OwnerName = userData.data.Name;
			}
		}
	},
	/**
	 *Create accordian list of button for filter with Link card
	 ** @param {searchPickerOverlay overlay}      searchOverlay
	 */
	createDynamicAccordianList: function (searchOverlay) {
		// <debug>
		_LOG && console.info('createDynamicAccordianList');
		//</debug>
		var me = this,
		i,
		temp,
		record,
		dataStore = [],
		flag = false,
		tempRecord,
		tempStoreLength,
		kanbanStore = Ext.getStore('KanbanCards'),
		tempKanbanStoreString = Ext.getStore('TempKanbanCardsString'),
		advanceFilterView = searchOverlay.down('advanceFilter'),
		accordianPanel = searchOverlay.down('#dynamicAccordian'),
		xyz;
		advanceFilterView.lastBtnExpand = '';
		accordianPanel.removeAll(true, true);
		if (kanbanStore.getData().length) {
			tempKanbanStoreString.add(kanbanStore.getData().items);
		}
		for (i = 0; i < kanbanStore.data.length; i++) {
			record = kanbanStore.data.items[i].data;
			if (record.ValueStreamLinkID) {
				dataStore = [];
				tempKanbanStoreString.clearFilter();
				tempKanbanStoreString.filter('ValueStreamLinkID', record.ValueStreamLinkID);
				tempStoreLength = tempKanbanStoreString.data.length;
				for (temp = 0; temp < tempStoreLength; temp++) {
					tempRecord = tempKanbanStoreString.data.items[0].data;
					flag = false;
					for (xyz = 0; xyz < dataStore.length; xyz++) {
						if (tempRecord.ValueStreamCardLink == dataStore[xyz].ValueStreamCardLink) {
							flag = true;
						}
					}
					if (!flag && tempRecord.ValueStreamCardLinkName) {
						dataStore.push({
							'ValueStreamCardLinkName': tempRecord.ValueStreamCardLinkName,
							'ValueStreamCardLink': tempRecord.ValueStreamCardLink,
							'ValueStreamLinkIDName': tempRecord.ValueStreamLinkIDName
						});
					}
					tempKanbanStoreString.remove(tempKanbanStoreString.data.items[0]);
				}
				if (dataStore.length) {
					accordianPanel.add({
						xtype: 'panel',
						items: [{
								xtype: 'button',
								cls: 'advanceFilterButton',
								text: 'By Portfolio: ' + Ext.htmlEncode(record.ValueStreamLinkIDName),
								pressedCls: null,
								iconAlign: 'right',
								iconCls: 'upIconClass',
								handler: function (cmp) {
									var cmponent = cmp.up().items;
									if (advanceFilterView.lastBtnExpand) {
										if (cmp.getIconCls() == 'upIconClass' && cmp.getId() == advanceFilterView.lastBtnExpand.items[0].getId()) {
											cmp.setIconCls('downIconClass');
											cmponent.items[1].setHidden(false);
											advanceFilterView.lastBtnExpand = cmponent;

										} else if (cmp.getIconCls() == 'downIconClass' && cmp.getId() == advanceFilterView.lastBtnExpand.items[0].getId()) {
											cmp.setIconCls('upIconClass');
											cmponent.items[1].setHidden(true);
											advanceFilterView.lastBtnExpand = cmponent;
										} else {
											cmp.setIconCls('downIconClass');
											cmponent.items[1].setHidden(false);
											advanceFilterView.lastBtnExpand.items[0].setIconCls('upIconClass');
											advanceFilterView.lastBtnExpand.items[1].setHidden(true);
											advanceFilterView.lastBtnExpand = cmponent;
										}

									} else {
										cmp.setIconCls('downIconClass');
										cmponent.items[1].setHidden(false);
										advanceFilterView.lastBtnExpand = cmponent;
									}
									advanceFilterView.down('#byUserPnl').setHidden(true);
									advanceFilterView.down('#byUser').setIconCls('upIconClass');
									advanceFilterView.down('#byCategoryPnl').setHidden(true);
									advanceFilterView.down('#byCategory').setIconCls('upIconClass');

								}
							}, {
								layout: 'vbox',
								flex: 1,
								scrollable: null,
								hidden: true,
								items: [{
										xtype: 'list',
										flex: 1,
										mode: 'MULTI',
										minHeight: 130,
										itemCls: 'categoryListCls',
										cls: 'allStickerList',
										useSimpleItems: true,
										scrollable: {
											direction: 'vertical',
											directionLock: true
										},
										itemHeight: 30,
										itemTpl: '<tpl><div style="width: 100%;"><span class="stickerCheck"></span><div style="width: 100%;"></div><div class="stickerText" style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{[Ext.htmlEncode(values.ValueStreamCardLinkName)]}</div></div></tpl>',
										style: {
											'background-color': 'transparent'
										},
										listeners: {
											initialize: function () {
												var linkStore = Ext.create("Ext.data.Store", {
														model: "RealTimeKanbanBoard.model.KanbanCard"
													}),
												filterStore = Ext.getStore('FilterData'),
												listRecord,
												index,
												storeData,
												i;
												linkStore.add(dataStore);
												this.setStore(linkStore);
												this.getStore().sort('ValueStreamCardLinkName', 'ASC');
												if (filterStore.getData().length) {
													storeData = filterStore.first().data.PortfolioLinkCards;
													if (storeData) {
														for (i = 0; i < storeData.length; i++) {
															listRecord = this.getStore().findRecord('ValueStreamCardLink', storeData[i].ValueStreamCardLink);
															if (listRecord) {
																index = this.getStore().indexOf(listRecord);
																this.select(index, true);
															}
															/*  else {
															console.log('portfolio');
															me.updateFilterData = true;
															} */

														}
													}
												}
												this.getStore().sort('PortfolioLinkCards', 'ASC');
												if (dataStore.length > 3) {
													this.getScrollable().showIndicators();
													this.getScrollable().setIndicatorsHidingDelay(1800000);
												}
											},
											select: function (list, record, supressed, eOpts) {
												//<debug>
												_LOG && console.log('onLinkCaedFilterSelect');
												//</debug>
												var filterStore = Ext.getStore('FilterData'),
												storeData,
												LinkRecord = [],
												count;
												if (filterStore.getData().length) {
													storeData = filterStore.first().data.PortfolioLinkCards;
													if (storeData) {
														for (count = 0; count < storeData.length; count++) {
															if (storeData[count].ValueStreamCardLink == record.data.ValueStreamCardLink) {
																return;
															}
														}
														storeData.push({
															'ValueStreamCardLink': record.data.ValueStreamCardLink,
															'ValueStreamCardLinkName': Ext.String.escapeRegex(record.data.ValueStreamCardLinkName + ':' + record.data.ValueStreamLinkIDName)
														});
													} else {
														LinkRecord.push({
															'ValueStreamCardLink': record.data.ValueStreamCardLink,
															'ValueStreamCardLinkName': Ext.String.escapeRegex(record.data.ValueStreamCardLinkName + ':' + record.data.ValueStreamLinkIDName)
														});
														storeData = LinkRecord;
													}
													filterStore.first().set('PortfolioLinkCards', storeData);
												} else {
													LinkRecord.push({
														'ValueStreamCardLink': record.data.ValueStreamCardLink,
														'ValueStreamCardLinkName': Ext.String.escapeRegex(record.data.ValueStreamCardLinkName + ':' + record.data.ValueStreamLinkIDName)
													});
													filterStore.add({
														PortfolioLinkCards: LinkRecord
													});
												}
												advanceFilterView.fireEvent('advancefilter', function (value) {
													advanceFilterView.fireEvent('verticalcompress', advanceFilterView);
												});
											},
											deselect: function (list, record, supressed, eOpts) {

												//<debug>
												_LOG && console.log('onLinkCaedFilterSelect');
												//</debug>

												var filterStore = Ext.getStore('FilterData'),
												storeData,
												LinkRecord = [],
												i;
												if (filterStore.getData().length) {
													storeData = filterStore.first().data.PortfolioLinkCards;
													if (storeData) {
														for (i = 0; i < storeData.length; i++) {
															if (storeData[i].ValueStreamCardLink == record.data.ValueStreamCardLink) {
																storeData.splice(i, 1);
															}
														}
														LinkRecord = storeData;
													}
												}
												filterStore.first().set('PortfolioLinkCards', LinkRecord);
												advanceFilterView.fireEvent('advancefilter', function (value) {
													advanceFilterView.fireEvent('verticalcompress', advanceFilterView);
												});
											}
										}
									}
								]
							}
						]
					});
				}

			}
		}
	},

	/**
	 *Deselct all card which was select for multi edit kanban card.
	 ** @param {searchPickerOverlay overlay}      searchOverlay
	 */
	deselectMultiCard: function () {
		// <debug>
		_LOG && console.info('deselectMultiCard');
		//</debug>
		var multiSelectArray = Ext.ux.Config.getMultipleSelectedCard(),
		multiDependencySelectedCard = Ext.ux.Config.getMultiDependencySelectedCard(),
		i;
		// Deselct all card which was selected for multi feature.
		if (multiSelectArray.length) {
			for (i = 0; i < multiSelectArray.length; i++) {
				if (document.getElementById(multiSelectArray[i] + 'Div')) {
					document.getElementById(multiSelectArray[i] + 'Div').parentElement.style.boxShadow = "";
				}
			}
			multiSelectArray.length = 0;
			multiDependencySelectedCard.length = 0;
			Ext.ux.Config.setIsDependencyExist(false);
			// Ext.getCmp('editMultiCard').setHidden(true);
		}
	},

	/**
	 *Edit multiple card from one popUp
	 **
	 */
	editMultiCardPopUp: function () {
		_LOG && console.log('editMultiCardPopUp');
		var me = this,
		meMain = me.mainControllerObj,
		pointStore = Ext.getStore('Points');
		// me.cardfan = textCheck;
		me.getAllTemplateForEditKanban();
		// called to fetch all users once again if any new user is added in value stream related users
		me.newPostOverlay = "";
		if (me.newPostOverlay === "") {
			me.newPostOverlay = Ext.Viewport.add({
					xtype: 'panel',
					modal: true,
					centered: true,
					width: 720,
					floatingCls: 'overlayFloatingClsNew',
					height: '85%',
					maxHeight: 720,
					// zIndex:11,
					itemId: 'newPostOverlayPopUp',
					layout: 'hbox',
					scrollable: null,
					items: [{
							xtype: 'editMultiCardMenu',
							cls: 'preferenceMenuCls'
						}, {
							xtype: 'editMultiCardLayoutContainer',
							flex: 1
						}, {
							xtype: 'toolbar',
							docked: 'bottom',
							height: '45px',
							ui: 'greyToolbar',
							itemId: 'newPostToolbar' // adding items dynamically
						}
					],
					listeners: {
						hide: function () {
							this.destroy();
							me.newPostOverlay = null;
							meMain.fillPoinPickList(glueforce.getWorkspaceConfig().PointPicklist);
						},
						show: function () {
							me.newPostViewActivate('MultiSelect');
							var dueDateFld = me.getNewPostView().down('#dueDateField'),
							isDependency = Ext.ux.Config.getIsDependencyExist(),
							duedatePickerFld = me.getNewPostView().down('#dueDatePickerField');
							if (dueDateFld && duedatePickerFld) {
								if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
									// hidden for chrome / safari
									dueDateFld.hide();
									duedatePickerFld.show();
									duedatePickerFld.setName('DueDate');
									duedatePickerFld.unAfter('change', me.onChangeNewPostStartDateField, duedatePickerFld);
									isDependency && duedatePickerFld.disable();
									duedatePickerFld.onAfter('change', me.onChangeNewPostStartDateField, duedatePickerFld);
								} else {
									// hidden for IE / Firefox
									duedatePickerFld.hide();
									dueDateFld.show();
									dueDateFld.setName('DueDate');
									var defaultDueDate;
									defaultDueDate = Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.DAY, 1), 'Y-m-d');
									isDependency && dueDateFld.disable();
								}
							}
							var startDateFld = me.getNewPostView().down('#StartDateField'),
							startdatePickerFld = me.getNewPostView().down('#StartDatePickerField');
							if (startDateFld && startdatePickerFld) {
								if (browser || Ext.browser.is.Firefox || Ext.browser.is.safari) {
									// hidden for chrome / safari
									startDateFld.hide();
									startdatePickerFld.show();
									startdatePickerFld.setName('StartDate');
									startdatePickerFld.unAfter('change', me.onChangeNewPostStartDateField, startdatePickerFld);
									isDependency && startdatePickerFld.disable();
									startdatePickerFld.onAfter('change', me.onChangeNewPostStartDateField, startdatePickerFld);
								} else {
									// hidden for IE / Firefox
									startdatePickerFld.hide();
									startDateFld.show();
									startDateFld.setName('StartDate');
									var defaultStartDate;
									defaultStartDate = Ext.Date.format(new Date(), 'Y-m-d');
									isDependency && startDateFld.disable();
								}
							}
							me.getNewPostView().down('#durationUnitField').unAfter('change', me.onChangeNewPostStartDateField, me.getNewPostView().down('#durationUnitField'));
							me.getNewPostView().down('#durationUnitField').onAfter('change', me.onChangeNewPostStartDateField, me.getNewPostView().down('#durationUnitField'));
							me.newPostOverlay.down('#onTimeBtn').setHtml('Green');
							me.newPostOverlay.down('#onQualityBtn').setHtml('Green');
							me.newPostOverlay.down('#onBudgetBtn').setHtml('Green');
							me.newPostOverlay.down('#onTimeBtn').setCls('Green' + ' btn_down');
							me.newPostOverlay.down('#onQualityBtn').setCls('Green' + ' btn_down');
							me.newPostOverlay.down('#onBudgetBtn').setCls('Green' + ' btn_down');
							me.newPostOverlay.down('#estimationNumberField').setValue('');
							me.newPostOverlay.down('#estimationEffortRemaining').setValue('');
							me.newPostOverlay.down('#statusHarveyBall').down('dataview').deselectAll();
							Ext.getCmp('harveyBallOneBtn').setValue("");
							me.newPostOverlay.down('#multiSelectModeOn').hide();
							me.getEditMultiCardMenu().select(0);
							isDependency && me.getNewPostView().down('#estimationNumberField').disable(true);
							isDependency && me.getNewPostView().down('#durationUnitField').disable(true);
						}
					}
				});
		}
		me.newPostOverlay.show();
	},
	/**
	 * Edit Multi Kanban card value @view Ext.view.NewPost
	 * @param {Ext.Button}						btn
	 * @param {Ext.event}						e
	 * @param {Object}							opt
	 */
	newMultiPostSaveBtnTap: function (btn, e, opt) {
		_LOG && console.log('newMultiPostSaveBtnTap');
		Ext.Viewport.setMasked({
			xtype: 'loadmask',
			indicator: true,
			message: 'Loading..'
		});
		var me = this,
		meMain = me.mainControllerObj,
		/*New post form values*/
		vals = me.getNewPostView().getValues(),
		alluserStore = Ext.getStore('AllUsers');
		_LOG && console.log('vals--->', vals);
		if (vals.TemplateID) {
			var categoryStore = Ext.getStore('Category'),
			cardconfig = {},
			catRecStore = categoryStore.findRecord('Id', vals.TemplateID);
			if (catRecStore) {
				cardconfig = catRecStore.data;
			}
			if (cardconfig) {
				//crdcolor should be taken from template and used if > 6 chars ['#xxyyzz' or 'rgb(xxx,yyy,zzz)']
				if (cardconfig.Lean__Color__c && cardconfig.Lean__Color__c.length > 6) {
					vals.Color = cardconfig.Lean__Color__c;
				}
				vals.Height = 100;
				vals.Width = 150;
				if (!vals.TemplateID) {
					vals.TemplateID = cardconfig.Id;
				}
				if (!vals.Title) {
					vals.Title = cardconfig.Name;
				}
				if (cardconfig.Lean__JSONDefinition__c && cardconfig.Lean__JSONDefinition__c.length > 0) {
					// vals.Extensions = JSON.parse(Ext.String.htmlDecode(cardconfig.Lean__JSONDefinition__c));
					vals.JSONDefinition = cardconfig.Lean__JSONDefinition__c;
				} else {
					// vals.Extensions = null;
					vals.JSONDefinition = '{}';
				}
			}
		}
		if (vals.EstimatedDuration) {
			vals.DueDate = new Date(me.getDateTime(vals.DueDate, true));
			vals.StartDate = new Date(me.getDateTime(vals.StartDate, true));
		} else {
			vals.DueDate = null;
			vals.StartDate = null;
			// vals.EffortRemaining = null;w
			vals.EstimatedDuration = null;
			vals.DurationUnits = "";
		}

		vals.AccountName = Ext.htmlDecode(me.getAssignAccountBtn().getText());
		vals.OpportunityName = Ext.htmlDecode(me.getAssignOpportunityBtn().getText());
		vals.ContactName = Ext.htmlDecode(me.getAssignContactBtn().getText());
		vals.CaseSubject = Ext.htmlDecode(me.getAssignCaseBtn().getText());
		vals.OnBudget = me.newPostOverlay.down('#onBudgetBtn').getHtml();
		vals.OnQuality = me.newPostOverlay.down('#onQualityBtn').getHtml();
		vals.OnTime = me.newPostOverlay.down('#onTimeBtn').getHtml();
		vals.UrlLink = me.newPostOverlay.down('#urlLinkmarker').getValue();
		// if (!(vals.OwnerID)) {
		// vals.OwnerID = meMain.glueConfigData.UserID;
		// } else {
		// calling method to use set assign user cache in localstorage
		// me.setDataLocalStore(vals.OwnerID);
		// }
		if (vals.Point == 1) {
			vals.Point = null;
		}
		if (vals.OwnerID) {
			var userrecord = alluserStore.findRecord('Id', vals.OwnerID);
			if (userrecord) {
				vals.SmallPhotoUrl = userrecord.get('SmallPhotoUrl');
			}
		}

		// fetching value from dynamic feilds of json definition and stringigy it all and saving it in jsondata field of cmp
		if (Ext.getCmp('jsonDefinitionPanel') && !(Ext.getCmp('jsonDefinitionPanel').isHidden())) {
			var dynField = Ext.getCmp('jsonDefinitionPanel').getComponent('formExtendPanelKanban'),
			params = {},
			fieldName,
			fieldValue;
			if (dynField) {
				Ext.Array.forEach(dynField.getItems().items, function (itm) {
					if (itm) {
						if (itm.getName && itm.getValue) {
							fieldName = itm.getName();
							fieldValue = itm.getValue();
							if (fieldValue) {
								if (itm.getItemId().split('-')[1] == 'datepickerfield') {
									fieldValue = new Date(fieldValue.setDate(fieldValue.getDate() + 1));
								}
								if (itm.getItemId().split('-')[1] == 'checkboxfield') {
									fieldValue = itm.getChecked();
								}
								params[fieldName] = fieldValue;
							}
						}
					}
				});
			}
			vals.JSONData = JSON.stringify(params);
		} else {
			vals.JSONData = '{}';
		}
		// delete
		me.updateMultiCard(JSON.parse(JSON.stringify(Ext.ux.Config.getMultipleSelectedCard())), vals);
		me.newPostOverlay.hide();

	},
	/**
	 *Update multi card record on server
	 * @param {Array of Card Id}						cardArray
	 * @param {Card record Object}						vals
	 */
	updateMultiCard: function (cardArray, vals) {
		_LOG && console.log('updateMultiCard');
		var me = this;
		me.deselectMultiCard();
		glueforce.updateBulkCards(cardArray, JSON.stringify(vals), function (onSuccess) {
			_LOG && console.log('updateBulkCards ', onSuccess);
			setTimeout(function () {
				Ext.Viewport.setMasked(false);

			}, 1000);
		});

	},
	/**
	 *Open popUp, Fire Event when shor key was press
	 * @param {Window.event}						shortCutEvent
	 */
	shortCutKeyPressed: function (shortCutEvent) {
		// return;
		_LOG && console.log('shortCutKeyPressed');
		// console.log('shortCutKeyPressed', shortCutEvent.keyCode);
		// console.log('shortCutKeyPressed', shortCutEvent.target.nodeName);
		var me = this;
		if (shortCutEvent.target.nodeName !== "BODY") {
			return;
		}
		//N :- Open create card  popup.
		if (shortCutEvent.keyCode === 78 && !shortCutEvent.shiftKey && !shortCutEvent.ctrlKey && !shortCutEvent.altKey && !shortCutEvent.location) {
			console.log('1');
			if (!me.newPostOverlay) {
				me.newPostBtnTapSecurity();
			}
			me.mainControllerObj.notificationOverlay && me.mainControllerObj.notificationOverlay.hide();
		} //Esc Button :-  Hide both (N & H)  popup.
		else if (shortCutEvent.keyCode === 27 && !shortCutEvent.shiftKey && !shortCutEvent.ctrlKey && !shortCutEvent.altKey && !shortCutEvent.location) {
			console.log('2');
			me.newPostOverlay && me.newPostOverlay.hide();
			me.mainControllerObj.notificationOverlay && me.mainControllerObj.notificationOverlay.hide();
			if (me.searchPickerOverlay && !me.searchPickerOverlay.isHidden()) {
				me.searchPickerOverlay && me.onSearchBtn(me.getSearchBtn());
			}

		} //H:-  Open Card history popup.
		else if (shortCutEvent.keyCode === 72 && !shortCutEvent.shiftKey && !shortCutEvent.ctrlKey && !shortCutEvent.altKey && !shortCutEvent.location) {
			console.log('3');
			if (!me.mainControllerObj.notificationOverlay) {
				me.mainControllerObj.notificationIconBtnTap();
			}
			me.newPostOverlay && me.newPostOverlay.hide();

		} //Cntrl+shift+Enter :- Create and update card.
		else if (shortCutEvent.keyCode === 13 && shortCutEvent.shiftKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('4');
			if (me.newPostOverlay && me.getNewPostForceId().getValue()) {
				me.newPostSaveBtnTap();
			} else if (me.newPostOverlay) {
				me.newPostCreateBtnTap(me.getNewPostCreateBtn());
			}

		} //Cntrl+Shift+U :- Undo Button.
		else if (shortCutEvent.keyCode === 85 && shortCutEvent.shiftKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('5');
			me.mainControllerObj.undoBtnTap();

		} //Cntrl+Shift+C :- Open Calender view.
		else if (shortCutEvent.keyCode === 67 && shortCutEvent.shiftKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('6');
			if (me.mainControllerObj.getCalenderViewBtn() && !me.mainControllerObj.getCalenderViewBtn().isHidden()) {
				me.mainControllerObj.onCalenderViewBtn();
			}

		} //Cntrl+Alt+D :-Delete Card When Edit card popup open.
		else if (shortCutEvent.keyCode === 68 && shortCutEvent.altKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('7');
			if (me.newPostOverlay && me.getNewPostForceId().getValue()) {
				me.newPostDeleteBtnTap();
			}

		} //Cntrl+Shift+H:- Home button tap event fire.
		else if (shortCutEvent.keyCode === 72 && shortCutEvent.shiftKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('8');
			me.mainControllerObj.onCarouselHometap();
		} //Cntrl+Alt+E:- Edit Board mode.
		else if (shortCutEvent.keyCode === 69 && shortCutEvent.altKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			if (me.mainControllerObj.getViewerModeChangeEditBtn() && !me.mainControllerObj.getViewerModeChangeEditBtn().isHidden()) {
				console.log('9');
				me.mainControllerObj.onSwicthEditBoard();
			}
		} //Cntrl+Alt+P:- Product view board mode.
		else if (shortCutEvent.keyCode === 80 && shortCutEvent.altKey && shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('10');
			if (me.mainControllerObj.getViewerModeChangeBtn() && !me.mainControllerObj.getViewerModeChangeBtn().isHidden()) {
				me.mainControllerObj.onSwicthBoard();
			}
		} //F:- Open filter popup. filterSearchField
		else if (shortCutEvent.keyCode === 70 && !shortCutEvent.altKey && !shortCutEvent.ctrlKey && !shortCutEvent.location) {
			console.log('11');
			if (!me.searchPickerOverlay) {
				me.onSearchBtn(me.getSearchBtn());
				return;
			} else {
				if (me.searchPickerOverlay.isHidden()) {
					me.onSearchBtn(me.getSearchBtn());
					return;
				}
			}
		}
	},
	/**
	 *Open custom right clicl  popUp after selected multiple card.
	 * @param {Window.event}						event
	 */
	customRightClikPopup: function (event) {
		_LOG && console.log('customRightClikPopup');
		var me = this,
		multiSelectArray = JSON.parse(JSON.stringify(Ext.ux.Config.getMultipleSelectedCard())),
		productMC = Ext.ComponentQuery.query('productMasterContainer')[0],
		columnStore = Ext.getStore('Column'),
		masterController = me.getApplication().getController('MasterController'),
		cmpheight = 200,
		displayOptions = [{
				name: 'Edit',
				image: 'editLogMultiCard'
			}, {
				name: 'Move',
				image: 'moveMultiCard'
			}, {
				name: 'Delete',
				image: 'deleteLogMultiCard'
			}, {
				name: 'Clone',
				image: 'Clone'
			}, {
				name: 'Hyper Jump',
				image: 'HyperJumpItem'
			}
		],
		kanbanStore = Ext.getStore('KanbanCards'),
		kanbancardRecord;
		if (!multiSelectArray.length) {
			return;
		}
		if (Ext.getCmp('multiSelectRightClickPopup')) {
			Ext.getCmp('multiSelectRightClickPopup').destroy();
			return;
		}
		var elementNode = me.findParentNode(event.target);
		if (!elementNode) {
			return;
		}

		if (glueforce.getWorkspaceConfig().IsTemplateBoard === true) {
			cmpheight = 160;
			displayOptions = [{
					name: 'Edit',
					image: 'editLogMultiCard'
				}, {
					name: 'Move',
					image: 'moveMultiCard'
				}, {
					name: 'Delete',
					image: 'deleteLogMultiCard'
				}, {
					name: 'Clone',
					image: 'Clone'
				}
			];
		}
		me.multiSelectPopup = Ext.create('Ext.ux.TaskOverList', {
				element: event.target,
				width: 170,
				height: cmpheight,
				modal: true,
				cls: 'sidemenuCls',
				hideOnMaskTap: true,
				padding: 0,
				id: 'multiSelectRightClickPopup',
				alignment: "tl-tr?",
				items: [{
						xtype: 'list',
						height: cmpheight,
						layout: 'fit',
						itemId: 'hyper-jump-clone',
						cls: ['preferenceLeftMenuList', 'cardEditPopUpMenuList'],
						itemHeight: 40,
						scrollable: false,
						itemTpl: '<div class="aParent"><div class="{image:htmlEncode}"></div><div class="menuitemList">{name:htmlEncode}</div></div>',
						data: displayOptions,
						listeners: {
							itemtap: function (list, index) {
								switch (index) {
								case 0:
									me.multiSelectPopup.destroy();
									me.editMultiCardPopUp();
									break;
								case 1:
									var flag = false;
									if (glueforce.getWorkspaceConfig().OpportunitySynchronization) {
										for (var count = 0; count < multiSelectArray.length; ) {
											kanbancardRecord = kanbanStore.findRecord('Id', multiSelectArray[count]);
											if (kanbancardRecord.data.Opportunity) {
												if (document.getElementById(multiSelectArray[count] + 'Div')) {
													document.getElementById(multiSelectArray[count] + 'Div').parentElement.style.boxShadow = "";
												}
												multiSelectArray.splice(count, 1);
												count = 0;
												flag = true;
											} else {
												count++;
											}
										}
									}
									if (glueforce.getWorkspaceConfig().caseSynchronization) {
										for (var count = 0; count < multiSelectArray.length; ) {
											kanbancardRecord = kanbanStore.findRecord('Id', multiSelectArray[count]);
											if (kanbancardRecord.data.CaseID) {
												if (document.getElementById(multiSelectArray[count] + 'Div')) {
													document.getElementById(multiSelectArray[count] + 'Div').parentElement.style.boxShadow = "";
												}
												flag = true;
												multiSelectArray.splice(count, 1);
												count = 0;
											} else {
												count++;
											}
										}
									}
									// if (flag) {

									// }
									if (!multiSelectArray.length) {
										Ext.Msg.show({
											message: '<div class="popUpCls">Cards cannot be moved.Case/Opportunity synchronization setting is turned ON.</div>',
											buttons: [{
													iconMask: true,
													text: 'OK',
													ui: 'actionBtn',
													handler: function () {
														this.hide();
													}
												}
											]
										});
										me.deselectMultiCard();
										me.multiSelectPopup.destroy();
										return false;

									}
									me.multiSelectPopup.destroy();
									Ext.ux.Config.setMultipleSelectedCard(multiSelectArray);
									Ext.Viewport.setMasked({
										xtype: 'loadmask',
										indicator: true,
										message: 'Loading..'
									});
									glueforce.getColumnHierarchy(glueforce.getWorkspaceConfig().valueStreamID, function (columnSuccess) {
										// HyperJumpCategory store to manage " My Preference" selected Column
										if (columnSuccess[0].SubChildRecords.length) {
											columnStore.getProxy().setData(columnSuccess[0]);
											masterController.isColoumnAccordianLoad = true;
										} else {
											columnStore.getProxy().setData(columnSuccess[0].SubChildRecords);
											masterController.isColoumnAccordianLoad = true;
										}
										Ext.Viewport.setMasked(false);
										masterController.getColumnIdHierarchyRecord("MultiSelectCard");
									});
									setTimeout(function () {
										Ext.Viewport.setMasked(false);

									}, 1000);

									break;
								case 2:
									me.multiSelectPopup.destroy();
									me.deleteMultipleCard(multiSelectArray);
									break;
								case 3:
									me.multiSelectPopup.destroy();
									productMC.fireEvent('jumpallcard', multiSelectArray, true, '', 'MultiSelect');

									break;
								case 4:
									me.multiSelectPopup.destroy();
									productMC.fireEvent('jumpallcard', multiSelectArray, false, '', 'MultiSelect');
									// me.deselectMultiCard();
									break;
								default:
									break;
								}
								return false;
							}
						}

					}
				]
			});
	},
	/**
	 *Find parent node when right click event fire
	 * @param {Dom element}						target
	 */
	findParentNode: function (target) {
		_LOG && console.log('findParentNode');
		var testObj = target.parentNode;
		for (var count = 0; count < 5; count++) {
			if (Ext.get(testObj).hasCls('x-dataview-item')) {
				if (testObj.style.boxShadow) {
					return true;
					break;
				}
			}
			testObj = testObj.parentNode;
		}
		return false;
	},
	/**
	 *Delete multi Selected card
	 * @param {Array of Card Id}						cardIdArray
	 */
	deleteMultipleCard: function (cardIdArray) {
		_LOG && console.log('deleteMultipleCard');
		var me = this,
		kanbanStore = Ext.getStore('KanbanCards'),
		dependencyKanabanCards = Ext.getStore('DependencyKanabanCards'),
		count,
		len,
		kanbanRecord;
		Ext.Msg.show({
			message: '<div class="popUpCls">Are you sure you want to delete these cards?</div>',
			buttons: [{
					iconMask: true,
					text: 'Yes',
					margin: 4,
					ui: 'actionBtn',
					handler: function () {
						Ext.Msg.show({
							message: '<div class="popUpCls">Delete all tasks of these cards?</div>',
							buttons: [{
									iconMask: true,
									text: 'Yes',
									margin: 4,
									ui: 'actionBtn',
									handler: function () {
										len = cardIdArray.length;
										for (count = 0; count < len; count++) {
											kanbanRecord = kanbanStore.findRecord("Id", cardIdArray[count]);
											kanbanRecord && kanbanStore.remove(kanbanRecord);
										}
										glueforce.deleteBulkTask(cardIdArray, function (onSuccess) {
											_LOG && console.log('deleteBulkTask');
										});
										this.hide();
										this.hide();
										me.assignUserNameOncards();
										// onAdvanceFilterByString call due to filter feature in kanban controller
										me.onAdvanceFilterByString();
									}
								}, {
									iconMask: true,
									text: 'No',
									ui: 'normal',
									margin: 4,
									cls: 'cancelBtn',
									handler: function () {
										len = cardIdArray.length;
										for (count = 0; count < len; count++) {
											kanbanRecord = kanbanStore.findRecord("Id", cardIdArray[count]);
											kanbanRecord && kanbanStore.remove(kanbanRecord);
										}
										// if No, then also we have to delete the kanban card not the tasks related, they will be saved
										me.assignUserNameOncards();
										// onAdvanceFilterByString call due to filter feature in kanban controller
										me.onAdvanceFilterByString();
										this.hide();
										this.hide();
									}
								}
							]
						});
						// glueforce.deleteKanbanCard(cardIdArray);
						glueforce.manageBulkDelete('DeleteBulkcards', cardIdArray, function (onSuccess) {
							_LOG && console.log('DeleteBulkcards');
						});
						for (count = 0; count < cardIdArray.length; count++) {
							kanbanRecord = dependencyKanabanCards.findRecord('FromId', cardIdArray[count]);
							kanbanRecord && dependencyKanabanCards.remove(kanbanRecord);
							kanbanRecord = dependencyKanabanCards.findRecord('To', cardIdArray[count]);
							kanbanRecord && dependencyKanabanCards.remove(kanbanRecord);
						}

						me.deselectMultiCard();
					}
				}, {
					iconMask: true,
					text: 'No',
					ui: 'normal',
					margin: 4,
					cls: 'cancelBtn',
					handler: function () {
						this.hide();
						this.hide();
					}
				}
			]
		});

	},
	/**
	 *Save custom filter on force.com
	 */
	saveAdvanceFilter: function (cmp, isUpdateData) {
		_LOG && console.log('saveAdvanceFilter');
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		recordId,
		checkBoxFilterBtn = Ext.getCmp('checkBoxFilterBtn'),
		PortfolioLinkCards = [];
		if (isUpdateData !== true) {
			cmp.disable();
		}
		var recordData = (filterStore.getData().items[0] ? filterStore.getData().items[0].data : '');
		recordId = (filterStore.getData().items[0] ? filterStore.getData().items[0].data.ID : '');
		var Filterobjects = {
			CategoryName: (recordData.CategoryName ? JSON.stringify(recordData.CategoryName) : ''),
			StickerName: (recordData.StickerName ? JSON.stringify(recordData.StickerName) : ''),
			PriorityName: (recordData.PriorityName ? recordData.PriorityName : ''),
			PortfolioLinkCards: (recordData.PortfolioLinkCards ? JSON.stringify(recordData.PortfolioLinkCards) : ''),
			OwnerName: (recordData.OwnerName ? JSON.stringify(recordData.OwnerName) : ''),
			FilterName: 'Default',
			ValueStream: glueforce.getWorkspaceConfig().valueStreamID,
			ID: (glueforce.getWorkspaceConfig().KanbanCards.Filters[0] ? glueforce.getWorkspaceConfig().KanbanCards.Filters[0].ID : recordId),
			User: glueforce.getWorkspaceConfig().UserID,
			IsFilterON: true,
			IsDefaultFilter: true,
			isFilterONUpdate: false,
			BoardURL: glueforce.getWorkspaceConfig().BaseURL + '' + glueforce.getWorkspaceConfig().KanbanBoardURL.replace('/', '') + '?Id=' + Ext.htmlEncode(glueforce.getWorkspaceConfig().valueStreamID)
		};

		Ext.getCmp('searchBtn').setIconCls(['serchFilter', 'serchFilterbg']);
		if (document.getElementById("filterCheckbox")) {
			document.getElementById("filterCheckbox").checked = true;
		}
		if (Filterobjects.ID) {
			glueforce.updateFilterRecords(Filterobjects, function (onSuccess) {
				_LOG && console.log('createFilterRecords');
				if (isUpdateData !== true) {
					cmp.enable();
				}

			});
		} else {
			glueforce.createFilterRecords([Filterobjects], function (onSuccess) {
				cmp.enable();
				// _LOG && console.log('createFilterRecords');
				checkBoxFilterBtn.setDisabled(false);
				filterStore.getData().length && filterStore.getData().items[0].set('ID', onSuccess.ID);
				!filterStore.getData().length && filterStore.add({
					ID: onSuccess.ID
				});
			});
		}

	},
	/**
	 *Delete custom filter on force.com
	 */
	deleteFilterRecord: function () {
		_LOG && console.log('deleteFilterRecord');
		var me = this,
		FilterIDs = [],
		filterStore = Ext.getStore('FilterData');
		if (glueforce.getWorkspaceConfig().KanbanCards && glueforce.getWorkspaceConfig().KanbanCards.Filters[0].hasOwnProperty('ID')) {
			FilterIDs.push(glueforce.getWorkspaceConfig().KanbanCards.Filters[0].ID);
		} else if (filterStore.getData().length) {
			var recordData = filterStore.getData().items[0].data;
			if (recordData.ID) {
				FilterIDs.push(recordData.ID);
			} else {
				return;
			}
		} else {
			return;
		}
		Ext.Msg.show({
			message: '<div class="popUpCls">Are you sure you want to delete filter?</div>',
			buttons: [{
					iconMask: true,
					text: 'Yes',
					margin: 4,
					ui: 'actionBtn',
					handler: function () {
						filterStore.removeAll();
						glueforce.getWorkspaceConfig().KanbanCards.Filters = [];
						this.hide();
						this.hide();
						me.searchPickerOverlay && me.searchPickerOverlay.down('#FilterName').setValue('');
						glueforce.deleteFilterRecords(FilterIDs, function (onSuccess) {
							_LOG && console.log('createFilterRecords');
						});
						me.onAdvanceFilterByString();
					}
				}, {
					iconMask: true,
					text: 'No',
					ui: 'normal',
					margin: 4,
					cls: 'cancelBtn',
					handler: function () {
						this.hide();
						this.hide();
					}
				}
			]
		});

	},
	/**
	 *Update filter popup when save filter was applied
	 */
	showSelectedfilter: function () {
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		categoryFilterList,
		allUsers = Ext.getStore('AllUsers'),
		userList,
		categoryList,
		filterReord,
		len = 0,
		count,
		record;
		if (filterStore.getData().length && me.searchPickerOverlay) {
			categoryFilterList = Ext.getStore('categoryFilterList');
			filterReord = JSON.parse(JSON.stringify(filterStore.getData().items[0].data));
			userList = me.searchPickerOverlay.down('#allUserFilterList');
			categoryList = me.searchPickerOverlay.down('#allCategoryFilterList');
			if (filterReord.OwnerName) {
				filterReord.OwnerName = JSON.parse(filterReord.OwnerName);
				len = filterReord.OwnerName.length;
				for (count = 0; count < len; count++) {
					record = allUsers.findRecord('Name', filterReord.OwnerName[count]);
					record && userList.select(record, true, true);
				}
			}
			if (filterReord.CategoryName) {
				filterReord.CategoryName = JSON.parse(filterReord.CategoryName);
				len = filterReord.CategoryName.length;
				for (count = 0; count < len; count++) {
					record = categoryFilterList.findRecord('Name', filterReord.CategoryName[count]);
					record && categoryList.select(record, true, true);
				}
			}
			me.searchPickerOverlay.down('#FilterName').setValue(filterStore.getData().items[0].data.FilterName);
		}
	},
	applyCategoryChange: function (templateObject) {
		_LOG && console.log('applyCategoryChange');
		var me = this,
		flag = false,
		kanbanStore = Ext.getStore('KanbanCards');
		kanbanStore.each(function (record) {
			if (record.data.TemplateID == templateObject.id) {
				record.set('Color', templateObject.color);
				record.set('Title', templateObject.title);
				flag = true;
			}
		});
		kanbanStore.sync();
		// onAdvanceFilterByString call due to filter feature in kanban controller
		flag && me.onAdvanceFilterByString();
	},
	/**
	 *open Folder Hierarchy overlay
	 *@param {Ext.view.LinkView}				view
	 *@param {Ext.Button}						cmp
	 */
	onOpenLinkProject: function (view, cmp) {
		var me = this,
		folderStore = Ext.getStore('Folder');
		me.FolderHierarchyOverlay = Ext.Viewport.add({
				xtype: 'panel',
				modal: true,
				hideOnMaskTap: true,
				width: 500,
				floatingCls: 'overlayFloatingClsNew',
				height: '90%',
				layout: 'vbox',
				centered: true,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						minHeight: 30,
						margin: 10,
						ui: 'topToolBar',
						items: [{
								html: 'Folder',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.FolderHierarchyOverlay.hide();
								}
							}
						]
					}, {
						xtype: 'accordionlist',
						store: 'Folder',
						flex: 1,
						useSelectedHighlights: true,
						indent: true,
						scrollable: {
							direction: 'vertical',
							directionLock: true,
							indicators: {
								y: {
									autoHide: false
								}
							}
						},
						itemId: 'folderHierarchyListView',
						contentItemTpl: '<div style="width:10px;">&nbsp;</div><div style="font-size:14px;">{[Ext.htmlEncode(values.Name)]}</div>',
						headerItemTpl: [
							'<tpl if="this.isExpanded(values)">',
							'<div class="down"></div>',
							'<div style="margin-top: 5px;font-size:14px;">{[Ext.htmlEncode(values.Name)]}</div>',
							'<tpl else>',
							'<div class="right"></div>',
							'<div style="margin-top: 5px;font-size:14px;">{[Ext.htmlEncode(values.Name)]}</div>',
							'</tpl>'
						].join(''),
						listeners: {
							itemtap: function (meAccordian, list, index, target, record, e) {

								if (record.isLeaf()) {
									var newpostview = view.up('#newPostOverlayPopUp');
									if (newpostview) {
										newpostview.down('#assignProjectBoard').setText('');
										newpostview.down('#assignCard').setText('');
										Ext.getCmp('projectBoardLinkKanban').setValue('');
										Ext.getCmp('projectBoardLinkHiddenField').setValue('');
										Ext.getCmp('projectValueStreamLinkBoardType').setValue('');
										Ext.getCmp('projectBoardCardLinkKanban').setValue('');
										Ext.getCmp('projectBoardCardLinkHiddenField').setValue('');
									}
									cmp.setConfig({
										text: Ext.htmlEncode(record.data.Name),
										valueId: record.data.Id
									});
									me.FolderHierarchyOverlay.destroy();
									return false;
								} else {
									list.deselect(index);
								}
							}
						}
					}
				],
				listeners: {
					hide: function () {
						if (me.FolderHierarchyOverlay) {
							me.FolderHierarchyOverlay.destroy();
							me.FolderHierarchyOverlay = null;
						}
					},
					show: function () {
						// if (folderStore.getProxy().getData() && folderStore.getProxy().getData().length == 0) {
						me.FolderHierarchyOverlay.setMasked({
							xtype: 'loadmask',
							message: 'Loading...'
						});
						folderStore.data.clear();
						folderStore.removeAll();
						glueforce.getPortfolioHierarchy(function (columnSuccess) {
							folderStore.getProxy().setData(columnSuccess);
							me.FolderHierarchyOverlay.down('#folderHierarchyListView').load();
							me.FolderHierarchyOverlay && me.FolderHierarchyOverlay.setMasked(false);
						});
						// }
					}
				}
			});
		me.FolderHierarchyOverlay.show();
	},
	/** Checking for secure https
	 * @param {Ext.string}			value
	 */
	sanitizURL: function (value) {
		if (value.startsWith('https:')) {
			return value;
		}
		return '';
	},

	getAllStickerBoard: function (callback) {
		/** get all types of sticker and get stored in local store so that on 3rd fan-out button it quickly show up on pop up*/
		var meMain = this,
		src = "",
		i,
		storeStickers = Ext.getStore('AllStickers');
		if (!storeStickers.getData().length) {
			glueforce.getAllStickers(function (returnArray) {
				_LOG && console.log('getAllStickers ', returnArray);
				meMain.iconImages = returnArray;
				if (meMain.iconImages.length) {
					for (i = 0; i < meMain.iconImages.length; i++) {
						src = "data:" + meMain.iconImages[i].Attachments[0].ContentType + ";base64," + meMain.iconImages[i].Attachments[0].Description;
						storeStickers.add({
							'id': meMain.iconImages[i].Id,
							'Name': meMain.iconImages[i].Name,
							'Image': src,
							'Attachments': returnArray[i].Attachments
						});
					}
					if (meMain.searchPickerOverlay) {
						// console.log('test')
						meMain.searchPickerOverlay.down('#allStickerFilterList').getStore().add(storeStickers.getData().items);
						meMain.checkUncheckAdvanceFilterList();

					}
					if (Ext.isFunction(callback)) {
						callback();
					}
				}
			});
		}

	},

	getAllprojectRoom: function () {
		var me = this,
		AllProjectRooms = Ext.getStore('AllProjectRooms'),
		AllValueStreams = Ext.getStore('AllValueStreams');
		if (!AllProjectRooms.getData().length || !AllProjectRooms.getData().length) {
			/** get all project rooms record*/
			glueforce.getProjectRooms(function (onSuccess) {
				_LOG && console.log('getProjectRooms ', onSuccess);
				if (onSuccess) {
					AllProjectRooms.removeAll();
					AllProjectRooms.add(onSuccess);
				}
			});

			/**get all value streams record*/
			glueforce.getValueStreamsOnLoad(function (onSuccess) {
				_LOG && console.log('getValueStreamsOnLoad ', onSuccess);
				var v;
				if (onSuccess.length) {
					AllValueStreams.removeAll();
					// adding blank item in store first as None
					AllValueStreams.add({
						'Id': '',
						'Lean__ProjectRoom__c': '',
						'Name': 'None',
						'Lean__ProjectRoom__r_Id': '',
						'Lean__ProjectRoom__r_Name': '',
						'Lean__BoardType__c': ''
					});
					for (v = 0; v < onSuccess.length; v++) {
						if (onSuccess[v].Lean__ProjectRoom__r) {
							AllValueStreams.add(onSuccess[v]);
						}
					}
				}
			});
		}
	},
	/**
	 * pop up for choosing owner to card, fetching data from force.com every time, on either keyword search or blank search
	 * initailly pop up will be empty with zero records
	 * @param {Ext.button}				btn
	 * @param {Kanban card Record}				recordKanban
	 */
	allUsersOverlayIconImage: function (btn, recordKanban, event) {
		_LOG && console.log('allUsersOverlayIconImage');
		var me = this,
		meMain = me.mainControllerObj,
		allUsersStore = Ext.getStore('TempAllUsers'),
		alluserStore = Ext.getStore('AllUsers');
		me.assignUserOverlayIcon = Ext.Viewport.add({
				xtype: 'panel',
				// modal: true,
				hideOnMaskTap: true,
				hidden: true,
				id: 'allUsersOverlayIconImagePopup',
				width: 350,
				cls: 'sidemenuCls',
				margin: '-11px 0 0 0px',
				height: 350,
				// zIndex : 50,
				layout: 'vbox',
				// centered: true,
				items: [{
						xtype: 'toolbar',
						docked: 'top',
						height: 35,
						margin: 10,
						minHeight: 30,
						ui: 'topToolBar',
						items: [{
								html: 'Assign an Owner',
								ui: 'topBarBtnNew',
								labelCls: 'btntitlelblCls'
							}, {
								xtype: 'spacer'
							}, {
								cls: 'removeSwimlaneCls',
								ui: 'topBarBtnNew',
								handler: function () {
									me.assignUserOverlayIcon.hide();
								}
							}
						]
					}, {
						xtype: 'panel',
						layout: 'hbox',
						margin: '0px 10px 0px',
						items: [{
								xtype: 'textfield',
								placeHolder: 'Search by Name...',
								clearIcon: false,
								flex: 1,
								cls: 'searchFieldPopUp',
								inputCls: 'searchFieldCls',
								itemId: 'allUserSearchField',
								listeners: {
									blur: function (field) {
										var currVal = field.getValue() || '',
										newVal = Ext.htmlDecode(currVal.replace(/(<([^>]+)>)/ig, ""));
										field.setValue(newVal.trim());
										return true;
									},
									keyup: function (field, e) {
										// 13 = user tapped 'return/enter' button on keyboard
										if (e.browserEvent.keyCode == 13) {
											e.stopEvent();
											me.searchAllUsersBtnTap(me, me.assignUserOverlayIcon, this);
										}
									}
								}
							}, {
								xtype: 'button',
								cls: 'searchBtnCls',
								handler: function () {
									var searchValue = this.up().getComponent('allUserSearchField');
									me.searchAllUsersBtnTap(me, me.assignUserOverlayIcon, searchValue);
								}
							}
						]
					}, {
						xtype: 'list',
						margin: '-14px 10px 0px 10px',
						itemTpl: '{Name:htmlEncode}',
						style: {
							'background': 'transparent'
						},
						itemCls: 'assignUserItemCls',
						flex: 1,
						store: 'TempAllUsers',
						listeners: {
							itemtap: function (list, index, view, record) {
								if (!alluserStore.findRecord('Id', record.data.Id)) {
									alluserStore.add(record);
								}
								if (Ext.ux.Config.getMultipleSelectedCard() && Ext.ux.Config.getMultipleSelectedCard().length) {
									Ext.Viewport.setMasked({
										xtype: 'loadmask',
										indicator: true,
										message: 'Loading..'
									});
									var kanbanCardRecord = new RealTimeKanbanBoard.model.KanbanCard();
									kanbanCardRecord.OwnerID = record.data.Id;
									kanbanCardRecord.SmallPhotoUrl = record.data.SmallPhotoUrl;
									kanbanCardRecord.OwnerName = record.data.Name;
									me.updateMultiCard(JSON.parse(JSON.stringify(Ext.ux.Config.getMultipleSelectedCard())), kanbanCardRecord);
								} else {
									recordKanban = JSON.parse(JSON.stringify(recordKanban.data));
									recordKanban.OwnerID = record.data.Id;
									recordKanban.SmallPhotoUrl = record.data.SmallPhotoUrl;
									recordKanban.OwnerName = record.data.Name;
									me.updateKanbanCardCommand(false, recordKanban, true);

								}

								setTimeout(function () {
									list.up().hide();
								}, 100);
							}
						}
					}, {
						xtype: 'toolbar',
						itemId: 'assignOwnerBottomToolbar',
						height: 35,
						ui: 'greyToolbar',
						items: [{
								xtype: 'button',
								width: 35,
								cls: 'previousBtnDisabledCls',
								itemId: 'allUsersPrevBtn',
								ui: 'topBarBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_allUser > 0) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_allUser -= 10;
										me.assignUserOverlayIcon.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_allUser) {
											me.searchString_allUser = "";
										}
										var nextBtn = this.up().getComponent('allUsersNextBtn');
										meMain.getAllUsers(me.offsetSize_allUser, me.searchString_allUser, me.assignUserOverlayIcon, this, nextBtn);
									}
								}
							}, {
								xtype: 'spacer'
							}, {
								xtype: 'button',
								width: 35,
								ui: 'topBarBtn',
								cls: 'nextBtnDisabledCls',
								itemId: 'allUsersNextBtn',
								disabled: true,
								handler: function () {
									if (me.offsetSize_allUser < me.count_allUser) {
										// 5 is the number count of list items / contacts to show at a time on single page
										me.offsetSize_allUser += 10;
										me.assignUserOverlayIcon && me.assignUserOverlayIcon.setMasked({
											xtype: 'loadmask',
											message: 'Loading...'
										});
										// if moved back and fro without filtering
										if (!me.searchString_allUser) {
											me.searchString_allUser = "";
										}
										var prevBtn = this.up().getComponent('allUsersPrevBtn');
										meMain.getAllUsers(me.offsetSize_allUser, me.searchString_allUser, me.assignUserOverlayIcon, prevBtn, this);
									}
								}
							}
						]
					}
				],
				listeners: {
					hide: function () {
						if (me.assignUserOverlayIcon) {
							me.assignUserOverlayIcon.destroy();
							me.assignUserOverlayIcon = null;
						}
					},
					show: function () {
						allUsersStore.removeAll();
						//add all User data in store using localstorage first time when list is open
						if (localStorage.getItem(glueforce.getWorkspaceConfig().UserID)) {
							var tempStoreUsers = localStorage.getItem(glueforce.getWorkspaceConfig().UserID);
							allUsersStore.add(JSON.parse(tempStoreUsers).reverse());
						}
					}
				}
			});
		if (me.assignUserOverlayIcon.isHidden()) {
			me.assignUserOverlayIcon.showBy(Ext.get(event.target), 'tl-br?');
		} else {
			me.assignUserOverlayIcon.hide();
		}
	},
	/**
	 *Delete All Task from Kanban card record
	 *Param{Array task Id}                 taskListArray
	 *Param{KanbanCard Id}                 kanbanId
	 */
	deleteKanbanTask: function (taskListArray, kanbanId) {
		_LOG && console.log('deleteKanbanTask');
		var taskId = [],
		me = this;
		Ext.Array.forEach(taskListArray, function (kanbanTaskObj) {
			taskId.push(kanbanTaskObj.Id);
		});
		glueforce.removeTask(taskId, kanbanId, function (onSuccess) {
			_LOG && console.log('removeTask ', onSuccess);
			if (onSuccess.type == 'exception') {
				me.mainControllerObj.alertMsgBox(onSuccess.message);
			}
		});
	},
	/**
	 *Clear advance filter data while click on reset btn
	 */
	clearAdvanceFilterData: function (flag) {
		_LOG && console.log('clearAdvanceFilterData');
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		dynamicList = '';
		if (filterStore.getData().length) {
			filterStore.first().set({
				CategoryName: '',
				PriorityName: '',
				StickerName: '',
				OwnerName: '',
				FilterString: '',
				PortfolioLinkCards: ''
			});
			// filterStore.removeAll();
		}
		dynamicList = me.searchPickerOverlay.down('#dynamicAccordian').query('list');
		if (flag !== true && (filterStore.first() || glueforce.getWorkspaceConfig().KanbanCards.Filters[0])) {
			var Filterobjects = new RealTimeKanbanBoard.model.FilterData().data;
			// if (filterStore.first() && filterStore.first().data.ID) {
			Filterobjects.IsFilterON = false;
			Filterobjects.isFilterONUpdate = true;
			Filterobjects.ID = (glueforce.getWorkspaceConfig().KanbanCards.Filters[0] ? glueforce.getWorkspaceConfig().KanbanCards.Filters[0].ID : filterStore.first().data.ID); ;
			delete Filterobjects.id;
			if (Filterobjects.ID) {
				Ext.getCmp('searchBtn').setIconCls(['serchFilter', 'serchFilterbg', 'offFilterCls']);
				document.getElementById("filterCheckbox").checked = false;
				glueforce.updateFilterRecords(Filterobjects, function (filterData) {
					_LOG && console.log('createFilterRecords');

				});
			}
		}
		// onAdvanceFilterByString call due to filter feature in kanban controller
		me.onAdvanceFilterByString();
		if (me.searchPickerOverlay) {
			me.searchPickerOverlay.down('#advanceFilterCheckAllOwner').uncheck();
			me.searchPickerOverlay.down('#advanceFilterCheckAllCat').uncheck();
			me.searchPickerOverlay.down('#advanceFilterCheckAllSticker').uncheck();
			me.searchPickerOverlay.down('#advanceFilterCheckAllPriority').uncheck();
			me.searchPickerOverlay.down('#allUserFilterList').deselectAll(true);
			me.searchPickerOverlay.down('#allCategoryFilterList').deselectAll(true);
			me.searchPickerOverlay.down('#allStickerFilterList').deselectAll(true);
			me.searchPickerOverlay.down('#allPriorityFilterList').deselectAll(true);
			me.searchPickerOverlay.down('#filterSearchField').setValue('');
		}
		for (var i = 0; i < dynamicList.length; i++) {
			dynamicList[i].deselectAll(true);
		}
	},
	/**
	 *update data on force.com when user click on check box filter on.
	 *@param {boolean}          filterOnOff
	 */
	onCheckBoxclick: function (filterOnOff) {
		_LOG && console.log('onCheckBoxclick');
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		Filterobjects = new RealTimeKanbanBoard.model.FilterData().data;
		// if (filterStore.first() && filterStore.first().data.ID) {
		Filterobjects.IsFilterON = filterOnOff;
		Filterobjects.isFilterONUpdate = true;
		Filterobjects.ID = (glueforce.getWorkspaceConfig().KanbanCards.Filters[0] ? glueforce.getWorkspaceConfig().KanbanCards.Filters[0].ID : filterStore.first().data.ID); ;
		delete Filterobjects.id;
		filterOnOff && me.searchPickerOverlay && me.searchPickerOverlay.setMasked({
			xtype: 'loadmask',
			message: 'Loading...'
		});
		me.clearAdvanceFilterData(true);
		glueforce.updateFilterRecords(Filterobjects, function (filterData) {
			_LOG && console.log('createFilterRecords');
			if (filterOnOff) {
				filterStore.removeAll();
				filterData.CategoryName = (filterData.CategoryName ? Ext.decode(filterData.CategoryName) : '');
				filterData.OwnerName = (filterData.OwnerName ? Ext.decode(filterData.OwnerName) : '');
				filterData.PortfolioLinkCards = (filterData.PortfolioLinkCards ? Ext.decode(filterData.PortfolioLinkCards) : '');
				filterData.StickerName = (filterData.StickerName ? Ext.decode(filterData.StickerName) : '');
				filterStore.add(filterData);
				me.checkUncheckAdvanceFilterList();
				// me.onAdvanceFilterByString();
			}
			me.searchPickerOverlay && me.searchPickerOverlay.setMasked(false);
		});
		// }
	},
	/**
	 *check and uncheck advance filter list when filter is ON
	 */
	checkUncheckAdvanceFilterList: function () {
		_LOG && console.log('checkUncheckAdvanceFilterList');
		var me = this,
		filterStore = Ext.getStore('FilterData'),
		count = 0,
		tempData = [],
		filterView = me.searchPickerOverlay,
		allUserFilterList = filterView.down('#allUserFilterList').getStore(),
		kanbanStore = Ext.getStore('KanbanCards'),
		allCategoryFilterList = filterView.down('#allCategoryFilterList').getStore(),
		allStickerFilterList = filterView.down('#allStickerFilterList').getStore(),
		allPriorityFilterList = filterView.down('#allPriorityFilterList').getStore();
		me.createDynamicAccordianList(filterView);
		filterView.down('advanceFilter')._isLoadData = true;
		me.updateFilterData = false;
		if (filterStore.getData().length && filterStore.first().data.IsFilterON) {
			var filterData = filterStore.first().data,
			recordData;
			if (filterData.OwnerName && filterData.OwnerName.length) {
				Ext.Array.forEach(filterData.OwnerName, function (owner) {
					recordData = allUserFilterList.findRecord('Id', owner.Id);
					if (recordData) {
						tempData.push(owner);
						filterView.down('#allUserFilterList').select(allUserFilterList.indexOf(recordData), true);
					} else {
						me.updateFilterData = true;
					}
				});
				filterData.OwnerName = tempData;
			}
			if (filterData.PortfolioLinkCards && filterData.PortfolioLinkCards.length) {
				tempData = [];
				Ext.Array.forEach(filterData.PortfolioLinkCards, function (portfolioLinkCards) {
					recordData = kanbanStore.findRecord('ValueStreamCardLink', portfolioLinkCards.ValueStreamCardLink);
					if (recordData) {
						tempData.push(portfolioLinkCards)
					} else {
						me.updateFilterData = true;
					}
				});
				filterData.PortfolioLinkCards = tempData;
			}
			if (filterData.CategoryName && filterData.CategoryName.length) {
				tempData = [];
				Ext.Array.forEach(filterData.CategoryName, function (categoryRec) {
					recordData = allCategoryFilterList.findRecord('Id', categoryRec.Id);
					if (recordData) {
						tempData.push(categoryRec);
						filterView.down('#allCategoryFilterList').select(allCategoryFilterList.indexOf(recordData), true);
					} else {
						me.updateFilterData = true;
					}
				});
				filterData.CategoryName = tempData;
			}
			if (filterData.StickerName && filterData.StickerName.length) {
				tempData = [];
				Ext.Array.forEach(filterData.StickerName, function (stickerRec) {
					recordData = allStickerFilterList.findRecord('id', stickerRec.Id);
					if (recordData) {
						tempData.push(stickerRec);
						filterView.down('#allStickerFilterList').select(allStickerFilterList.indexOf(recordData), true);
					} else {
						me.updateFilterData = true;
					}
				});
				filterData.StickerName = tempData;
			}
			if (filterData.PriorityName) {
				var priorityName = Ext.decode(filterData.PriorityName);
				Ext.Array.forEach(priorityName, function (priority) {
					recordData = allPriorityFilterList.findRecord('Id', priority);
					if (recordData) {
						filterView.down('#allPriorityFilterList').select(allPriorityFilterList.indexOf(recordData), true);
					}
				});
			}

			if (me.updateFilterData) {
				me.saveAdvanceFilter('', true);
			}
			me.onAdvanceFilterByString();
		}
		filterView.down('advanceFilter')._isLoadData = false;
	},
	/** get Resource allocation percent valuse of kanbanCard
	 *{Param{KanbanCard Id}                          kanbanCardId
	 **/
	getResourceAllocation: function (kanbanCardId) {
		_LOG && console.log('getResourceAllocation');
		var me = this;
		if (kanbanCardId) {
			glueforce.getResourceAssignment(kanbanCardId, function (resourceData) {
				if (me.newPostOverlay && resourceData) {
					me.newPostOverlay.resourceAllocation = [];
					me.newPostOverlay.resourceAllocation.push(resourceData[0]);
					me.newPostOverlay.down('#resourceAllocationFld').setValue(resourceData[0].Units);
				}
			})
		}
	}

});
