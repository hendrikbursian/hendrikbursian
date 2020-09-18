export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  File: any
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  Image: any
}

export type BelongsToFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  typeName?: Maybe<TypeNameQueryOperatorInput>
}

export type DateQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<Scalars['Date']>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<Scalars['Date']>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
  /** Filter by property greater than provided value. */
  gt?: Maybe<Scalars['Date']>
  /** Filter by property greater or equal to provided value. */
  gte?: Maybe<Scalars['Date']>
  /** Filter by property less than provided value. */
  lt?: Maybe<Scalars['Date']>
  /** Filter by property less than or equal to provided value. */
  lte?: Maybe<Scalars['Date']>
  /** Filter by date property equal to provided date value. */
  dteq?: Maybe<Scalars['Date']>
  /** Filter by property between provided values. */
  between?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Education = Node & {
  __typename?: 'Education'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  fileInfo?: Maybe<Education_FileInfo>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  institution?: Maybe<Scalars['String']>
  place?: Maybe<Scalars['String']>
  degree?: Maybe<Scalars['String']>
  dateStart?: Maybe<Scalars['Date']>
  dateEnd?: Maybe<Scalars['Date']>
  headings?: Maybe<Array<Maybe<RemarkHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  belongsTo?: Maybe<NodeBelongsTo>
}

export type EducationPathArgs = {
  to?: Maybe<Scalars['String']>
}

export type EducationExcerptArgs = {
  length?: Maybe<Scalars['Int']>
}

export type EducationDateStartArgs = {
  format?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type EducationDateEndArgs = {
  format?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type EducationHeadingsArgs = {
  depth?: Maybe<RemarkHeadingLevels>
  stripTags?: Maybe<Scalars['Boolean']>
}

export type EducationTimeToReadArgs = {
  speed?: Maybe<Scalars['Int']>
}

export type EducationBelongsToArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<SortArgument>>
  filter?: Maybe<BelongsToFilterInput>
}

export type Education_FileInfo = {
  __typename?: 'Education_FileInfo'
  extension?: Maybe<Scalars['String']>
  directory?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Education_FileInfoFilterInput = {
  extension?: Maybe<StringQueryOperatorInput>
  directory?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type EducationConnection = NodeConnection & {
  __typename?: 'EducationConnection'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<EducationEdge>>>
}

export type EducationEdge = NodeConnectionEdge & {
  __typename?: 'EducationEdge'
  node?: Maybe<Education>
  next?: Maybe<Education>
  previous?: Maybe<Education>
}

export type EducationFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  fileInfo?: Maybe<Education_FileInfoFilterInput>
  content?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  institution?: Maybe<StringQueryOperatorInput>
  place?: Maybe<StringQueryOperatorInput>
  degree?: Maybe<StringQueryOperatorInput>
  dateStart?: Maybe<DateQueryOperatorInput>
  dateEnd?: Maybe<DateQueryOperatorInput>
}

export type ExperienceBusiness = Node & {
  __typename?: 'ExperienceBusiness'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  fileInfo?: Maybe<ExperienceBusiness_FileInfo>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  jobTitle?: Maybe<Scalars['String']>
  workplace?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  dateStart?: Maybe<Scalars['Date']>
  dateEnd?: Maybe<Scalars['Date']>
  headings?: Maybe<Array<Maybe<RemarkHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  belongsTo?: Maybe<NodeBelongsTo>
}

export type ExperienceBusinessPathArgs = {
  to?: Maybe<Scalars['String']>
}

export type ExperienceBusinessExcerptArgs = {
  length?: Maybe<Scalars['Int']>
}

export type ExperienceBusinessDateStartArgs = {
  format?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ExperienceBusinessDateEndArgs = {
  format?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ExperienceBusinessHeadingsArgs = {
  depth?: Maybe<RemarkHeadingLevels>
  stripTags?: Maybe<Scalars['Boolean']>
}

export type ExperienceBusinessTimeToReadArgs = {
  speed?: Maybe<Scalars['Int']>
}

export type ExperienceBusinessBelongsToArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<SortArgument>>
  filter?: Maybe<BelongsToFilterInput>
}

export type ExperienceBusiness_FileInfo = {
  __typename?: 'ExperienceBusiness_FileInfo'
  extension?: Maybe<Scalars['String']>
  directory?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ExperienceBusiness_FileInfoFilterInput = {
  extension?: Maybe<StringQueryOperatorInput>
  directory?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type ExperienceBusinessConnection = NodeConnection & {
  __typename?: 'ExperienceBusinessConnection'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<ExperienceBusinessEdge>>>
}

export type ExperienceBusinessEdge = NodeConnectionEdge & {
  __typename?: 'ExperienceBusinessEdge'
  node?: Maybe<ExperienceBusiness>
  next?: Maybe<ExperienceBusiness>
  previous?: Maybe<ExperienceBusiness>
}

export type ExperienceBusinessFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  fileInfo?: Maybe<ExperienceBusiness_FileInfoFilterInput>
  content?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  company?: Maybe<StringQueryOperatorInput>
  jobTitle?: Maybe<StringQueryOperatorInput>
  workplace?: Maybe<StringQueryOperatorInput>
  website?: Maybe<StringQueryOperatorInput>
  dateStart?: Maybe<DateQueryOperatorInput>
  dateEnd?: Maybe<DateQueryOperatorInput>
}

export type FileQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<Scalars['File']>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<Scalars['File']>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<Scalars['File']>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<Scalars['File']>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
  /** Filter by property matching provided regular expression. */
  regex?: Maybe<Scalars['String']>
}

export type IdQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<Scalars['ID']>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<Scalars['ID']>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
}

export type ImageFit =
  /** Crop to cover both provided dimensions. */
  | 'cover'
  /** Embed within both provided dimensions. */
  | 'contain'
  /** Ignore the aspect ratio of the input and stretch to both provided dimensions. */
  | 'fill'
  /**
   * Preserving aspect ratio, resize the image to be as large as possible while
   * ensuring its dimensions are less than or equal to both those specified.
   */
  | 'inside'
  /**
   * Preserving aspect ratio, resize the image to be as small as possible while
   * ensuring its dimensions are greater than or equal to both those specified.
   * Some of these values are based on the object-fit CSS property.
   */
  | 'outside'

export type JsonQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<Scalars['JSON']>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<Scalars['JSON']>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
  /** Filter by property matching provided regular expression. */
  regex?: Maybe<Scalars['String']>
}

export type Me = Node & {
  __typename?: 'Me'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  fileInfo?: Maybe<Me_FileInfo>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  address?: Maybe<Scalars['String']>
  addressUrl?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  headings?: Maybe<Array<Maybe<RemarkHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  belongsTo?: Maybe<NodeBelongsTo>
}

export type MePathArgs = {
  to?: Maybe<Scalars['String']>
}

export type MeExcerptArgs = {
  length?: Maybe<Scalars['Int']>
}

export type MeHeadingsArgs = {
  depth?: Maybe<RemarkHeadingLevels>
  stripTags?: Maybe<Scalars['Boolean']>
}

export type MeTimeToReadArgs = {
  speed?: Maybe<Scalars['Int']>
}

export type MeBelongsToArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<SortArgument>>
  filter?: Maybe<BelongsToFilterInput>
}

export type Me_FileInfo = {
  __typename?: 'Me_FileInfo'
  extension?: Maybe<Scalars['String']>
  directory?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Me_FileInfoFilterInput = {
  extension?: Maybe<StringQueryOperatorInput>
  directory?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type MeConnection = NodeConnection & {
  __typename?: 'MeConnection'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<MeEdge>>>
}

export type MeEdge = NodeConnectionEdge & {
  __typename?: 'MeEdge'
  node?: Maybe<Me>
  next?: Maybe<Me>
  previous?: Maybe<Me>
}

export type MeFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  fileInfo?: Maybe<Me_FileInfoFilterInput>
  content?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  address?: Maybe<StringQueryOperatorInput>
  addressUrl?: Maybe<StringQueryOperatorInput>
  email?: Maybe<StringQueryOperatorInput>
  phone?: Maybe<StringQueryOperatorInput>
}

export type Metadata = {
  __typename?: 'Metadata'
  siteName?: Maybe<Scalars['String']>
  siteDescription?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  pathPrefix?: Maybe<Scalars['String']>
}

export type Node = {
  id: Scalars['ID']
}

export type NodeBelongsTo = NodeConnection & {
  __typename?: 'NodeBelongsTo'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<NodeBelongsToEdge>>>
}

export type NodeBelongsToEdge = NodeConnectionEdge & {
  __typename?: 'NodeBelongsToEdge'
  node?: Maybe<Node>
  next?: Maybe<Node>
  previous?: Maybe<Node>
}

export type NodeConnection = {
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<NodeConnectionEdge>>>
}

export type NodeConnectionEdge = {
  node?: Maybe<Node>
  next?: Maybe<Node>
  previous?: Maybe<Node>
}

export type Page = {
  __typename?: 'Page'
  path: Scalars['String']
  context: Scalars['JSON']
}

export type PageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  context?: Maybe<JsonQueryOperatorInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  perPage: Scalars['Int']
  currentPage: Scalars['Int']
  totalPages: Scalars['Int']
  totalItems: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  isFirst: Scalars['Boolean']
  isLast: Scalars['Boolean']
}

export type Portfolio = Node & {
  __typename?: 'Portfolio'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  fileInfo?: Maybe<Portfolio_FileInfo>
  content?: Maybe<Scalars['String']>
  excerpt?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  video?: Maybe<Scalars['File']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  headings?: Maybe<Array<Maybe<RemarkHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  belongsTo?: Maybe<NodeBelongsTo>
}

export type PortfolioPathArgs = {
  to?: Maybe<Scalars['String']>
}

export type PortfolioExcerptArgs = {
  length?: Maybe<Scalars['Int']>
}

export type PortfolioHeadingsArgs = {
  depth?: Maybe<RemarkHeadingLevels>
  stripTags?: Maybe<Scalars['Boolean']>
}

export type PortfolioTimeToReadArgs = {
  speed?: Maybe<Scalars['Int']>
}

export type PortfolioBelongsToArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<SortArgument>>
  filter?: Maybe<BelongsToFilterInput>
}

export type Portfolio_FileInfo = {
  __typename?: 'Portfolio_FileInfo'
  extension?: Maybe<Scalars['String']>
  directory?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Portfolio_FileInfoFilterInput = {
  extension?: Maybe<StringQueryOperatorInput>
  directory?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type PortfolioConnection = NodeConnection & {
  __typename?: 'PortfolioConnection'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<PortfolioEdge>>>
}

export type PortfolioEdge = NodeConnectionEdge & {
  __typename?: 'PortfolioEdge'
  node?: Maybe<Portfolio>
  next?: Maybe<Portfolio>
  previous?: Maybe<Portfolio>
}

export type PortfolioFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  fileInfo?: Maybe<Portfolio_FileInfoFilterInput>
  content?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  video?: Maybe<FileQueryOperatorInput>
  tags?: Maybe<StringListQueryOperatorInput>
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<Me>
  allMe?: Maybe<MeConnection>
  portfolio?: Maybe<Portfolio>
  allPortfolio?: Maybe<PortfolioConnection>
  education?: Maybe<Education>
  allEducation?: Maybe<EducationConnection>
  skills?: Maybe<Skills>
  allSkills?: Maybe<SkillsConnection>
  experienceBusiness?: Maybe<ExperienceBusiness>
  allExperienceBusiness?: Maybe<ExperienceBusinessConnection>
  metadata?: Maybe<Metadata>
  /** @deprecated Use Query.metadata instead. */
  metaData?: Maybe<Metadata>
  page?: Maybe<Page>
  allPage?: Maybe<Array<Maybe<Page>>>
}

export type QueryMeArgs = {
  id?: Maybe<Scalars['ID']>
  path?: Maybe<Scalars['String']>
  nullable?: Maybe<Scalars['Boolean']>
}

export type QueryAllMeArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SortArgument>>>
  filter?: Maybe<MeFilterInput>
}

export type QueryPortfolioArgs = {
  id?: Maybe<Scalars['ID']>
  path?: Maybe<Scalars['String']>
  nullable?: Maybe<Scalars['Boolean']>
}

export type QueryAllPortfolioArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SortArgument>>>
  filter?: Maybe<PortfolioFilterInput>
}

export type QueryEducationArgs = {
  id?: Maybe<Scalars['ID']>
  path?: Maybe<Scalars['String']>
  nullable?: Maybe<Scalars['Boolean']>
}

export type QueryAllEducationArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SortArgument>>>
  filter?: Maybe<EducationFilterInput>
}

export type QuerySkillsArgs = {
  id?: Maybe<Scalars['ID']>
  path?: Maybe<Scalars['String']>
  nullable?: Maybe<Scalars['Boolean']>
}

export type QueryAllSkillsArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SortArgument>>>
  filter?: Maybe<SkillsFilterInput>
}

export type QueryExperienceBusinessArgs = {
  id?: Maybe<Scalars['ID']>
  path?: Maybe<Scalars['String']>
  nullable?: Maybe<Scalars['Boolean']>
}

export type QueryAllExperienceBusinessArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<Maybe<SortArgument>>>
  filter?: Maybe<ExperienceBusinessFilterInput>
}

export type QueryPageArgs = {
  path: Scalars['String']
}

export type QueryAllPageArgs = {
  filter?: Maybe<PageFilterInput>
}

export type RemarkHeading = {
  __typename?: 'RemarkHeading'
  depth?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['String']>
  anchor?: Maybe<Scalars['String']>
}

export type RemarkHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type Skills = Node & {
  __typename?: 'Skills'
  id: Scalars['ID']
  path?: Maybe<Scalars['String']>
  fileInfo?: Maybe<Skills_FileInfo>
  lang?: Maybe<Scalars['String']>
  skills?: Maybe<Array<Maybe<Skills_Skills>>>
  belongsTo?: Maybe<NodeBelongsTo>
}

export type SkillsPathArgs = {
  to?: Maybe<Scalars['String']>
}

export type SkillsBelongsToArgs = {
  sortBy?: Maybe<Scalars['String']>
  order?: Maybe<SortOrder>
  perPage?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  sort?: Maybe<Array<SortArgument>>
  filter?: Maybe<BelongsToFilterInput>
}

export type Skills_FileInfo = {
  __typename?: 'Skills_FileInfo'
  extension?: Maybe<Scalars['String']>
  directory?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Skills_FileInfoFilterInput = {
  extension?: Maybe<StringQueryOperatorInput>
  directory?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
}

export type Skills_Skills = {
  __typename?: 'Skills_Skills'
  name?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  experience?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Skills_SkillsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  link?: Maybe<StringQueryOperatorInput>
  experience?: Maybe<StringListQueryOperatorInput>
}

export type SkillsConnection = NodeConnection & {
  __typename?: 'SkillsConnection'
  totalCount: Scalars['Int']
  pageInfo: PageInfo
  edges?: Maybe<Array<Maybe<SkillsEdge>>>
}

export type SkillsEdge = NodeConnectionEdge & {
  __typename?: 'SkillsEdge'
  node?: Maybe<Skills>
  next?: Maybe<Skills>
  previous?: Maybe<Skills>
}

export type SkillsFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  fileInfo?: Maybe<Skills_FileInfoFilterInput>
  lang?: Maybe<StringQueryOperatorInput>
  skills?: Maybe<Skills_SkillsFilterInput>
}

export type SortArgument = {
  by: Scalars['String']
  order?: Maybe<SortOrder>
}

export type SortOrder =
  /** Sort ascending */
  | 'ASC'
  /** Sort descending */
  | 'DESC'

export type StringListQueryOperatorInput = {
  /** Filter which have an array property of specified size. */
  size?: Maybe<Scalars['Int']>
  /** Filter by property containing the provided value. */
  contains?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Filter by property containing any of the provided values. */
  containsAny?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Filter by property containing none of the provided values. */
  containsNone?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type StringQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<Scalars['String']>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<Scalars['String']>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
  /** Filter by property matching provided regular expression. */
  regex?: Maybe<Scalars['String']>
}

export type TypeName =
  | 'Me'
  | 'Portfolio'
  | 'Education'
  | 'Skills'
  | 'ExperienceBusiness'

export type TypeNameQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: Maybe<TypeName>
  /** Filter by property not equal to provided value. */
  ne?: Maybe<TypeName>
  /** Filter by property matching any of the provided values. */
  in?: Maybe<Array<Maybe<TypeName>>>
  /** Filter by property not matching any of the provided values. */
  nin?: Maybe<Array<Maybe<TypeName>>>
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: Maybe<Scalars['Boolean']>
}
